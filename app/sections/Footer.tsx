"use client";
import Image from "next/image";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const navLinks = {
  "Shop Menu": ["Home", "Products", "Business", "Blogs", "Contact"],
  "Legal": ["Privacy Policy", "Refund Policy", "Terms & Conditions", "Copyright Declaration"],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="pt-16 pb-8" style={{borderTop:'1px solid rgba(255,255,255,0.06)'}}>
      <div className="container mx-auto px-4 sm:px-6">

        {/* Blog Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-1 block">Latest</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">From Our Blog</h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-violet-300 transition-colors">
              View all
              <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}>
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { img: blog1, title: "Which Industries Can Benefit from Digital Business Cards?" },
              { img: blog2, title: "Explore Tap Card Benefits: Sleek, Convenient Payment Solution" },
            ].map((post, i) => (
              <a key={i} href="#" className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)'}}>
                <div className="overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-violet-400 font-medium">Technology · 3 min read</span>
                  <h3 className="mt-2 text-base sm:text-lg font-semibold text-white leading-snug group-hover:text-violet-200 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-violet-400 flex items-center gap-1">
                    Read More <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-14 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)'}} />

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{background:'linear-gradient(135deg,#7C3AED,#A855F7)', boxShadow:'0 0 15px rgba(124,58,237,0.4)'}}>
                <span className="text-white font-black text-xs">T</span>
              </div>
              <span className="text-xl font-black gradient-text">tap.</span>
            </a>
            <p className="text-gray-500 text-xs leading-relaxed max-w-[220px]">
              Redefining networking with innovative NFC &amp; QR technology. Empower professionals to connect instantly.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: faFacebookF, label: "Facebook" },
                { icon: faInstagram, label: "Instagram" },
                { icon: faTiktok, label: "TikTok" },
                { icon: faLinkedinIn, label: "LinkedIn" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <FontAwesomeIcon icon={icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(navLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-violet-300 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Newsletter</h3>
            <p className="text-white font-semibold text-sm leading-snug mb-4">
              Sign up for updates &amp; exclusive offers.
            </p>
            <div className="flex items-center rounded-xl overflow-hidden"
              style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-xs text-white placeholder-gray-600 bg-transparent outline-none"
              />
              <button className="p-3 flex items-center justify-center transition-all hover:opacity-80"
                style={{background:'linear-gradient(135deg,#7C3AED,#A855F7)'}}>
                <EnvelopeIcon className="h-4 w-4 text-white" />
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-600">No spam, unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{borderTop:'1px solid rgba(255,255,255,0.06)'}}>
          <p className="text-xs text-gray-600">© 2024 TAP. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <span className="flex items-center gap-1">
              English <span className="text-gray-700">▼</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
