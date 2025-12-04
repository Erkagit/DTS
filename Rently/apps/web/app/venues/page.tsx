"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Search, SlidersHorizontal, MapPin } from "lucide-react";
import VendorCard from "../components/VendorCard";
import type { Vendor } from "../lib/api";

// Mock data for now - will be replaced with API call
const mockVenues: Vendor[] = [
  {
    id: "1",
    businessName: "The Grand Hall",
    slug: "the-grand-hall",
    description: "Хотын төвд байрлах 200 хүний багтаамжтай тансаг заал. Хурим, корпоратив арга хэмжээнд тохиромжтой.",
    category: "VENUE",
    address: "Сүхбаатар дүүрэг, 1-р хороо",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
    images: [],
    isVerified: true,
    rating: 4.8,
    reviewCount: 124,
    services: [{ id: "1", vendorId: "1", name: "Үндсэн заал", description: null, category: "WEDDING_HALL", priceType: "FIXED", price: 2500000, priceUnit: null, capacity: 200, images: [] }],
  },
  {
    id: "2",
    businessName: "Blue Sky Convention",
    slug: "blue-sky-convention",
    description: "Олон улсын стандартад нийцсэн хурлын танхим. Орчин үеийн тоног төхөөрөмжтэй.",
    category: "VENUE",
    address: "Чингисийн өргөн чөлөө",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800",
    images: [],
    isVerified: true,
    rating: 4.9,
    reviewCount: 89,
    services: [{ id: "2", vendorId: "2", name: "Хурлын танхим", description: null, category: "CONFERENCE_ROOM", priceType: "PER_HOUR", price: 500000, priceUnit: "цаг", capacity: 100, images: [] }],
  },
  {
    id: "3",
    businessName: "Garden Palace",
    slug: "garden-palace",
    description: "Цэцэрлэгт хүрээлэнтэй гадаа талбайтай. Зуны үеийн арга хэмжээнд тохиромжтой.",
    category: "VENUE",
    address: "Хан-Уул дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    images: [],
    isVerified: false,
    rating: 4.6,
    reviewCount: 56,
    services: [{ id: "3", vendorId: "3", name: "Гадаа талбай", description: null, category: "OUTDOOR_VENUE", priceType: "FIXED", price: 1800000, priceUnit: null, capacity: 150, images: [] }],
  },
  {
    id: "4",
    businessName: "Royal Restaurant VIP",
    slug: "royal-restaurant-vip",
    description: "Тансаг зэрэглэлийн ресторан. VIP өрөөтэй, 20-50 хүний багтаамжтай.",
    category: "VENUE",
    address: "Баянзүрх дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    images: [],
    isVerified: true,
    rating: 4.7,
    reviewCount: 203,
    services: [{ id: "4", vendorId: "4", name: "VIP өрөө", description: null, category: "VIP_ROOM", priceType: "FIXED", price: 800000, priceUnit: null, capacity: 30, images: [] }],
  },
];

const serviceTypes = [
  { id: "all", name: "Бүгд" },
  { id: "WEDDING_HALL", name: "Хуримын заал" },
  { id: "CONFERENCE_ROOM", name: "Хурлын танхим" },
  { id: "VIP_ROOM", name: "VIP өрөө" },
  { id: "OUTDOOR_VENUE", name: "Задгай талбай" },
  { id: "RESTAURANT", name: "Ресторан" },
];

export default function VenuesPage() {
  const [vendors, setVendors] = useState<Vendor[]>(mockVenues);
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || vendor.services?.some(s => s.category === selectedType);
    return matchesSearch && matchesType;
  });

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-[#FAF7F2] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-light)]/30 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-[var(--primary-dark)]" />
              <span className="text-sm font-medium text-[var(--primary-dark)]">Заал & Танхим</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Төгс орон зайгаа олоорой
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              VIP өрөө, хуримын заал, хурлын танхим — онцлог орон зайнуудаас сонгоорой
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Заал хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] outline-none transition-all"
                />
              </div>
              <button className="px-6 py-4 bg-white border border-neutral-200 rounded-xl hover:border-[var(--primary)] transition-colors flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Шүүлтүүр</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-white border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedType === type.id
                    ? "bg-[var(--primary)] text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-neutral-600">
              <span className="font-semibold text-neutral-900">{filteredVendors.length}</span> заал олдлоо
            </p>
            <select className="px-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-[var(--primary)]">
              <option>Санал болгох</option>
              <option>Үнэ: Бага → Их</option>
              <option>Үнэ: Их → Бага</option>
              <option>Үнэлгээ</option>
            </select>
          </div>

          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} categorySlug="venues" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Заал олдсонгүй</h3>
              <p className="text-neutral-600">Хайлтын утгаа өөрчилж үзнэ үү</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
