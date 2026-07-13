"use client";

import { motion } from "framer-motion";
import {
  IndianRupee,
  Clock3,
  Home,
  BadgePercent,
} from "lucide-react";

import Container from "./Container";
import LeadForm from "./LeadForm";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#08111F] py-12 md:py-20"
    >
      <Container>
        {/* Adjusted gap for mobile spacing */}
        <div className="grid gap-10 lg:gap-16 items-center lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] md:tracking-[6px] text-xs md:text-sm text-[#D8B15A]">
              Pricing
            </p>

            {/* Scaled down heading for mobile */}
            <h2 className="mt-3 md:mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Starting
              <br />
              <span className="text-[#D8B15A]">
                ₹2.39 Cr*
              </span>
            </h2>

            {/* Tighter spacing and flex-shrink on icons to prevent squishing */}
            <div className="mt-8 md:mt-12 space-y-4 md:space-y-6 text-base md:text-lg">
              <div className="flex gap-4 items-start">
                <IndianRupee className="text-[#D8B15A] mt-1 flex-shrink-0" />
                <p>Approx. ₹9,000 per sq.ft.</p>
              </div>

              <div className="flex gap-4 items-start">
                <BadgePercent className="text-[#D8B15A] mt-1 flex-shrink-0" />
                <p>~₹700/sq.ft lower than surrounding projects.</p>
              </div>

              <div className="flex gap-4 items-start">
                <Home className="text-[#D8B15A] mt-1 flex-shrink-0" />
                <p>Strong value for this location.</p>
              </div>
            </div>

            {/* Scaled down padding, fonts, and icon size for mobile */}
            <div className="mt-10 md:mt-14 rounded-2xl md:rounded-3xl border border-[#D8B15A]/30 bg-[#101828] p-6 md:p-8">
              <div className="flex items-center gap-4">
                <Clock3
                  className="text-[#D8B15A] w-8 h-8 md:w-[34px] md:h-[34px] flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-3xl font-bold">
                    Only 50 Villas Available
                  </h3>
                  <p className="mt-1 md:mt-2 font-bold text-sm md:text-base text-gray-400">
                    Ready to Move in 10 Months
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Reduced padding and radius on smaller screens to maximize form space */}
            <div className="rounded-[24px] md:rounded-[34px] border border-[#D8B15A]/30 bg-[#101828] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
              
              <h3 className="text-2xl md:text-3xl font-bold text-center">
                Book Your Visit Today
              </h3>
              
              <p className="mt-2 md:mt-4 text-sm md:text-base text-center text-gray-400">
                Limited inventory available.
              </p>

              <div className="mt-6 md:mt-10">
                <LeadForm />
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}