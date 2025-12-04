"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, CalendarCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Сонго",
    titleEn: "Browse",
    description: "Заал, хоол, уран бүтээлчдээ хайж ол",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Нэгтгэ",
    titleEn: "Combine",
    description: "Бүгдийг нэг сагсанд хий",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Захиал",
    titleEn: "Book",
    description: "Нэг товшилтоор баталгаажуул",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#FAF7F2]">
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
            Хэрхэн ажилладаг
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Гурхан <span className="text-gradient">энгийн</span> алхам
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Арга хэмжээгээ хялбархан төлөвлөж, захиалаарай
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-[#E8D5B5] to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Step Card */}
              <div className="glass-card rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-white text-sm font-semibold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#C9A86C]/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-[#C9A86C]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-[#9CA3AF] mb-3">{step.titleEn}</p>
                <p className="text-[#6B7280]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
