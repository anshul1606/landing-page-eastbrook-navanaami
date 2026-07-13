"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[6px] origin-left z-[9999] shadow-[0_0_20px_rgba(216,177,90,.8)]"
      style={{
        scaleX,
        background:
          "linear-gradient(to right, #C89B3C, #E6C77B, #C89B3C)",
      }}
    />
  );
}