"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Verified } from "lucide-react";

const vendors = [
  {
    name: "The Grand Hall",
    type: "venue",
    typeLabel: "Заал",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 128,
    location: "Сүхбаатар дүүрэг",
    blurb: "Хотын төвд байрлах 200 хүний багтаамжтай тансаг заал.",
    featured: true,
  },
  {
    name: "Nomad Kitchen",
    type: "catering",
    typeLabel: "Хоол",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 89,
    location: "Хан-Уул дүүрэг",
    blurb: "Орчин үеийн монгол хоолны туршлага.",
    featured: true,
  },
  {
    name: "DJ Apex",
    type: "artist",
    typeLabel: "Уран бүтээлч",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop",
    rating: 5.0,
    reviews: 156,
    location: "Улаанбаатар",
    blurb: "10+ жилийн туршлагатай, дуу чимээ & гэрлийн шоу.",
    featured: true,
  },
];

export default function FeaturedVendors() {
  return (
    <section id="featured" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-sm font-medium text-[#C9A86C] tracking-wider uppercase mb-4 block">
              Онцлох
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Шилдэг <span className="text-gradient">үйлчилгээ үзүүлэгчид</span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-xl">
              Баталгаажсан, өндөр үнэлгээтэй партнеруудаас сонгоорой
            </p>
          </div>
          <button className="btn-secondary mt-6 md:mt-0">
            Бүгдийг үзэх
          </button>
        </motion.div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Badge */}
                  {vendor.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[#C9A86C]">
                      ⭐ Онцлох
                    </div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium text-white">
                    {vendor.typeLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        {vendor.name}
                        <Verified className="w-4 h-4 text-[#C9A86C]" />
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-[#6B7280] mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {vendor.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-[#FAF7F2] px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-[#C9A86C] fill-[#C9A86C]" />
                      <span className="font-semibold text-sm">{vendor.rating}</span>
                      <span className="text-xs text-[#9CA3AF]">({vendor.reviews})</span>
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-sm">{vendor.blurb}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
