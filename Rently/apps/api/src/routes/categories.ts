import { Hono } from "hono";
import prisma from "../lib/prisma";

export const categoriesRoute = new Hono();

// Category definitions with Mongolian translations
const CATEGORIES = {
  vendors: [
    { id: "VENUE", name_en: "Venues & Halls", name_mn: "Заал & Танхим", icon: "building" },
    { id: "CATERING", name_en: "Catering", name_mn: "Хоол & Зоог", icon: "utensils" },
    { id: "ARTIST", name_en: "Artists & Performers", name_mn: "Уран бүтээлчид", icon: "music" },
    { id: "SERVICE", name_en: "Event Services", name_mn: "Үйлчилгээ", icon: "settings" },
  ],
  services: {
    VENUE: [
      { id: "WEDDING_HALL", name_en: "Wedding Hall", name_mn: "Хуримын заал" },
      { id: "CONFERENCE_ROOM", name_en: "Conference Room", name_mn: "Хурлын танхим" },
      { id: "VIP_ROOM", name_en: "VIP Room", name_mn: "VIP өрөө" },
      { id: "OUTDOOR_VENUE", name_en: "Outdoor Venue", name_mn: "Задгай талбай" },
      { id: "RESTAURANT", name_en: "Restaurant", name_mn: "Ресторан" },
    ],
    CATERING: [
      { id: "FOOD_CATERING", name_en: "Food Catering", name_mn: "Хоолны үйлчилгээ" },
      { id: "DRINK_BAR", name_en: "Drink Bar", name_mn: "Ундааны бар" },
      { id: "DESSERT_TABLE", name_en: "Dessert Table", name_mn: "Амттаны ширээ" },
      { id: "COFFEE_STATION", name_en: "Coffee Station", name_mn: "Кофены буланг" },
    ],
    ARTIST: [
      { id: "DJ", name_en: "DJ", name_mn: "DJ" },
      { id: "BAND", name_en: "Band", name_mn: "Хамтлаг" },
      { id: "MC", name_en: "MC / Host", name_mn: "Хөтлөгч" },
      { id: "DANCER", name_en: "Dancer", name_mn: "Бүжигчин" },
      { id: "PHOTOGRAPHER", name_en: "Photographer", name_mn: "Гэрэл зурагчин" },
      { id: "VIDEOGRAPHER", name_en: "Videographer", name_mn: "Видео зураглаач" },
    ],
    SERVICE: [
      { id: "DECORATION", name_en: "Decoration", name_mn: "Чимэглэл" },
      { id: "SOUND_LIGHTING", name_en: "Sound & Lighting", name_mn: "Дуу & Гэрэл" },
      { id: "EQUIPMENT_RENTAL", name_en: "Equipment Rental", name_mn: "Тоног төхөөрөмж" },
      { id: "EVENT_PLANNER", name_en: "Event Planner", name_mn: "Арга хэмжээ зохион байгуулагч" },
    ],
  },
};

// Get all categories
categoriesRoute.get("/", async (c) => {
  return c.json({ data: CATEGORIES });
});

// Get vendor categories with counts
categoriesRoute.get("/vendors", async (c) => {
  const counts = await prisma.vendor.groupBy({
    by: ["category"],
    where: { isActive: true },
    _count: { id: true },
  });

  const countMap = new Map(counts.map((item: { category: string; _count: { id: number } }) => [item.category, item._count.id]));

  const categoriesWithCounts = CATEGORIES.vendors.map((cat) => ({
    ...cat,
    count: countMap.get(cat.id) || 0,
  }));

  return c.json({ data: categoriesWithCounts });
});

// Get service categories for a vendor type
categoriesRoute.get("/services/:vendorCategory", async (c) => {
  const vendorCategory = c.req.param("vendorCategory").toUpperCase();
  const services = CATEGORIES.services[vendorCategory as keyof typeof CATEGORIES.services];

  if (!services) {
    return c.json({ error: "Invalid vendor category" }, 400);
  }

  return c.json({ data: services });
});
