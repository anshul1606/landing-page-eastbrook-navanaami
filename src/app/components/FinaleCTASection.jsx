"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Home } from "lucide-react";
import Container from "./Container";

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden py-12 md:py-20"
    >
      {/* Background Image */}
      <Image
        src="/images/final-Cta-bg.webp"
        alt="Luxury Villa"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08111F]/80" />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] md:h-[350px] md:w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8B15A]/10 blur-[90px] md:blur-[120px]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  once: true, amount: 0.2 }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-5xl text-center"
        >
          
          {/* Icon */}
          <div className="mx-auto mb-6 md:mb-8 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-[#D8B15A] bg-[#D8B15A]/10">
            <Home className="h-8 w-8 md:h-10 md:w-10 text-[#D8B15A]" />
          </div>

          {/* Subtitle */}
          <p className="tracking-[4px] md:tracking-[6px] uppercase text-xs md:text-sm text-[#D8B15A]">
            Make The Right Move
          </p>

          {/* Main Heading */}
          <h2 className="mt-4 md:mt-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            If You're Upgrading From An Apartment,
            <br className="hidden md:block" />{" "}
            <span className="text-[#D8B15A]">
              This Changes The Equation
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 md:mt-10 max-w-4xl text-base md:text-xl leading-7 md:leading-9 text-gray-300">
            You're already looking at homes in the{" "}
            <span className="font-semibold text-white">₹3 Cr range.</span>
            <br className="hidden md:block" />{" "}
            At <span className="font-semibold text-[#D8B15A]">Eastbrook</span>,
            that budget gives you an independent luxury villa with private
            space, faster possession and limited availability.
          </p>

          {/* Info Card */}
          <div className="mx-auto mt-8 md:mt-12 max-w-3xl rounded-2xl md:rounded-3xl border border-[#D8B15A]/30 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
            <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-200">
              This isn't just another long-term investment.
              <br />
              <span className="text-xl md:text-2xl font-semibold text-white mt-1 inline-block">
                It's a near-ready opportunity to move into your own villa.
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="mt-10 md:mt-14 inline-flex items-center gap-3 rounded-full bg-[#D8B15A] px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold text-black transition"
          >
            Schedule A Visit
            <ArrowRight size={20} className="md:w-[22px] md:h-[22px]" />
          </motion.button>

        </motion.div>
      </Container>
    </section>
  );
}