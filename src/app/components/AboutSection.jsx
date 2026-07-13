"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import FeatureItem from "./ui/FeatureItem";

const features = [
  "3 Acres Premium Development",
  "Only 50 Exclusive Villas",
  "Near Neo Whitefield Road",
  "Private Garden & Terrace",
  "Smart Home Features",
  "Possession in 10 Months",
];

export default function AboutSection() {
  return (
    <section className="bg-[#0B1526] py-12 md:py-20">
      <Container>
        {/* Reduced gap on mobile */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            // Added slight right margin on mobile so the badge doesn't hit the screen edge
            className="relative w-[95%] md:w-full mx-auto"
          >
            <div className="overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src="/images/about-villa.webp"
                alt="Luxury Villa"
                width={700}
                height={700}
                className="w-full h-auto object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge - Adjusted positioning, padding, and text for mobile */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 rounded-xl md:rounded-2xl bg-[#C89B3C] px-5 py-4 md:px-8 md:py-6 shadow-2xl">
              <h3 className="text-2xl md:text-4xl font-bold text-black">
                50
              </h3>
              <p className="text-sm md:text-base font-semibold text-black mt-1">
                Exclusive Villas
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-4 md:mt-0"
          >
            <p className="uppercase tracking-[3px] md:tracking-[4px] text-sm md:text-base text-[#C89B3C] font-semibold">
              About Eastbrook
            </p>

            <h2 className="mt-3 md:mt-5 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Designed For Modern
              <br className="hidden lg:block" />
              <span className="text-[#C89B3C]"> Family Living</span>
            </h2>

            <p className="mt-6 md:mt-8 text-base md:text-lg leading-7 md:leading-8 text-gray-400">
              Eastbrook by Navanaami is a premium gated villa community
              thoughtfully designed for families seeking luxury, privacy,
              and convenience. Every villa combines elegant architecture,
              smart planning, and modern amenities to create an exceptional
              lifestyle.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">
              {features.map((item, index) => (
                <FeatureItem
                  key={index}
                  text={item}
                />
              ))}
            </div>

            <button className="mt-8 md:mt-10 rounded-full bg-[#C89B3C] px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-black transition hover:bg-[#E6C77B] hover:-translate-y-1">
              Download Brochure
            </button>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}