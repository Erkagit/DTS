// API client for Evently
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";

export interface Vendor {
  id: string;
  businessName: string;
  slug: string;
  description: string | null;
  category: "VENUE" | "CATERING" | "ARTIST" | "SERVICE";
  address: string | null;
  city: string | null;
  logo: string | null;
  coverImage: string | null;
  images: string[];
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  services?: Service[];
  _count?: {
    reviews: number;
    favorites: number;
  };
}

export interface Service {
  id: string;
  vendorId: string;
  name: string;
  description: string | null;
  category: string;
  priceType: "FIXED" | "PER_PERSON" | "PER_HOUR" | "CUSTOM";
  price: number;
  priceUnit: string | null;
  capacity: number | null;
  images: string[];
  vendor?: Vendor;
}

export interface Category {
  id: string;
  name_en: string;
  name_mn: string;
  icon: string;
  count?: number;
}

export interface ApiResponse<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

// Fetch vendors by category
export async function getVendors(category?: string, limit = 20, offset = 0): Promise<PaginatedResponse<Vendor>> {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  params.set("limit", String(limit));
  params.set("offset", String(offset));

  const res = await fetch(`${API_BASE_URL}/vendors?${params}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch vendors");
  return res.json();
}

// Fetch single vendor by slug
export async function getVendor(slug: string): Promise<ApiResponse<Vendor>> {
  const res = await fetch(`${API_BASE_URL}/vendors/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch vendor");
  return res.json();
}

// Fetch featured vendors
export async function getFeaturedVendors(): Promise<ApiResponse<Vendor[]>> {
  const res = await fetch(`${API_BASE_URL}/vendors/featured/list`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch featured vendors");
  return res.json();
}

// Fetch services
export async function getServices(category?: string, vendorId?: string): Promise<PaginatedResponse<Service>> {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (vendorId) params.set("vendorId", vendorId);

  const res = await fetch(`${API_BASE_URL}/services?${params}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

// Fetch categories
export async function getCategories(): Promise<ApiResponse<{ vendors: Category[]; services: Record<string, Category[]> }>> {
  const res = await fetch(`${API_BASE_URL}/categories`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

// Format price
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("mn-MN", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(price) + "₮";
}
