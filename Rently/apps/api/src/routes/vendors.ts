import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import prisma from "../lib/prisma";

export const vendorsRoute = new Hono();

// Get all vendors with filtering
vendorsRoute.get("/", async (c) => {
  const category = c.req.query("category");
  const city = c.req.query("city");
  const search = c.req.query("search");
  const limit = parseInt(c.req.query("limit") || "20");
  const offset = parseInt(c.req.query("offset") || "0");

  const where: any = {
    isActive: true,
  };

  if (category) {
    where.category = category.toUpperCase();
  }

  if (city) {
    where.city = { contains: city, mode: "insensitive" };
  }

  if (search) {
    where.OR = [
      { businessName: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  const [vendors, total] = await Promise.all([
    prisma.vendor.findMany({
      where,
      include: {
        services: {
          where: { isActive: true },
          take: 3,
        },
        _count: {
          select: { reviews: true, favorites: true },
        },
      },
      orderBy: [{ isVerified: "desc" }, { rating: "desc" }],
      take: limit,
      skip: offset,
    }),
    prisma.vendor.count({ where }),
  ]);

  return c.json({
    data: vendors,
    pagination: {
      total,
      limit,
      offset,
      hasMore: offset + vendors.length < total,
    },
  });
});

// Get single vendor by slug
vendorsRoute.get("/:slug", async (c) => {
  const slug = c.req.param("slug");

  const vendor = await prisma.vendor.findUnique({
    where: { slug },
    include: {
      user: {
        select: { name: true, avatar: true },
      },
      services: {
        where: { isActive: true },
        orderBy: { createdAt: "desc" },
      },
      reviews: {
        include: {
          user: { select: { name: true, avatar: true } },
        },
        orderBy: { createdAt: "desc" },
        take: 10,
      },
      _count: {
        select: { reviews: true, favorites: true },
      },
    },
  });

  if (!vendor) {
    return c.json({ error: "Vendor not found" }, 404);
  }

  return c.json({ data: vendor });
});

// Get featured vendors
vendorsRoute.get("/featured/list", async (c) => {
  const vendors = await prisma.vendor.findMany({
    where: {
      isActive: true,
      isVerified: true,
      rating: { gte: 4 },
    },
    include: {
      services: {
        where: { isActive: true },
        take: 1,
      },
    },
    orderBy: { rating: "desc" },
    take: 6,
  });

  return c.json({ data: vendors });
});
