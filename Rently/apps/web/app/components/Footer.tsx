"use client";

import { Sparkles, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  platform: {
    title: "Платформ",
    links: [
      { name: "Заал & Танхим", href: "#" },
      { name: "Хоол & Зоог", href: "#" },
      { name: "Уран бүтээлчид", href: "#" },
      { name: "Үйлчилгээ", href: "#" },
    ],
  },
  company: {
    title: "Компани",
    links: [
      { name: "Бидний тухай", href: "#" },
      { name: "Түншлэл", href: "#" },
      { name: "Карьер", href: "#" },
      { name: "Холбоо барих", href: "#" },
    ],
  },
  support: {
    title: "Тусламж",
    links: [
      { name: "Түгээмэл асуултууд", href: "#" },
      { name: "Үйлчилгээний нөхцөл", href: "#" },
      { name: "Нууцлалын бодлого", href: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                EVENTLY
              </span>
            </a>
            <p className="text-[#9CA3AF] mb-6 max-w-sm leading-relaxed">
              Монголын анхны арга хэмжээний маркетплейс. Заал, хоол, уран бүтээлчид — бүгдийг нэг дороос.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-[#9CA3AF]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+976 9911 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@evently.mn</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Улаанбаатар, Монгол</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#9CA3AF] hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            © 2024 Evently. Бүх эрх хуулиар хамгаалагдсан.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
