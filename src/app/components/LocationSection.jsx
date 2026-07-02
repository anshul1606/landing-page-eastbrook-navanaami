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
      className="py-15 md:py-20 bg-[#08111F]"
    >
      <Container>

        <SectionHeading
          subtitle="LOCATION"
          title="On Neo Whitefield Road:"
          highlight="Close To Where You Work"
          description="Strategically located with seamless connectivity to Bangalore's leading IT hubs, highways and upcoming infrastructure."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-3xl border border-[#D8B15A]/20 bg-[#101828] p-10"
          >

            <div className="flex items-center gap-3 mb-8">

              <MapPin className="text-[#D8B15A]" />

              <h3 className="text-3xl font-bold">
                Key Advantages
              </h3>

            </div>

            <div className="space-y-6">

              {advantages.map((item) => (

                <div
                  key={item}
                  className="flex gap-4"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#D8B15A] mt-1"
                  />

                  <p className="text-gray-300 leading-8">
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
            className="relative overflow-hidden rounded-3xl"
          >

            <Image
              src="/images/location-map.jpg"
              alt="Location Map"
              width={700}
              height={600}
              className="w-full h-auto rounded-3xl object-cover"
            />

          </motion.div>

        </div>

      </Container>
    </section>
  );
}