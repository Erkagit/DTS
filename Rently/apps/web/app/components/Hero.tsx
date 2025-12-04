"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A86C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#E8D4D4]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/30 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A86C] animate-pulse" />
            <span className="text-sm font-medium text-[#6B7280]">
              Монголын анхны арга хэмжээний маркетплейс
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6"
          >
            Төгс арга хэмжээг{" "}
            <span className="text-gradient">нэг дороос</span> бүтээ
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-2xl mb-10"
          >
            Заал, хоол, уран бүтээлчид, үйлчилгээ — бүгдийг нэгтгэн захиалаарай.
            Evently танд амар, гоёмсог арга хэмжээ зохион байгуулахад туслана.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="btn-primary flex items-center justify-center gap-2 text-base">
              Арга хэмжээ эхлүүлэх
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2 text-base">
              <Play className="w-4 h-4" />
              Үйлчилгээ үзэх
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-[#E5E5E5]"
          >
            {[
              { value: "500+", label: "Үйлчилгээ үзүүлэгч" },
              { value: "2,000+", label: "Амжилттай арга хэмжээ" },
              { value: "4.9", label: "Үнэлгээ" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-semibold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B7280] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#D4D4D4] flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#C9A86C]"
          />
        </div>
      </motion.div>
    </section>
  );
}
