"use client";
import { useState } from "react";
import Image from "next/image";
import card from "../assets/card.png";
import google from "../assets/google.png";
import blackcard from "../assets/blackcard.png";
import whitecard from "../assets/whitecard.png";
import bluecard from "../assets/bluecard.png";
import purplecard from "../assets/purplecard.png";
import blackcard1 from "../assets/blackcard1.png";

const cards = [
  { src: blackcard, alt: "Black Card", label: "Black" },
  { src: whitecard, alt: "White Card", label: "White" },
  { src: bluecard, alt: "Blue Card", label: "Blue" },
  { src: purplecard, alt: "Purple Card", label: "Purple" },
  { src: blackcard1, alt: "Black Card 1", label: "Matte" },
];

const colorDots: Record<string, string> = {
  Black: "#1a1a1a",
  White: "#f5f5f5",
  Blue: "#3B82F6",
  Purple: "#7C3AED",
  Matte: "#333340",
};

export default function Cart() {
  const [selectedImage, setSelectedImage] = useState(card);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-500/30" />
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">Featured Product</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500/30" />
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Thumbnail column */}
          <div className="flex flex-row lg:flex-col items-center gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {cards.map((c, index) => (
              <button
                key={index}
                onClick={() => { setSelectedImage(c.src); setSelectedColor(c.label); }}
                className={`flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                  selectedColor === c.label
                    ? "border-violet-500 shadow-lg"
                    : "border-white/10 hover:border-white/30"
                }`}
                style={selectedColor === c.label ? {boxShadow:'0 0 16px rgba(124,58,237,0.5)'} : {}}
              >
                <Image src={c.src} alt={c.alt} className="w-full h-full object-contain p-1.5"
                  style={{background:'rgba(255,255,255,0.04)'}} />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative w-full lg:w-96 xl:w-[420px] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(16,16,28,0.9), rgba(30,10,50,0.9))',
                border: '1px solid rgba(124,58,237,0.2)',
                boxShadow: '0 0 60px rgba(124,58,237,0.12)',
              }}>
              {/* Glow under card */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-20 blur-2xl opacity-50"
                style={{background:'radial-gradient(ellipse, rgba(124,58,237,0.6), transparent)'}} />
              <Image src={selectedImage} alt="Selected Card" className="w-full h-auto relative z-10 p-6" />
            </div>
          </div>

          {/* Product details */}
          <div className="flex-1 min-w-0">
            {/* Badges */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{background:'linear-gradient(135deg,#7C3AED,#A855F7)'}}>✦ New</span>
              <div className="flex items-center gap-1 text-sm text-yellow-400">
                ⭐ <span className="font-semibold text-white">5.0</span>
                <span className="text-gray-500 text-xs">(128 reviews)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Tap NFC Prestige Card
              <span className="block text-gray-400 font-medium text-lg mt-1">Custom Embossed Names</span>
            </h1>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-white">LE 499</span>
              <span className="text-gray-500 text-sm font-medium">EGP</span>
              <span className="ml-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                Free Shipping
              </span>
            </div>

            <div className="mt-5 h-px bg-white/8" />

            <p className="mt-5 text-gray-400 text-sm leading-relaxed">
              Discover the seamless blend of elegance and connectivity with the{" "}
              <span className="text-violet-300 font-medium">NFC Prestige Card</span>. Tailored for those who make
              no compromises on quality, this card places your identity at the forefront with exquisite embossing.
            </p>

            {/* Color selector */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Color: <span className="text-white normal-case font-medium tracking-normal">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {cards.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => { setSelectedImage(c.src); setSelectedColor(c.label); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all duration-200 ${
                      selectedColor === c.label
                        ? "border-violet-500 text-white bg-violet-500/15"
                        : "border-white/12 text-gray-400 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full border border-white/20 flex-shrink-0"
                      style={{background: colorDots[c.label]}} />
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Quantity</p>
              <div className="flex items-center rounded-xl border border-white/12 w-fit overflow-hidden"
                style={{background:'rgba(255,255,255,0.04)'}}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/8 transition-all text-lg"
                >−</button>
                <span className="w-10 text-center text-sm font-semibold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/8 transition-all text-lg"
                >+</button>
              </div>
            </div>

            {/* Name inputs */}
            <div className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name (for embossing)"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-violet-500/50"
                style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)'}}
              />
              <input
                type="text"
                placeholder="Your Title (optional)"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-violet-500/50"
                style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)'}}
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3.5 rounded-xl font-semibold text-sm text-white btn-glow transition-all"
                style={{background:'linear-gradient(135deg,#7C3AED,#A855F7)'}}>
                Add to Cart
              </button>
              <button className="flex-1 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all hover:bg-white/8"
                style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}>
                <span>Buy with</span>
                <Image src={google} alt="Google Pay" width={20} height={20} />
                <span>Pay</span>
              </button>
            </div>
            <a href="#" className="block mt-3 text-center text-xs text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2">
              More payment options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}