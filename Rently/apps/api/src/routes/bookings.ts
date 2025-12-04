import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import prisma from "../lib/prisma";
import type { Service } from "@prisma/client";

export const bookingsRoute = new Hono();

const createBookingSchema = z.object({
  userId: z.string(),
  eventName: z.string().min(1),
  eventType: z.string().optional(),
  eventDate: z.string().transform((str: string) => new Date(str)),
  startTime: z.string().optional().transform((str: string | undefined) => str ? new Date(str) : undefined),
  endTime: z.string().optional().transform((str: string | undefined) => str ? new Date(str) : undefined),
  guestCount: z.number().optional(),
  notes: z.string().optional(),
  items: z.array(
    z.object({
      vendorId: z.string(),
      serviceId: z.string(),
      quantity: z.number().default(1),
    })
  ),
});

// Create booking
bookingsRoute.post("/", zValidator("json", createBookingSchema), async (c) => {
  const data = c.req.valid("json");

  // Get service prices
  const serviceIds = data.items.map((item) => item.serviceId);
  const services = await prisma.service.findMany({
    where: { id: { in: serviceIds } },
  });

  const serviceMap = new Map<string, Service>(services.map((s) => [s.id, s]));

  // Calculate totals
  let subtotal = 0;
  const bookingItems = data.items.map((item) => {
    const service = serviceMap.get(item.serviceId);
    if (!service) throw new Error(`Service ${item.serviceId} not found`);

    const totalPrice = service.price * item.quantity;
    subtotal += totalPrice;

    return {
      vendorId: item.vendorId,
      serviceId: item.serviceId,
      quantity: item.quantity,
      unitPrice: service.price,
      totalPrice,
    };
  });

  const serviceFee = subtotal * 0.05; // 5% service fee
  const total = subtotal + serviceFee;

  const booking = await prisma.booking.create({
    data: {
      userId: data.userId,
      eventName: data.eventName,
      eventType: data.eventType,
      eventDate: data.eventDate,
      startTime: data.startTime,
      endTime: data.endTime,
      guestCount: data.guestCount,
      notes: data.notes,
      subtotal,
      serviceFee,
      total,
      items: {
        create: bookingItems,
      },
    },
    include: {
      items: {
        include: {
          vendor: { select: { businessName: true } },
          service: { select: { name: true } },
        },
      },
    },
  });

  return c.json({ data: booking }, 201);
});

// Get user's bookings
bookingsRoute.get("/user/:userId", async (c) => {
  const userId = c.req.param("userId");

  const bookings = await prisma.booking.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          vendor: { select: { businessName: true, logo: true } },
          service: { select: { name: true } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return c.json({ data: bookings });
});

// Get single booking
bookingsRoute.get("/:id", async (c) => {
  const id = c.req.param("id");

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: {
      user: { select: { name: true, email: true, phone: true } },
      items: {
        include: {
          vendor: true,
          service: true,
        },
      },
    },
  });

  if (!booking) {
    return c.json({ error: "Booking not found" }, 404);
  }

  return c.json({ data: booking });
});

// Update booking status
bookingsRoute.patch("/:id/status", async (c) => {
  const id = c.req.param("id");
  const { status } = await c.req.json();

  const booking = await prisma.booking.update({
    where: { id },
    data: { status },
  });

  return c.json({ data: booking });
});
