"use client";

import Container from "./Container";
import SectionHeading from "./ui/SectionHeading";
import FeatureCard from "./ui/FeatureCard";

const features = [
  {
    icon: "₹",
    title: "Smarter Pricing",
    value: "₹2.39 Cr",
    description:
      "Own a premium villa at a price comparable to luxury apartments, offering greater space, privacy, and long-term value.",
  },
  {
    icon: "⏳",
    title: "Quick Possession",
    value: "10 Months",
    description:
      "Move into your dream home sooner with a significantly shorter possession timeline than most villa projects.",
  },
  {
    icon: "🏡",
    title: "Exclusive Community",
    value: "Only 50 Villas",
    description:
      "A low-density gated community designed for peaceful living, enhanced privacy, and an elite lifestyle.",
  },
];

export default function ValueSection() {
  return (
    <section
      id="about"
      className="bg-[#08111F] py-15 md:py-20"
    >
      <Container>

        <SectionHeading
          subtitle="Why Choose Eastbrook"
          title="A Villa"
          highlight="At The Price Of A Flat"
          description="Experience luxury independent living with exceptional value, quicker possession, and a thoughtfully planned gated community."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              value={feature.value}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}