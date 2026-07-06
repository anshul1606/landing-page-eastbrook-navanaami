"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import AnimatedText from "./AnimatedText";
import LeadFormModal from "./LeadFormModal";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Amenities", href: "#amenities" },
  { title: "Location", href: "#location" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#08111F]/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/images/nav-logo.webp"
              width={45}
              height={45}
              alt="Eastbrook"
              priority
              style={{
                  width: "45px",
                  height: "auto",
              }}
            />

            <div>

              <h2 className="text-white font-bold tracking-wide">
                EASTBROOK
              </h2>

              <p className="text-xs text-[#C89B3C] tracking-[2px]">
                BY NAVANAAMI
              </p>

            </div>

          </Link>

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((link) => (

              <a
                key={link.title}
                href={link.href}
                className="text-white hover:text-[#C89B3C] transition"
              >
                {<AnimatedText text={link.title} />}
              </a>

            ))}

          </nav>

          <button onClick={() => setShowPopup(true)} className="hidden lg:block bg-[#C89B3C] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Book a Visit
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#08111F]"
          >

            <div className="flex flex-col p-6">

              {links.map((link) => (

                <a
                  key={link.title}
                  href={link.href}
                  className="py-4 border-b border-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </a>

              ))}

              <button onClick={() => {setShowPopup(true); setMenuOpen(false);}} 
              className="mt-6 bg-[#C89B3C] text-black py-3 rounded-full font-semibold">
                Book a Visit
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
      <LeadFormModal
      open={showPopup}
      onClose={() => setShowPopup(false)}/>
    </header>
  );
}