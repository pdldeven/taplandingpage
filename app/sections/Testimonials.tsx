"use client";
import Image from "next/image";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import { useRef } from "react";

const testimonials = [
  {
    image: person1,
    name: "Assem Emam",
    title: "CEO, ElCoach, Inc.",
    feedback: "I've never been a big fan of business cards, but I've had the chance to attend two major events relying solely on Tap's card. I'm now a big fan! The experience was seamless and super efficient.",
    rating: 5,
    highlight: "seamless and super efficient",
  },
  {
    image: person2,
    name: "Amr Elmeligui",
    title: "Marketing Executive, Arab Developers Holding",
    feedback: "Perfect and beyond expectations. The quality of the product and the experience it delivers is absolutely world-class.",
    rating: 5,
    highlight: "Perfect and beyond",
  },
  {
    image: person3,
    name: "Marwan Ramadan",
    title: "CEO, HITCH",
    feedback: "I love the whole experience and how easy it is to share your info with others. Great work guys!",
    rating: 5,
    highlight: "love the whole experience",
  },
  {
    image: person4,
    name: "Mohamed Sherif",
    title: "Art Director / OIC, Nithar",
    feedback: "Great smart products with high quality material. The embossing is precise and the card feels premium in your hand.",
    rating: 5,
    highlight: "high quality material",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2 block">Social Proof</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              What our customers{" "}
              <span className="gradient-text">are saying</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="text-yellow-400 text-base">★</span>
              <strong className="text-white font-semibold">4.9</strong>/5
            </span>
            <span className="text-gray-600">·</span>
            <span>500+ Reviews</span>
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="relative">
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none hidden sm:block"
            style={{background:'linear-gradient(270deg, var(--bg-primary), transparent)'}} />

          <div ref={scrollRef} className="flex overflow-x-scroll gap-4 pb-4 scrollbar-hide scroll-smooth">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[340px] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 relative group"
                style={{
                  background: 'linear-gradient(135deg, rgba(18,14,30,0.95), rgba(14,10,24,0.9))',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Left purple accent */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                  style={{background:'linear-gradient(180deg, #7C3AED, #A855F7, transparent)'}} />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  &ldquo;{t.feedback}&rdquo;
                </p>

                {/* Person */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-violet-500/30 object-cover w-10 h-10"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
