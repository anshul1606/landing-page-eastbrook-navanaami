"use client";

import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  value,
  description,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101828] p-8 transition-all duration-500 hover:border-[#C89B3C] hover:shadow-[0_15px_40px_rgba(200,155,60,0.2)]"
    >
      {/* Decorative Circle */}

      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#C89B3C]/10"></div>

      <div className="relative">

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C89B3C]/15 text-3xl">
          {icon}
        </div>

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <h4 className="mt-4 text-4xl font-bold text-[#C89B3C]">
          {value}
        </h4>

        <p className="mt-6 leading-8 text-gray-400">
          {description}
        </p>

      </div>
    </motion.div>
  );
}