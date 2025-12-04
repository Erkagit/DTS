"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Search, SlidersHorizontal } from "lucide-react";
import VendorCard from "../components/VendorCard";
import type { Vendor } from "../lib/api";

const mockArtists: Vendor[] = [
  {
    id: "1",
    businessName: "DJ Apex",
    slug: "dj-apex",
    description: "10+ жилийн туршлагатай. Хурим, корпоратив, клуб арга хэмжээнд мэргэшсэн. Дуу чимээ & гэрлийн шоу багтсан.",
    category: "ARTIST",
    address: null,
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800",
    images: [],
    isVerified: true,
    rating: 4.9,
    reviewCount: 234,
    services: [{ id: "1", vendorId: "1", name: "DJ үйлчилгээ", description: null, category: "DJ", priceType: "FIXED", price: 800000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "2",
    businessName: "The Moments Photography",
    slug: "the-moments-photography",
    description: "Хурим, арга хэмжээний гэрэл зураг. Drone зураг авалт, same-day edit үйлчилгээтэй.",
    category: "ARTIST",
    address: null,
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800",
    images: [],
    isVerified: true,
    rating: 4.8,
    reviewCount: 189,
    services: [{ id: "2", vendorId: "2", name: "Гэрэл зураг", description: null, category: "PHOTOGRAPHER", priceType: "PER_HOUR", price: 150000, priceUnit: "цаг", capacity: null, images: [] }],
  },
  {
    id: "3",
    businessName: "Cinematic Dreams",
    slug: "cinematic-dreams",
    description: "Кино маягийн видео бичлэг. 4K чанар, drone бичлэг, highlight video.",
    category: "ARTIST",
    address: null,
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
    images: [],
    isVerified: true,
    rating: 4.9,
    reviewCount: 156,
    services: [{ id: "3", vendorId: "3", name: "Видео бичлэг", description: null, category: "VIDEOGRAPHER", priceType: "FIXED", price: 1500000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "4",
    businessName: "MC Болд",
    slug: "mc-bold",
    description: "Мэргэжлийн хөтлөгч. Хурим, төрсөн өдөр, корпоратив арга хэмжээ хөтлөнө.",
    category: "ARTIST",
    address: null,
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800",
    images: [],
    isVerified: false,
    rating: 4.7,
    reviewCount: 98,
    services: [{ id: "4", vendorId: "4", name: "Хөтлөгч", description: null, category: "MC", priceType: "FIXED", price: 500000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "5",
    businessName: "Groove Band",
    slug: "groove-band",
    description: "5 гишүүнтэй лайв хамтлаг. Поп, рок, джаз хөгжим тоглоно.",
    category: "ARTIST",
    address: null,
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    images: [],
    isVerified: true,
    rating: 4.8,
    reviewCount: 67,
    services: [{ id: "5", vendorId: "5", name: "Лайв хамтлаг", description: null, category: "BAND", priceType: "FIXED", price: 2000000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "6",
    businessName: "Dance Crew MN",
    slug: "dance-crew-mn",
    description: "Мэргэжлийн бүжигчдийн баг. Нээлт, үзүүлбэр, flash mob.",
    category: "ARTIST",
    address: null,
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800",
    images: [],
    isVerified: false,
    rating: 4.6,
    reviewCount: 45,
    services: [{ id: "6", vendorId: "6", name: "Бүжгийн үзүүлбэр", description: null, category: "DANCER", priceType: "FIXED", price: 600000, priceUnit: null, capacity: null, images: [] }],
  },
];

const serviceTypes = [
  { id: "all", name: "Бүгд" },
  { id: "DJ", name: "DJ" },
  { id: "BAND", name: "Хамтлаг" },
  { id: "MC", name: "Хөтлөгч" },
  { id: "PHOTOGRAPHER", name: "Гэрэл зурагчин" },
  { id: "VIDEOGRAPHER", name: "Видео зураглаач" },
  { id: "DANCER", name: "Бүжигчин" },
];

export default function ArtistsPage() {
  const [vendors] = useState<Vendor[]>(mockArtists);
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || vendor.services?.some(s => s.category === selectedType);
    return matchesSearch && matchesType;
  });

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-[#FAF7F2] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Music className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Уран бүтээлчид</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Авьяаслаг уран бүтээлчид
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              DJ, хөгжимчид, гэрэл зурагчин — агшин бүрийг мартагдашгүй болго
            </p>
          </motion.div>

          {/* Search */}
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
                  placeholder="Уран бүтээлч хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                />
              </div>
              <button className="px-6 py-4 bg-white border border-neutral-200 rounded-xl hover:border-purple-500 transition-colors flex items-center gap-2">
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
                    ? "bg-purple-500 text-white"
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
              <span className="font-semibold text-neutral-900">{filteredVendors.length}</span> уран бүтээлч олдлоо
            </p>
            <select className="px-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-purple-500">
              <option>Санал болгох</option>
              <option>Үнэ: Бага → Их</option>
              <option>Үнэ: Их → Бага</option>
              <option>Үнэлгээ</option>
            </select>
          </div>

          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} categorySlug="artists" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Music className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Уран бүтээлч олдсонгүй</h3>
              <p className="text-neutral-600">Хайлтын утгаа өөрчилж үзнэ үү</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
