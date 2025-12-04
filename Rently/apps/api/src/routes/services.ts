import { Hono } from "hono";
import prisma from "../lib/prisma";

export const servicesRoute = new Hono();

// Get all services with filtering
servicesRoute.get("/", async (c) => {
  const category = c.req.query("category");
  const vendorId = c.req.query("vendorId");
  const minPrice = c.req.query("minPrice");
  const maxPrice = c.req.query("maxPrice");
  const limit = parseInt(c.req.query("limit") || "20");
  const offset = parseInt(c.req.query("offset") || "0");

  const where: any = {
    isActive: true,
  };

  if (category) {
    where.category = category.toUpperCase();
  }

  if (vendorId) {
    where.vendorId = vendorId;
  }

  if (minPrice) {
    where.price = { ...where.price, gte: parseFloat(minPrice) };
  }

  if (maxPrice) {
    where.price = { ...where.price, lte: parseFloat(maxPrice) };
  }

  const [services, total] = await Promise.all([
    prisma.service.findMany({
      where,
      include: {
        vendor: {
          select: {
            id: true,
            businessName: true,
            slug: true,
            logo: true,
            rating: true,
            isVerified: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: offset,
    }),
    prisma.service.count({ where }),
  ]);

  return c.json({
    data: services,
    pagination: {
      total,
      limit,
      offset,
      hasMore: offset + services.length < total,
    },
  });
});

// Get single service
servicesRoute.get("/:id", async (c) => {
  const id = c.req.param("id");

  const service = await prisma.service.findUnique({
    where: { id },
    include: {
      vendor: {
        select: {
          id: true,
          businessName: true,
          slug: true,
          logo: true,
          rating: true,
          isVerified: true,
          contactPhone: true,
          contactEmail: true,
        },
      },
    },
  });

  if (!service) {
    return c.json({ error: "Service not found" }, 404);
  }

  return c.json({ data: service });
});
