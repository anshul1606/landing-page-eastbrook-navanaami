"use client";

import { motion } from "framer-motion";
import { ArrowRight, BedDouble, Car, Trees } from "lucide-react";

export default function ConfigCard({
  image,
  area,
  title,
  description,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#101828] group"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8">

        <span className="rounded-full bg-[#C89B3C]/20 px-4 py-1 text-sm text-[#C89B3C]">
          {area}
        </span>

        <h3 className="mt-5 text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-gray-400 leading-8">
          {description}
        </p>

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-3">
            <BedDouble size={18} className="text-[#C89B3C]" />
            <span>Premium Bedrooms</span>
          </div>

          <div className="flex items-center gap-3">
            <Trees size={18} className="text-[#C89B3C]" />
            <span>Private Garden</span>
          </div>

          <div className="flex items-center gap-3">
            <Car size={18} className="text-[#C89B3C]" />
            <span>Private Parking</span>
          </div>

        </div>

        <button className="mt-8 flex items-center gap-2 text-[#C89B3C] font-semibold group-hover:gap-4 transition-all">
          View Floor Plan
          <ArrowRight size={18} />
        </button>

      </div>

    </motion.div>
  );
}