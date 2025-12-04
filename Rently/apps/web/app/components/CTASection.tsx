"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A86C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#E8D4D4]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative gradient-gold rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem]">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full" />
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
              Дараагийн арга хэмжээгээ
              <br />
              бидэнтэй хамт бүтээ
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Үнэгүй бүртгүүлж, шилдэг үйлчилгээ үзүүлэгчидтэй танилцаарай
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#A08455] px-8 py-4 rounded-full font-medium text-base hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Үнэгүй эхлүүлэх
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-all duration-300">
                Дэлгэрэнгүй мэдээлэл
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
