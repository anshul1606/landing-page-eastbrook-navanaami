"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AmenityCategory({
  icon: Icon,
  title,
  image,
  amenities,
  items,
  delay,
}) {
  const list = amenities || items;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{
        y: -12,
      }}
      className="group relative flex flex-col min-h-[500px] w-full max-w-[420px] mx-auto  rounded-[32px] border border-[#D8B15A]/30 bg-gradient-to-b from-white/[0.06] to-black/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.45)] transition-all duration-500 hover:-translate-y-3 hover:border-[#D8B15A] hover:shadow-[0_35px_80px_rgba(216,177,90,.25)]">
      <div className="flex flex-col flex-1 p-8">

        <div className="flex justify-center">

          <div
            className="w-20 h-20 rounded-full border border-[#C89B3C] flex items-center justify-center"
          >
            <Icon
              size={36}
              className="text-[#C89B3C]"
            />
          </div>

        </div>

        <h3 className="text-center text-3xl font-bold mt-8">
          {title}
        </h3>

        <div className="w-20 h-[2px] bg-[#C89B3C] mx-auto my-6"></div>

        <div className="space-y-5">

          {list.map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-[#C89B3C] mt-1"
              />

              <span className="text-gray-200">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

     <div className="relative mt-auto h-60 w-full overflow-hidden rounded-b-[32px]">

  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent" />

  <Image
    src={image}
    fill
    alt={title}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover object-center transition duration-700 group-hover:scale-110"
  />

</div>

    </motion.div>
  );
}