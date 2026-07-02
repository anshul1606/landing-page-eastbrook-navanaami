"use client";

import Image from "next/image";
import { Building2, Trees, Trophy } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./ui/SectionHeading";
import AmenityCategory from "./ui/AmenityCategory";

const amenities = [
  {
    title: "Clubhouse",
    icon: Building2,
    image: "/images/gym.png",
    items: [
      "Gym",
      "Indoor Games",
      "Party Hall",
    ],
  },
  {
    title: "Lifestyle",
    icon: Trees,
    image: "/images/gazebo.jpg",
    items: [
      "Senior Citizen Park",
      "Grocery Store",
      "Amphitheatre",
      "Gazebo",
      "Butterfly Garden",
    ],
  },
  {
    title: "Sports",
    icon: Trophy,
    image: "/images/sports.jpg",
    items: [
      "Cricket Pitch",
      "Pickleball Court",
      "Multipurpose Court",
    ],
  },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative py-15 md:py-20 overflow-hidden"
    >
      {/* Background Image */}
    <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/images/amenity-bg.png')",
        }}
    />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-[#08111F]"/>

      {/* Gold Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#08111F]"></div>

      <Container className="relative z-10">

        <SectionHeading
          subtitle="AMENITIES"
          title="Everything You Need,"
          highlight="Within The Community"
          description="A world of comfort, recreation and convenience designed for modern luxury living."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {amenities.map((item, index) => (
            <AmenityCategory
              key={index}
              {...item}
              delay={index * .2}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}