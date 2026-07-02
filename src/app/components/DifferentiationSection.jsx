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
    <section className="bg-[#08111F] py-15 md:py-20">

      <Container>

        <SectionHeading
          subtitle="Why Eastbrook"
          title="Not Shared Living."
          highlight="Your Own Space."
          description="Experience complete privacy, spacious living, and thoughtfully designed interiors that redefine luxury villa living."
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl">
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
            <div className="space-y-6">

              {points.map((item, index) => (
                <DifferentiationItem
                  key={index}
                  text={item}
                />
              ))}

            </div>

            <button
  className="mt-12 w-fit rounded-full bg-[#D8B15A] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6C77B]">
              Book A Site Visit
            </button>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}