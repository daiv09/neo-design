"use client"

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

export function NeoSectionTitle({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-6", className)}>
      {eyebrow && (
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border-3 border-neo-black bg-neo-yellow-400 px-4 py-2 text-xs font-black uppercase shadow-neo italic tracking-widest"
        >
          {eyebrow}
        </motion.div>
      )}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-neo-black leading-[0.9]">
          {title}
        </h2>
      </motion.div>

      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl font-bold text-neo-black/70 max-w-3xl border-l-4 border-neo-black pl-6 py-1"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const SectionTitleDemo = () => {
  return (
    <div className="w-full p-8 bg-neo-grid-small border-3 border-neo-black shadow-neo bg-neo-white">
      <NeoSectionTitle
        eyebrow="Foundation"
        title="Typography System"
        subtitle="Our type system uses Space Grotesk for headings to ensure maximum impact and readability in high-contrast environments."
      />
    </div>
  );
};

export const sectionTitleDocData = {
  title: "Section Title",
  description: "A high-impact header component used to define major sections of a page. Includes support for eyebrows and animated subtitles.",
  status: "Stable",
  example: <SectionTitleDemo />,
  code: `"use client"

import * as React from "react";
import { motion } from "framer-motion";

export function NeoSectionTitle({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className="space-y-6">
      {eyebrow && (
        <div className="border-3 border-neo-black bg-neo-yellow-400 px-4 py-2 text-xs font-black shadow-neo uppercase">
          {eyebrow}
        </div>
      )}
      <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl font-bold border-l-4 border-neo-black pl-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}`
};