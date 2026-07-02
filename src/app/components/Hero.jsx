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
        src="/images/hero-image.jpg"
        alt="Eastbrook Villas"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Container className="relative z-10 py-15 md:py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[3px] text-[#C89B3C] font-semibold">
              Luxury Villas • Neo Whitefield Road
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">

              A Villa

              <br />

              <span className="text-[#C89B3C]">
                At The Price
              </span>

              <br />

              Of A Flat

            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">

              Discover premium independent villas thoughtfully designed
              for modern families with private living spaces, smart layouts
              and faster possession.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-[#C89B3C] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#E6C77B] transition">
                Book a Visit
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Download Brochure
              </button>

            </div>

            {/* Trust Strip */}

            <div className="mt-12 flex flex-wrap gap-8 text-sm">

              <div>
                <h4 className="font-semibold text-white">
                  ₹2.39 Cr Onwards
                </h4>

                <p className="text-gray-400">
                  Launch Price
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Ready in 10 Months
                </h4>

                <p className="text-gray-400">
                  Faster Possession
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Only 50 Villas
                </h4>

                <p className="text-gray-400">
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
            className="flex justify-center lg:justify-end"
          >

            <LeadForm />

          </motion.div>

        </div>

      </Container>

    </section>
  );
}