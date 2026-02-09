"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { NeoSectionTitle } from "@/components/ui/neo-section-title";
import { NeoCard } from "@/components/ui/neo-card";

export default function TokensSection() {
  const tokenColors = [
    { name: "Red", class: "bg-neo-red-400", hex: "#f87171" },
    { name: "Yellow", class: "bg-neo-yellow-400", hex: "#facc15" },
    { name: "Blue", class: "bg-neo-blue-400", hex: "#60a5fa" },
    { name: "Green", class: "bg-neo-green-400", hex: "#4ade80" },
    { name: "Black", class: "bg-neo-black", hex: "#000000" },
    { name: "White", class: "bg-neo-white", hex: "#ffffff" },
  ];

  // Text Animation Variants
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.08, 
        type: "spring" as const, 
        stiffness: 250,
        damping: 25,
      }
    })
  };

  return (
    <section id="tokens" className="py-24 bg-neo-grid-small overflow-hidden font-neo-sans">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">
          
          {/* Left Side: Animated Text */}
          <div className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <NeoSectionTitle
                eyebrow="System Architecture"
                title={
                  <span className="flex flex-wrap">
                    {"Design tokens that feel like metal.".split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        initial="initial"
                        whileInView="animate"
                        className="mr-3 inline-block"
                        viewport={{ once: true }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                }
                subtitle="Core palette, borders, radii, and shadows live in globals.css so every component stays consistent and high-contrast."
              />
            </motion.div>
          </div>

          {/* Right Side: Interactive Token Card */}
          <motion.div
            initial={{ rotate: 2, y: 40, opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15 }}
          >
            <NeoCard className="relative overflow-hidden border-4 border-neo-black bg-neo-black p-0 shadow-neo-xl">
              {/* Card Header/Toolbar */}
              <div className="flex items-center justify-between border-b-4 border-neo-black bg-neo-yellow-400 px-6 py-3">
                <div className="flex items-center gap-3 text-sm font-black uppercase italic tracking-tighter">
                  <Terminal className="h-5 w-5" />
                  globals.css — architecture
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-none border-2 border-neo-black bg-neo-red-400" />
                  <div className="h-3 w-3 rounded-none border-2 border-neo-black bg-neo-blue-400" />
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* CSS Variables Display */}
                <div className="grid gap-3 font-neo-mono">
                  {[
                    { label: "--shadow-neo", val: "4px 4px 0px" },
                    { label: "--border-width-3", val: "3px" },
                    { label: "--font-neo-sans", val: "Space Grotesk" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex justify-between border-3 border-neo-white/20 bg-neo-white/5 px-4 py-3 text-neo-white hover:border-neo-green-400 hover:text-neo-green-400 transition-colors cursor-pointer group"
                    >
                      <span className="font-black opacity-60 group-hover:opacity-100">{item.label}</span>
                      <span className="font-bold italic">{item.val}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Color Swatches */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neo-white/40">Active Palette</p>
                  <div className="flex flex-wrap gap-4">
                    {tokenColors.map((color, i) => (
                      <motion.div
                        key={color.name}
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                        whileHover={{ 
                          scale: 1.1, 
                          translateY: -5,
                          boxShadow: "8px 8px 0px 0px rgba(255,255,255,1)" 
                        }}
                        className={`group relative h-14 w-14 cursor-help border-3 border-neo-white shadow-neo-sm ${color.class}`}
                      >
                        {/* Tooltip on Hover */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 bg-neo-white px-2 py-1 text-[10px] font-black text-neo-black group-hover:scale-100 transition-transform whitespace-nowrap border-2 border-neo-black">
                          {color.hex}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Bottom Decoration */}
              <div className="h-2 w-full bg-linear-to-r from-neo-red-400 via-neo-yellow-400 to-neo-blue-400" />
            </NeoCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}