"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Home,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Container from "./Container";
import SectionHeading from "./ui/SectionHeading";

const villas = [
  {
    plot: "1200 Sq.Ft Plot",
    built: "2519 Sq.Ft Built-up",
  },
  {
    plot: "1500 Sq.Ft Plot",
    built: "3000 Sq.Ft Built-up",
  },
];

const layout = [
  {
    floor: "Ground Floor",
    points: [
      "Private Entrance",
      "Covered Parking",
      "Spacious Living Room",
    ],
  },
  {
    floor: "First Floor",
    points: [
      "Spacious Bedrooms",
      "Attached Bathrooms",
      "Family Lounge",
    ],
  },
  {
    floor: "Second Floor",
    points: [
      "Open Terrace",
      "Entertainment Space",
      "Private Bar Area",
    ],
  },
];

export default function ConfigurationSection() {
  return (
    <section className="bg-[#08111F] py-12 md:py-20">
      <Container>

        <SectionHeading
          subtitle="Product Section"
          title="An Automated Home"
          highlight="Designed The Way You Live"
          description="Luxury villas thoughtfully designed with spacious layouts, premium interiors and intelligent planning."
        />

        {/* CONFIGURATIONS */}
        <div className="mt-8 md:mt-10 grid gap-6 md:gap-8 lg:grid-cols-2">
          {villas.map((villa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl md:rounded-3xl border border-white/10 bg-[#101828] p-6 md:p-8 hover:border-[#C89B3C] transition"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-[#C89B3C]/15 flex items-center justify-center flex-shrink-0">
                  <Home className="text-[#C89B3C] w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {villa.plot}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mt-1">
                    {villa.built}
                  </p>
                </div>
              </div>

              <button className="mt-6 md:mt-8 flex items-center gap-2 text-[#C89B3C] text-sm md:text-base font-semibold hover:gap-4 transition-all">
                View Floor Plan
                <ArrowRight size={18} className="md:w-[20px] md:h-[20px]" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* LAYOUT BREAKDOWN */}
        <div className="mt-14 md:mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Layout
            <span className="text-[#C89B3C]"> Breakdown</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-3 md:mt-4">
            Every floor is thoughtfully planned for comfort and functionality.
          </p>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 grid gap-6 md:gap-8 lg:grid-cols-3">
          {layout.map((floor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl md:rounded-3xl bg-[#101828] border border-white/10 p-6 md:p-8 hover:border-[#C89B3C] transition"
            >
              <div className="flex items-center gap-3">
                <BedDouble className="text-[#C89B3C] w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-bold">
                  {floor.floor}
                </h3>
              </div>

              <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">
                {floor.points.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#C89B3C] mt-[2px] md:mt-1 flex-shrink-0"
                    />
                    <span className="text-sm md:text-base text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}