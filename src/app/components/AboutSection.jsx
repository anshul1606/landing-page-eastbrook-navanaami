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
    <section className="bg-[#0B1526] py-15 md:py-20">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-3xl">

              <Image
                src="/images/about-villa.webp"
                alt="Luxury Villa"
                width={700}
                height={700}
                className="w-full h-auto object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Badge */}

            <div className="absolute -bottom-8 -right-8 rounded-2xl bg-[#C89B3C] px-8 py-6 shadow-2xl">

              <h3 className="text-4xl font-bold text-black">
                50
              </h3>

              <p className="font-semibold text-black">
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
          >

            <p className="uppercase tracking-[4px] text-[#C89B3C] font-semibold">
              About Eastbrook
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              Designed For Modern
              <span className="text-[#C89B3C]"> Family Living</span>
            </h2>

            <p className="mt-8 leading-8 text-gray-400">
              Eastbrook by Navanaami is a premium gated villa community
              thoughtfully designed for families seeking luxury, privacy,
              and convenience. Every villa combines elegant architecture,
              smart planning, and modern amenities to create an exceptional
              lifestyle.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (
                <FeatureItem
                  key={index}
                  text={item}
                />
              ))}

            </div>

            <button className="mt-10 rounded-full bg-[#C89B3C] px-8 py-4 font-semibold text-black transition hover:bg-[#E6C77B]">
              Download Brochure
            </button>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}