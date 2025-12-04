// ============================================================================
// VENDOR TYPES
// ============================================================================

export type VendorCategory = "VENUE" | "CATERING" | "ARTIST" | "SERVICE";

export type ServiceCategory =
  // Venues
  | "WEDDING_HALL"
  | "CONFERENCE_ROOM"
  | "VIP_ROOM"
  | "OUTDOOR_VENUE"
  | "RESTAURANT"
  // Catering
  | "FOOD_CATERING"
  | "DRINK_BAR"
  | "DESSERT_TABLE"
  | "COFFEE_STATION"
  // Artists
  | "DJ"
  | "BAND"
  | "MC"
  | "DANCER"
  | "PHOTOGRAPHER"
  | "VIDEOGRAPHER"
  // Services
  | "DECORATION"
  | "SOUND_LIGHTING"
  | "EQUIPMENT_RENTAL"
  | "EVENT_PLANNER";

export type PriceType = "FIXED" | "PER_PERSON" | "PER_HOUR" | "CUSTOM";

export type BookingStatus = "DRAFT" | "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";

export type BookingItemStatus = "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED";

export type UserRole = "USER" | "VENDOR" | "ADMIN";

// ============================================================================
// ENTITY INTERFACES
// ============================================================================

export interface User {
  id: string;
  email: string;
  phone?: string;
  name: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Vendor {
  id: string;
  userId: string;
  businessName: string;
  slug: string;
  description?: string;
  category: VendorCategory;
  address?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
  logo?: string;
  coverImage?: string;
  images: string[];
  isVerified: boolean;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  vendorId: string;
  name: string;
  description?: string;
  category: ServiceCategory;
  priceType: PriceType;
  price: number;
  priceUnit?: string;
  minQuantity?: number;
  maxQuantity?: number;
  capacity?: number;
  images: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  userId: string;
  eventName: string;
  eventType?: string;
  eventDate: Date;
  startTime?: Date;
  endTime?: Date;
  guestCount?: number;
  notes?: string;
  subtotal: number;
  serviceFee: number;
  total: number;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
  items?: BookingItem[];
}

export interface BookingItem {
  id: string;
  bookingId: string;
  vendorId: string;
  serviceId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: BookingItemStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  vendorId: string;
  rating: number;
  comment?: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T> {
  data: T;
  message?: string;
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

export interface ApiError {
  error: string;
  message: string;
  statusCode?: number;
}

// ============================================================================
// CATEGORY TYPES
// ============================================================================

export interface CategoryInfo {
  id: string;
  name_en: string;
  name_mn: string;
  icon?: string;
  count?: number;
}

export interface VendorCategoryInfo extends CategoryInfo {
  id: VendorCategory;
}

export interface ServiceCategoryInfo extends CategoryInfo {
  id: ServiceCategory;
}
