"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "./Container";
import SectionHeading from "./ui/SectionHeading";
import DifferentiationItem from "./ui/DifferentiationItem";

const points = [
  "Independent home, not an apartment",
  "Private entry with no shared corridors",
  "Every bedroom comes with an attached bathroom",
  "Dedicated family and entertainment levels",
  "Private open terrace for your personal use",
];

export default function DifferentiationSection() {
  return (
    <section className="bg-[#08111F] py-12 md:py-20">
      <Container>

        <SectionHeading
          subtitle="Why Eastbrook"
          title="Not Shared Living."
          highlight="Your Own Space."
          description="Experience complete privacy, spacious living, and thoughtfully designed interiors that redefine luxury villa living."
        />

        {/* Adjusted gap and margin for tighter mobile spacing */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Softened border radius on mobile */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src="/images/independent-villa.webp"
                alt="Independent Villa"
                width={700}
                height={700}
                className="w-full h-auto object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            {/* Tighter vertical spacing between points on mobile */}
            <div className="space-y-4 md:space-y-6">
              {points.map((item, index) => (
                <DifferentiationItem
                  key={index}
                  text={item}
                />
              ))}
            </div>

            {/* Adjusted margin and button padding for mobile */}
            <button
              className="mt-8 md:mt-12 w-fit rounded-full bg-[#D8B15A] px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6C77B]"
            >
              Book A Site Visit
            </button>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}