"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./ui/SectionHeading";

const advantages = [
  "Easy access to Whitefield & IT Corridor",
  "Close to ITPL & BGRT Tech Parks",
  "NH 648 Expansion Underway",
  "PRR Connectivity Nearby",
];

export default function LocationSection() {
  return (
    <section
      id="location"
      className="py-12 md:py-20 bg-[#08111F]"
    >
      <Container>

        <SectionHeading
          subtitle="LOCATION"
          title="On Neo Whitefield Road:"
          highlight="Close To Where You Work"
          description="Strategically located with seamless connectivity to Bangalore's leading IT hubs, highways and upcoming infrastructure."
        />

        {/* Responsive margin-top and grid gaps */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-10 md:mt-16 lg:mt-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            // Responsive padding and border radius
            className="rounded-2xl md:rounded-3xl border border-[#D8B15A]/20 bg-[#101828] p-6 md:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <MapPin className="text-[#D8B15A] w-6 h-6 md:w-8 md:h-8" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Key Advantages
              </h3>
            </div>

            {/* Adjusted spacing between list items */}
            <div className="space-y-4 md:space-y-6">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 md:gap-4 items-start"
                >
                  <CheckCircle2
                    size={22}
                    // Prevent squishing on mobile wrapping
                    className="text-[#D8B15A] mt-1 flex-shrink-0 w-5 h-5 md:w-[22px] md:h-[22px]"
                  />
                  <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            // Syncing border radius with the left card
            className="relative overflow-hidden rounded-2xl md:rounded-3xl"
          >
            <Image
              src="/images/location-map.webp"
              alt="Location Map"
              width={700}
              height={600}
              className="w-full h-auto rounded-2xl md:rounded-3xl object-cover"
            />
          </motion.div>

        </div>

      </Container>
    </section>
  );
}