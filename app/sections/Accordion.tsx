"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import googlePlay from "../assets/googleplay.png";
import appStore from "../assets/appstore.png";
import { useState } from "react";

const faqs = [
  {
    value: "item-1",
    question: "What is TAP?",
    answer: "TAP is advancing your networking game by allowing you to share it all — your social media, contact info, files, and so much more. TAP uses NFC technology integrated into various forms such as cards, stickers, and keychains. Other people don't need an app to receive your info.",
  },
  {
    value: "item-2",
    question: "How does it work?",
    answer: "An integrated NFC chip in TAP Products wirelessly transmits data to your smartphone. Push notifications appear on other phones to begin the sharing. When they tap on that notification, your profile will open on their phone instantly — no app required!",
  },
  {
    value: "item-3",
    question: "Do other people need to download an app?",
    answer: "No! Other people don't need an app to receive your data. If their device has NFC, simply tap your product to their device and your profile will pop up instantly on their screen.",
  },
  {
    value: "item-4",
    question: "Tapping to older iPhones?",
    answer: "TAP Products are compatible with almost all iPhones, including iPhone XR, XS, XS Max, and later. Older iPhones may require a few extra steps to enable NFC scanning.",
  },
  {
    value: "item-5",
    question: "My phone isn't compatible with NFC?",
    answer: "Not a problem! TAP QR codes can be scanned using the camera on iPhones as old as iPhone 5S and almost all Android devices — making TAP universally accessible.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section className="py-16">
      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:w-72 flex-shrink-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3 block">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Customer support available Sat–Thu: 11am–5:30pm.
            </p>
            <p className="mt-1 text-gray-600 text-xs">Average response time: 24h</p>

            {/* Contact CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all btn-glow"
              style={{background:'linear-gradient(135deg,#7C3AED,#A855F7)'}}
            >
              Contact Support
            </a>
          </div>

          {/* Right — Accordion */}
          <div className="flex-1">
            <AccordionPrimitive.Root
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="flex flex-col gap-3"
            >
              {faqs.map((item) => {
                const isOpen = openItem === item.value;
                return (
                  <AccordionPrimitive.Item
                    key={item.value}
                    value={item.value}
                    className="rounded-xl overflow-hidden transition-all duration-300"
                    style={{
                      background: isOpen
                        ? 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.06))'
                        : 'rgba(255,255,255,0.03)',
                      border: isOpen
                        ? '1px solid rgba(124,58,237,0.3)'
                        : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <AccordionPrimitive.Header>
                      <AccordionPrimitive.Trigger className="flex items-center justify-between w-full p-5 text-left group">
                        <span className={`flex-1 text-sm font-semibold transition-colors ${isOpen ? "text-violet-300" : "text-gray-200 group-hover:text-white"}`}>
                          {item.question}
                        </span>
                        <div className={`flex-shrink-0 ml-4 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
                          style={{
                            background: isOpen ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}>
                          <ChevronDownIcon className={`h-3.5 w-3.5 transition-colors ${isOpen ? "text-violet-300" : "text-gray-400"}`} />
                        </div>
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <div className="px-5 pb-5">
                        <p className="text-gray-400 text-sm leading-relaxed border-t border-white/6 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionPrimitive.Content>
                  </AccordionPrimitive.Item>
                );
              })}
            </AccordionPrimitive.Root>
          </div>
        </div>
      </div>

      {/* App Download Banner */}
      <div className="mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="relative rounded-3xl overflow-hidden p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(14,10,24,0.98), rgba(22,14,40,0.98))",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            {/* Background orb */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{background:'radial-gradient(circle,#A855F7,transparent)'}} />
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{background:'linear-gradient(90deg,transparent,rgba(124,58,237,0.5),rgba(168,85,247,0.5),transparent)'}} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={`text-sm ${i <= 4 ? "text-yellow-400" : "text-gray-600"}`}>★</span>
                  ))}
                  <span className="text-gray-400 text-sm ml-2">4.5/5 on App Stores</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Download Our Free<br />
                  <span className="gradient-text">App Now!</span>
                </h2>
                <p className="mt-3 text-gray-400 text-sm max-w-sm mx-auto lg:mx-0">
                  Create your digital profile, manage contacts, and start networking in minutes.
                </p>
                <a
                  href="#"
                  className="inline-block mt-6 px-8 py-3.5 rounded-full font-semibold text-sm text-black btn-glow transition-all"
                  style={{background:'linear-gradient(135deg,#4ADE80,#22C55E)', boxShadow:'0 0 30px rgba(74,222,128,0.3)'}}
                >
                  Download Free — No Credit Card
                </a>
              </div>

              {/* App Store badges */}
              <div className="flex gap-4 items-center">
                <a href="#" className="transition-transform hover:scale-105">
                  <Image src={googlePlay} alt="Get it on Google Play" className="h-12 w-auto" />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <Image src={appStore} alt="Download on App Store" className="h-12 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
