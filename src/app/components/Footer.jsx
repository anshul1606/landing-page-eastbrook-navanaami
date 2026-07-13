"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn,
} from "react-icons/fa";

import Container from "./Container";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Amenities", href: "#amenities" },
  { title: "Location", href: "#location" },
  { title: "Pricing", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050B15] border-t border-white/10">

      <Container className="py-12 md:py-20">
        
    
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-3">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/nav-logo.webp"
                width={55}
                height={55}
                alt="Eastbrook"
                className="w-12 h-12 md:w-[55px] md:h-[55px]" // slightly smaller logo on mobile
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold">EASTBROOK</h2>
                <p className="tracking-[2px] md:tracking-[3px] text-[#D8B15A] text-xs md:text-sm">
                  BY NAVANAAMI
                </p>
              </div>
            </div>
          
            <p className="mt-6 lg:mt-8 leading-7 md:leading-8 text-base md:text-xl text-gray-400">
              Premium luxury villas thoughtfully designed for modern families seeking privacy, comfort and exceptional connectivity on Neo Whitefield Road.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 lg:mb-8">
              Quick Links
            </h3>
            
            <ul className="space-y-3 lg:space-y-4 text-base md:text-xl">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#D8B15A] transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 lg:mb-8">
              Contact Us
            </h3>
            <div className="space-y-6 lg:space-y-7">
              
              <div className="flex gap-4">
                <MapPin className="text-[#D8B15A] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg md:text-xl">
                    Project Location
                  </h4>
                  <p className="text-gray-400 text-base md:text-lg mt-1">
                    Neo Whitefield Road
                    <br />
                    Near IT Corridor
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#D8B15A] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg md:text-xl">
                    Legal Address
                  </h4>
                  <p className="text-gray-400 leading-6 md:leading-7 text-base md:text-lg mt-1">
                    Opp. The Polaris International School,
                    <br />
                    Hoskote,
                    <br className="md:hidden" /> {/* Extra break on mobile for better flow */}
                    Karnataka 562114
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center md:items-start text-base md:text-xl">
                <Phone className="text-[#D8B15A] flex-shrink-0" />
                <a
                  href="tel:+919023733333"
                  className="text-gray-300 hover:text-[#D8B15A] transition"
                >
                  +91 902 373 3333
                </a>
              </div>

              <div className="flex gap-4 items-center md:items-start text-base md:text-xl">
                <Mail className="text-[#D8B15A] flex-shrink-0" />
                <a
                  href="mailto:info@eastbrook.in"
                  className="text-gray-300 hover:text-[#D8B15A] transition break-all"
                >
                  info@eastbrook.in
                </a>
              </div>

            </div>
          </div>
        </div>

      
        <div className="my-10 lg:my-14 border-t border-white/10"></div>

        
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          
          <p className="text-gray-500 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} Eastbrook by Navanaami Projects Pvt. Ltd. All Rights Reserved.
          </p>

          {/* Social Icons (Currently Commented Out) */}
          {/* <div className="flex gap-4 md:gap-5">
            <a href="#" className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D8B15A] hover:text-black transition">
              <FaFacebookF size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
            <a href="#" className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D8B15A] hover:text-black transition">
              <FaInstagram size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
            <a href="#" className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D8B15A] hover:text-black transition">
              <FaLinkedinIn size={16} className="md:w-[18px] md:h-[18px]" />
            </a> 
          </div> */}
        </div>

      </Container>
    </footer>
  );
}