"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Evently-ээр хуримаа бүрэн зохион байгууллаа. Бүх зүйл нэг дор байсан нь маш хялбар байлаа.",
    quoteEn: "Planned my entire wedding through Evently. Having everything in one place made it so easy.",
    author: "Солонго Б.",
    role: "Хурим зохион байгуулсан",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Корпоратив арга хэмжээнд хамгийн тохиромжтой платформ. Хурдан, найдвартай.",
    quoteEn: "The best platform for corporate events. Fast and reliable.",
    author: "Бат-Эрдэнэ Д.",
    role: "Компанийн менежер",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#FAF7F2]">
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
            Сэтгэгдэл
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Хэрэглэгчдийн <span className="text-gradient">үнэлгээ</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Манай хэрэглэгчдийн туршлагаас уншаарай
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#C9A86C]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#C9A86C] fill-[#C9A86C]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg font-medium text-[#1F1F1F] mb-2 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-[#9CA3AF] italic mb-6">
                {testimonial.quoteEn}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E5E5E5]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E8D5B5]"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-[#6B7280]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
