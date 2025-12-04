"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Search, SlidersHorizontal } from "lucide-react";
import VendorCard from "../components/VendorCard";
import type { Vendor } from "../lib/api";

const mockServices: Vendor[] = [
  {
    id: "1",
    businessName: "Dream Decor",
    slug: "dream-decor",
    description: "Арга хэмжээний чимэглэл, цэцэг, шарны баллон. Хурим, төрсөн өдөр, корпоратив.",
    category: "SERVICE",
    address: "Сүхбаатар дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800",
    images: [],
    isVerified: true,
    rating: 4.8,
    reviewCount: 145,
    services: [{ id: "1", vendorId: "1", name: "Чимэглэл", description: null, category: "DECORATION", priceType: "CUSTOM", price: 500000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "2",
    businessName: "Sound & Light Pro",
    slug: "sound-light-pro",
    description: "Мэргэжлийн дуу чимээ, гэрэлтүүлгийн систем. Тайзны тоноглол.",
    category: "SERVICE",
    address: "Баянзүрх дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=800",
    images: [],
    isVerified: true,
    rating: 4.9,
    reviewCount: 178,
    services: [{ id: "2", vendorId: "2", name: "Дуу & Гэрэл", description: null, category: "SOUND_LIGHTING", priceType: "FIXED", price: 800000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "3",
    businessName: "Event Essentials",
    slug: "event-essentials",
    description: "Ширээ, сандал, майхан, тоног төхөөрөмж түрээс. Бүх төрлийн арга хэмжээнд.",
    category: "SERVICE",
    address: "Хан-Уул дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    images: [],
    isVerified: false,
    rating: 4.6,
    reviewCount: 89,
    services: [{ id: "3", vendorId: "3", name: "Тоног төхөөрөмж", description: null, category: "EQUIPMENT_RENTAL", priceType: "CUSTOM", price: 300000, priceUnit: null, capacity: null, images: [] }],
  },
  {
    id: "4",
    businessName: "Perfect Day Planners",
    slug: "perfect-day-planners",
    description: "Арга хэмжээ зохион байгуулах мэргэжлийн баг. Хурим, корпоратив, хувийн арга хэмжээ.",
    category: "SERVICE",
    address: "Сүхбаатар дүүрэг",
    city: "Улаанбаатар",
    logo: null,
    coverImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
    images: [],
    isVerified: true,
    rating: 4.9,
    reviewCount: 234,
    services: [{ id: "4", vendorId: "4", name: "Төлөвлөгч", description: null, category: "EVENT_PLANNER", priceType: "CUSTOM", price: 1500000, priceUnit: null, capacity: null, images: [] }],
  },
];

const serviceTypes = [
  { id: "all", name: "Бүгд" },
  { id: "DECORATION", name: "Чимэглэл" },
  { id: "SOUND_LIGHTING", name: "Дуу & Гэрэл" },
  { id: "EQUIPMENT_RENTAL", name: "Тоног төхөөрөмж" },
  { id: "EVENT_PLANNER", name: "Төлөвлөгч" },
];

export default function ServicesPage() {
  const [vendors] = useState<Vendor[]>(mockServices);
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
              <Settings className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">Үйлчилгээ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Бүрэн дэмжлэг, нэг дор
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Чимэглэл, дуу чимээ, гэрэлтүүлэг, төлөвлөгч — бүх дэмжлэг нэг дор
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
                  placeholder="Үйлчилгээ хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                />
              </div>
              <button className="px-6 py-4 bg-white border border-neutral-200 rounded-xl hover:border-emerald-500 transition-colors flex items-center gap-2">
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
                    ? "bg-emerald-500 text-white"
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
            <select className="px-4 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500">
              <option>Санал болгох</option>
              <option>Үнэ: Бага → Их</option>
              <option>Үнэ: Их → Бага</option>
              <option>Үнэлгээ</option>
            </select>
          </div>

          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} categorySlug="services" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Settings className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Үйлчилгээ олдсонгүй</h3>
              <p className="text-neutral-600">Хайлтын утгаа өөрчилж үзнэ үү</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
