import type { VendorCategoryInfo, ServiceCategoryInfo } from "./types";

// ============================================================================
// VENDOR CATEGORIES
// ============================================================================

export const VENDOR_CATEGORIES: VendorCategoryInfo[] = [
  { id: "VENUE", name_en: "Venues & Halls", name_mn: "Заал & Танхим", icon: "building" },
  { id: "CATERING", name_en: "Catering", name_mn: "Хоол & Зоог", icon: "utensils" },
  { id: "ARTIST", name_en: "Artists & Performers", name_mn: "Уран бүтээлчид", icon: "music" },
  { id: "SERVICE", name_en: "Event Services", name_mn: "Үйлчилгээ", icon: "settings" },
];

// ============================================================================
// SERVICE CATEGORIES BY VENDOR TYPE
// ============================================================================

export const SERVICE_CATEGORIES: Record<string, ServiceCategoryInfo[]> = {
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
};

// ============================================================================
// BRAND CONSTANTS
// ============================================================================

export const BRAND = {
  name: "EVENTLY",
  tagline: "Curate. Combine. Celebrate.",
  tagline_mn: "Сонго. Нэгтгэ. Тэмдэглэ.",
  
  hero: {
    title_mn: "Төгс арга хэмжээг нэг дороос бүтээ",
    title_en: "Design your perfect event — all in one place",
    subtitle_mn: "Заал, хоол, уран бүтээлчид, үйлчилгээ — бүгдийг нэгтгэн захиалаарай.",
    subtitle_en: "Venues, catering, performers, and services — combined & booked effortlessly.",
  },
  
  cta: {
    primary_mn: "Арга хэмжээ эхлүүлэх",
    primary_en: "Start Your Event",
    secondary_mn: "Үйлчилгээ үзэх",
    secondary_en: "Explore Services",
  },
} as const;

// ============================================================================
// DESIGN TOKENS
// ============================================================================

export const COLORS = {
  primary: "#C9A86C",
  primaryLight: "#E8D5B5",
  primaryDark: "#A08455",
  secondary: "#1F1F1F",
  background: "#FAF7F2",
  accent: "#E8D4D4",
  muted: "#6B7280",
  
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
} as const;

// ============================================================================
// API CONSTANTS
// ============================================================================

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1",
  timeout: 10000,
} as const;

export const PAGINATION = {
  defaultLimit: 20,
  maxLimit: 100,
} as const;
