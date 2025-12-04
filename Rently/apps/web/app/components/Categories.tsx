"use client";

import { motion } from "framer-motion";
import { Building2, UtensilsCrossed, Music4, Wand2 } from "lucide-react";

const categories = [
  {
    id: "venues",
    icon: Building2,
    title: "Заал & Танхим",
    titleEn: "Venues & Halls",
    description: "VIP өрөө, хуримын заал, хурлын танхим — онцлог орон зайнуудаас сонго.",
    color: "#C9A86C",
    bgColor: "rgba(201, 168, 108, 0.1)",
  },
  {
    id: "catering",
    icon: UtensilsCrossed,
    title: "Хоол & Зоог",
    titleEn: "Catering",
    description: "Хоол, ундаа, амттан — таны арга хэмжээний амт болно.",
    color: "#D4A5A5",
    bgColor: "rgba(232, 212, 212, 0.3)",
  },
  {
    id: "artists",
    icon: Music4,
    title: "Уран бүтээлчид",
    titleEn: "Artists & Performers",
    description: "DJ, хөгжимчид, гэрэл зурагчин — агшин бүрийг мартагдашгүй болго.",
    color: "#8B7355",
    bgColor: "rgba(139, 115, 85, 0.1)",
  },
  {
    id: "services",
    icon: Wand2,
    title: "Үйлчилгээ",
    titleEn: "Event Services",
    description: "Чимэглэл, дуу чимээ, гэрэлтүүлэг, төлөвлөгч — бүх дэмжлэг нэг дор.",
    color: "#9CA3AF",
    bgColor: "rgba(156, 163, 175, 0.1)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#C9A86C] tracking-wider uppercase mb-4 block">
            Ангилалууд
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Бүх зүйл <span className="text-gradient">нэг дор</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Таны арга хэмжээнд хэрэгтэй бүхнийг нэг платформоос олоорой
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-[#FAF7F2] border border-transparent hover:border-[#E8D5B5] transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: category.bgColor }}
              >
                <category.icon
                  className="w-7 h-7"
                  style={{ color: category.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-xs text-[#9CA3AF] mb-3">{category.titleEn}</p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {category.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                <svg
                  className="w-4 h-4 text-[#C9A86C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
