"use client";
import { useState } from "react";
import {
  MagnifyingGlassIcon as SearchIcon,
  UserIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Glassmorphism bar */}
      <div className="glass-dark border-b border-white/8 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-lg" style={{boxShadow:'0 0 20px rgba(124,58,237,0.5)'}}>
                    <span className="text-white font-black text-sm">T</span>
                  </div>
                </div>
                <span className="text-2xl font-black tracking-tight gradient-text">tap.</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {["Home", "Products", "Business", "Blogs", "Tutorials"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-5">
              <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                EN <ChevronDownIcon className="h-3.5 w-3.5" />
              </button>
              <SearchIcon className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <UserIcon className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <button className="relative">
                <ShoppingCartIcon className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-violet-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">2</span>
              </button>
              <a
                href="#"
                className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-semibold btn-glow"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
              <ShoppingCartIcon className="h-5 w-5 text-gray-400" />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 rounded-lg glass border border-white/10 text-gray-300 hover:text-white transition-colors"
              >
                {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden glass-dark border-b border-white/8 animate-slide-down">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {["Home", "Products", "Business", "Blogs", "Tutorials"].map((item) => (
              <a
                key={item}
                href="#"
                className="py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-3 pb-1">
              <a
                href="#"
                className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-semibold btn-glow"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};