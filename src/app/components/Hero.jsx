"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-image.webp"
        alt="Eastbrook Villas"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Adjusted padding for mobile to account for potential fixed navbars */}
      <Container className="relative z-10 pt-28 pb-12 md:py-20 lg:py-24">
        
        {/* Reduced grid gap on mobile */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm text-[#C89B3C] font-semibold">
              Luxury Villas • Neo Whitefield Road
            </p>

            {/* Scaled down heading for mobile */}
            <h1 className="mt-4 md:mt-6 text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
              A Villa
              <br />
              <span className="text-[#C89B3C]">
                At The Price
              </span>
              <br />
              Of A Flat
            </h1>

            {/* Tighter line-height and text size on mobile */}
            <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-300 leading-7 md:leading-8 max-w-xl">
              Discover premium independent villas thoughtfully designed
              for modern families with private living spaces, smart layouts
              and faster possession.
            </p>

            {/* Stack buttons on extra small screens for better tap targets */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
              <button className="w-full sm:w-auto bg-[#C89B3C] text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#E6C77B] transition">
                Book a Visit
              </button>
              <button className="w-full sm:w-auto border border-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base hover:bg-white hover:text-black transition">
                Download Brochure
              </button>
            </div>

            {/* Trust Strip - Grid on mobile keeps alignment clean */}
            <div className="mt-10 md:mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 md:gap-8 text-xs md:text-sm">
              <div>
                <h4 className="font-semibold text-white">
                  ₹2.39 Cr Onwards
                </h4>
                <p className="text-gray-400 mt-1">
                  Launch Price
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  Ready in 10 Months
                </h4>
                <p className="text-gray-400 mt-1">
                  Faster Possession
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-semibold text-white">
                  Only 50 Villas
                </h4>
                <p className="text-gray-400 mt-1">
                  Limited Community
                </p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            {/* Wrapper prevents form from stretching on tablets */}
            <div className="w-full max-w-md lg:max-w-none">
              <LeadForm />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}