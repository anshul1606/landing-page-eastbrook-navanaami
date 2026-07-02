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

      <Container className="py-15 md:py-20">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/images/nav-logo.webp"
                width={55}
                height={55}
                alt="Eastbrook"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  EASTBROOK
                </h2>

                <p className="tracking-[3px] text-[#D8B15A] text-sm">
                  BY NAVANAAMI
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-gray-400">
              Premium luxury villas thoughtfully designed for
              modern families seeking privacy, comfort and
              exceptional connectivity on Neo Whitefield Road.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">

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

          {/* CONTACT */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Contact Us
            </h3>

            <div className="space-y-7">

              <div className="flex gap-4">

                <MapPin
                  className="text-[#D8B15A] mt-1"
                />

                <div>

                  <h4 className="font-semibold">
                    Project Location
                  </h4>

                  <p className="text-gray-400">
                    Neo Whitefield Road
                    <br />
                    Near IT Corridor
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin
                  className="text-[#D8B15A] mt-1"
                />

                <div>

                  <h4 className="font-semibold">
                    Legal Address
                  </h4>

                  <p className="text-gray-400 leading-7">
                    Opp. The Polaris International School,
                    <br />
                    Hoskote,
                    Karnataka 562114
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone
                  className="text-[#D8B15A]"
                />

                <a
                  href="tel:+919023733333"
                  className="text-gray-300 hover:text-[#D8B15A]"
                >
                  +91 902 373 3333
                </a>

              </div>

              <div className="flex gap-4">

                <Mail
                  className="text-[#D8B15A]"
                />

                <a
                  href="mailto:info@eastbrook.in"
                  className="text-gray-300 hover:text-[#D8B15A]"
                >
                  info@eastbrook.in
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 border-t border-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <p className="text-gray-500 text-sm text-center lg:text-left">
            © {new Date().getFullYear()} Eastbrook by Navanaami Projects Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D8B15A] hover:text-black transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D8B15A] hover:text-black transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D8B15A] hover:text-black transition"
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
}