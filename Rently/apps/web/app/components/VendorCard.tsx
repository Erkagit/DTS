"use client";

import { motion } from "framer-motion";
import { MapPin, Star, BadgeCheck, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Vendor } from "../lib/api";
import { formatPrice } from "../lib/api";

interface VendorCardProps {
  vendor: Vendor;
  categorySlug: string;
}

export default function VendorCard({ vendor, categorySlug }: VendorCardProps) {
  const startingPrice = vendor.services?.[0]?.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/${categorySlug}/${vendor.slug}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            {vendor.coverImage ? (
              <Image
                src={vendor.coverImage}
                alt={vendor.businessName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent)] flex items-center justify-center">
                <span className="text-4xl font-bold text-white/80">
                  {vendor.businessName.charAt(0)}
                </span>
              </div>
            )}
            
            {/* Favorite Button */}
            <button 
              className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add to favorites
              }}
            >
              <Heart className="w-4 h-4 text-neutral-600" />
            </button>

            {/* Verified Badge */}
            {vendor.isVerified && (
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                <BadgeCheck className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs font-medium">Баталгаажсан</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg text-neutral-900 group-hover:text-[var(--primary-dark)] transition-colors">
                {vendor.businessName}
              </h3>
              {vendor.rating > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{vendor.rating.toFixed(1)}</span>
                </div>
              )}
            </div>

            {vendor.city && (
              <div className="flex items-center gap-1.5 text-neutral-500 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                <span>{vendor.city}</span>
              </div>
            )}

            {vendor.description && (
              <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                {vendor.description}
              </p>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
              {startingPrice ? (
                <div>
                  <span className="text-xs text-neutral-500">Эхлэх үнэ</span>
                  <p className="font-semibold text-[var(--primary-dark)]">
                    {formatPrice(startingPrice)}
                  </p>
                </div>
              ) : (
                <span className="text-sm text-neutral-500">Үнэ тохиролцоно</span>
              )}
              
              <span className="text-sm font-medium text-[var(--primary)] group-hover:underline">
                Дэлгэрэнгүй →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
