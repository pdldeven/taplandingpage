"use client";
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import blackcard from "../assets/blackcard.png";

const products = [
  { image: pic1, name: "Tap NFC Leather Keychain — Burgundy", price: "LE 349 EGP", rating: 5.0 },
  { image: pic2, name: "Pocket™ — World's Most Advanced NFC Cardholder", price: "LE 599 EGP", rating: 4.3 },
  { image: pic3, name: "GoWrist™ — Compatible with Apple Watch", price: "LE 549 EGP", rating: 5.0, originalPrice: "LE 750 EGP", discount: "Save 27%" },
  { image: pic4, name: "XL Sticker — For Social Venues — Black", price: "LE 399 EGP", rating: 5.0 },
  { image: pic5, name: "Tap NFC Sticker — White", price: "LE 250 EGP", rating: 5.0 },
  { image: pic6, name: "Tap Display — For Shops & Venues — Black", price: "LE 599 EGP", rating: 5.0 },
  { image: pic7, name: "GoWrist™ — Compatible with Traditional Watch", price: "LE 699 EGP", rating: 5.0, originalPrice: "LE 499 EGP", discount: "Save 29%" },
  { image: pic8, name: "RFID & NFC Business Card", price: "LE 499 EGP", rating: 5.0 },
  { image: blackcard, name: "Tap NFC Prestige Card Holder", price: "LE 499 EGP", rating: 5.0 },
];

export default function FeaturedCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2 block">Shop</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Featured Collection</h2>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-violet-300 transition-colors">
              View all →
            </a>
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-full transition-all duration-200 hover:-translate-x-0.5"
              style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}
            >
              <ArrowLeftIcon className="h-4 w-4 text-gray-300" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-full transition-all duration-200 hover:translate-x-0.5"
              style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}
            >
              <ArrowRightIcon className="h-4 w-4 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div className="relative">
          {/* Left/Right fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none hidden md:block"
            style={{background:'linear-gradient(90deg, var(--bg-primary), transparent)'}} />
          <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none hidden md:block"
            style={{background:'linear-gradient(270deg, var(--bg-primary), transparent)'}} />

          <div ref={scrollRef} className="flex overflow-x-scroll gap-4 pb-4 scroll-smooth scrollbar-hide">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative group flex-shrink-0 w-[230px] sm:w-[280px] md:w-[300px] rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(20,16,32,0.9), rgba(14,10,24,0.95))',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Image area */}
                <div className="relative overflow-hidden">
                  {product.discount && (
                    <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                      style={{background:'linear-gradient(135deg,#ef4444,#f97316)'}}>
                      {product.discount}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-[200px] sm:h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/20 transition-all duration-400" />
                  {/* Quick add */}
                  <button className="absolute bottom-3 right-3 z-20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    style={{background:'linear-gradient(135deg,#7C3AED,#A855F7)', boxShadow:'0 0 20px rgba(124,58,237,0.5)'}}>
                    + Quick Add
                  </button>
                </div>

                {/* Details */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-200 leading-snug flex-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-0.5 text-yellow-400 text-xs flex-shrink-0">
                      <span className="text-[10px]">⭐</span>
                      <span className="text-gray-300 font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-bold ${product.originalPrice ? "text-red-400" : "text-white"}`}>
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-gray-600 line-through text-xs">{product.originalPrice}</p>
                    )}
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
