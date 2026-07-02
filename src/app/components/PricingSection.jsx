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
      className="bg-[#08111F] py-15 md:py-20"
    >
      <Container>

        <div className="grid gap-16 items-center lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-[#D8B15A]">
              Pricing
            </p>

            <h2 className="mt-5 text-6xl font-bold">
              Starting
              <br />

              <span className="text-[#D8B15A]">
                ₹2.39 Cr*
              </span>

            </h2>

            <div className="mt-12 space-y-6">

              <div className="flex gap-4">

                <IndianRupee className="text-[#D8B15A]" />

                <p>Approx. ₹9,000 per sq.ft.</p>

              </div>

              <div className="flex gap-4">

                <BadgePercent className="text-[#D8B15A]" />

                <p>~₹700/sq.ft lower than surrounding projects.</p>

              </div>

              <div className="flex gap-4">

                <Home className="text-[#D8B15A]" />

                <p>Strong value for this location.</p>

              </div>

            </div>

            <div className="mt-14 rounded-3xl border border-[#D8B15A]/30 bg-[#101828] p-8">

              <div className="flex items-center gap-4">

                <Clock3
                  size={34}
                  className="text-[#D8B15A]"
                />

                <div>

                  <h3 className="text-3xl font-bold">
                    Only 50 Villas Available
                  </h3>

                  <p className="mt-2 font-bold text-gray-400">
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

            <div className="rounded-[34px] border border-[#D8B15A]/30 bg-[#101828] p-10 shadow-[0_20px_60px_rgba(0,0,0,.45)]">

              <h3 className="text-3xl font-bold text-center">
                Book Your Visit Today
              </h3>

              <p className="mt-4 text-center text-gray-400">
                Limited inventory available.
              </p>

              <div className="mt-10">

                <LeadForm />

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}