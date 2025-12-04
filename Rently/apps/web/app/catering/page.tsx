"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Search, SlidersHorizontal } from "lucide-react";
import VendorCard from "../components/VendorCard";
import type { Vendor } from "../lib/api";

const mockCaterers: Vendor[] = [
  {
    id: "1",
    businessName: "Nomad Kitchen",
    slug: "nomad-kitchen",
    description: "Орчин үеийн монгол хоолны туршлага. Уламжлалт амтыг шинэлэг хэлбэрээр.",
    category: "CATERING",
    address: "Сүхбаатар дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    images: [],
    isVerified: true,
    rating: 4.9,
    reviewCount: 156,
    services: [{ id: "1", vendorId: "1", name: "Банкет хоол", description: null, category: "FOOD_CATERING", priceType: "PER_PERSON", price: 45000, priceUnit: "хүн", capacity: null, images: [] }],
  },
  {
    id: "2",
    businessName: "Sweet Dreams Desserts",
    slug: "sweet-dreams-desserts",
    description: "Захиалгат бялуу, амттан. Хуримын бялуу, ширээний чимэглэл.",
    category: "CATERING",
    address: "Баянзүрх дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800",
    images: [],
    isVerified: true,
    rating: 4.8,
    reviewCount: 203,
    services: [{ id: "2", vendorId: "2", name: "Амттаны ширээ", description: null, category: "DESSERT_TABLE", priceType: "FIXED", price: 350000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "3",
    businessName: "Cocktail Master",
    slug: "cocktail-master",
    description: "Мэргэжлийн бартендер үйлчилгээ. Коктейль бар, ундаа үйлчилгээ.",
    category: "CATERING",
    address: "Хан-Уул дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
    images: [],
    isVerified: false,
    rating: 4.7,
    reviewCount: 89,
    services: [{ id: "3", vendorId: "3", name: "Коктейль бар", description: null, category: "DRINK_BAR", priceType: "PER_PERSON", price: 25000, priceUnit: "хүн", capacity: null, images: [] }],
  },
  {
    id: "4",
    businessName: "Coffee Corner",
    slug: "coffee-corner",
    description: "Мэргэжлийн бариста үйлчилгээ. Кофе станц, халуун ундаа.",
    category: "CATERING",
    address: "Чингэлтэй дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    images: [],
    isVerified: true,
    rating: 4.6,
    reviewCount: 67,
    services: [{ id: "4", vendorId: "4", name: "Кофе станц", description: null, category: "COFFEE_STATION", priceType: "FIXED", price: 200000, priceUnit: null, capacity: null, images: [] }],
  },
];

const serviceTypes = [
  { id: "all", name: "Бүгд" },
  { id: "FOOD_CATERING", name: "Хоолны үйлчилгээ" },
  { id: "DRINK_BAR", name: "Ундааны бар" },
  { id: "DESSERT_TABLE", name: "Амттаны ширээ" },
  { id: "COFFEE_STATION", name: "Кофены булан" },
];

export default function CateringPage() {
  const [vendors] = useState<Vendor[]>(mockCaterers);
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <UtensilsCrossed className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-orange-600">Хоол & Зоог</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Амтат туршлага бүтээгээрэй
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Хоол, ундаа, амттан — таны арга хэмжээний амт болно
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
                  placeholder="Хоол үйлчилгээ хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                />
              </div>
              <button className="px-6 py-4 bg-white border border-neutral-200 rounded-xl hover:border-orange-500 transition-colors flex items-center gap-2">
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
                    ? "bg-orange-500 text-white"
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
              <span className="font-semibold text-neutral-900">{filteredVendors.length}</span> үйлчилгээ олдлоо
            </p>
            <select className="px-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-orange-500">
              <option>Санал болгох</option>
              <option>Үнэ: Бага → Их</option>
              <option>Үнэ: Их → Бага</option>
              <option>Үнэлгээ</option>
            </select>
          </div>

          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} categorySlug="catering" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <UtensilsCrossed className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Үйлчилгээ олдсонгүй</h3>
              <p className="text-neutral-600">Хайлтын утгаа өөрчилж үзнэ үү</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
