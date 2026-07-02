"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Home } from "lucide-react";
import Container from "./Container";

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden py-15 md:py-20"
    >
      {/* Background Image */}
      <Image
        src="/images/final-Cta-bg.png"
        alt="Luxury Villa"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08111F]/80" />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8B15A]/10 blur-[120px]" />

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-5xl text-center"
        >

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#D8B15A] bg-[#D8B15A]/10">
            <Home className="h-10 w-10 text-[#D8B15A]" />
          </div>

          <p className="tracking-[6px] uppercase text-[#D8B15A]">
            Make The Right Move
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            If You're Upgrading From An Apartment,
            <br />
            <span className="text-[#D8B15A]">
              This Changes The Equation
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-gray-300 md:text-xl">
            You're already looking at homes in the{" "}
            <span className="font-semibold text-white">₹3 Cr range.</span>
            <br />
            At <span className="font-semibold text-[#D8B15A]">Eastbrook</span>,
            that budget gives you an independent luxury villa with private
            space, faster possession and limited availability.
          </p>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#D8B15A]/30 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-lg leading-8 text-gray-200">
              This isn't just another long-term investment.
              <br />
              <span className="text-2xl font-semibold text-white">
                It's a near-ready opportunity to move into your own villa.
              </span>
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="mt-14 inline-flex items-center gap-3 rounded-full bg-[#D8B15A] px-10 py-5 text-lg font-semibold text-black transition"
          >
            Schedule A Visit
            <ArrowRight size={22} />
          </motion.button>

        </motion.div>

      </Container>
    </section>
  );
}