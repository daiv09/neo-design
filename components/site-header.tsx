"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";
import { NeoButton } from "@/components/ui/neo-button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  /** * Updated logic: .startsWith("/components") ensures that 
   * localhost:3000/components AND localhost:3000/components/button
   * both trigger the extreme edge layout.
   */
  const isComponentsPage = pathname.startsWith("/components");

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Components", href: "/components" },
    { name: "Tokens", href: "/tokens" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-3 border-neo-black bg-neo-white/95 backdrop-blur transition-all duration-300">
      <div 
        className={`mx-auto flex items-center justify-between py-4 transition-all duration-500 ease-in-out
          ${isComponentsPage 
            ? "max-w-full px-4 md:px-6" // Logo and Github snap to extreme edges
            : "max-w-7xl px-4 md:px-8"   // Original extended box for homepage
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 shrink-0">
          <div className="flex h-11 w-11 items-center justify-center border-3 border-neo-black bg-neo-black text-neo-white text-xl font-black">
            N
          </div>
          <div className="hidden sm:block">
            <div className="text-xl font-black tracking-tight text-neo-black">NEO</div>
            <div className="text-xs font-bold uppercase text-neo-black/70">
              Neo Design System
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 text-sm font-bold uppercase md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`hover:underline underline-offset-4 text-neo-black transition-colors ${
                pathname === link.href ? "underline decoration-3" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* GitHub / Action Button */}
        <div className="flex items-center gap-4 shrink-0">
          <NeoButton variant="primary" className="hidden px-4 py-2 text-xs sm:flex">
            <Github className="h-4 w-4" />
            Star
          </NeoButton>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t-3 border-neo-black bg-neo-yellow-400 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-lg font-bold">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}