"use client"

import { motion } from "framer-motion";

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

interface NeoStatProps {
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "accent";
  showGraph?: boolean;
}

const variantColors = {
  primary: "bg-neo-red-400",
  secondary: "bg-neo-blue-400",
  tertiary: "bg-neo-yellow-400",
  accent: "bg-neo-green-400",
};

export function NeoStat({
  label,
  value,
  trend,
  trendValue,
  className = "",
  variant = "primary",
  showGraph = false,
}: NeoStatProps) {
  return (
    <div
      className={[
        "border-3 border-neo-black bg-neo-white shadow-neo p-6 rounded-(--radius-6) flex flex-col gap-4 relative overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* Decorative accent corner */}
      <div className={`absolute top-0 right-0 h-4 w-4 border-l-3 border-b-3 border-neo-black ${variantColors[variant]}`} />

      <div className="space-y-1 relative z-10">
        <div className="text-sm font-black uppercase tracking-widest text-neo-black/60">{label}</div>
        <div className="text-4xl font-black italic tracking-tighter">{value}</div>
      </div>

      {trend && (
        <div className="flex items-center gap-2 relative z-10">
          <span className={`text-xs font-black uppercase px-2 py-0.5 border-2 border-neo-black shadow-neo-sm ${
            trend === "up" ? "bg-neo-green-400" : trend === "down" ? "bg-neo-red-400" : "bg-neo-yellow-400"
          }`}>
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "↔"} {trendValue}
          </span>
        </div>
      )}

      {showGraph && (
        <div className="h-12 w-full mt-2 border-t-2 border-dashed border-neo-black/20 pt-4 flex items-end gap-1">
          {/* Simple Neobrutalist Bar Graph using SVGs */}
          {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className={`flex-1 border-2 border-neo-black shadow-neo-sm ${variantColors[variant]}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const StatsDemo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
      <NeoStat 
        label="Total Users" 
        value="12.4k" 
        trend="up" 
        trendValue="14%" 
        variant="secondary"
        showGraph
      />
      <NeoStat 
        label="Revenue" 
        value="$45,200" 
        trend="down" 
        trendValue="3.2%" 
        variant="accent"
        showGraph
      />
    </div>
  );
};

export const statsDocData = {
  title: "Stats",
  description: "High-impact data cards for displaying key performance indicators and metrics with integrated micro-charts.",
  status: "Beta",
  example: <StatsDemo />,
  code: `"use client"

import * as React from "react";
import { motion } from "framer-motion";

export function NeoStat({
  label,
  value,
  trend,
  trendValue,
  className = "",
  variant = "primary",
  showGraph = false,
}: NeoStatProps) {
  return (
    <div className="border-3 border-neo-black bg-neo-white shadow-neo p-6 rounded-(--radius-6) relative overflow-hidden">
      <div className="text-sm font-black uppercase text-neo-black/60">{label}</div>
      <div className="text-4xl font-black tracking-tighter">{value}</div>
      {showGraph && (
         /* Render SVG or animated Div bars as shown in source */
      )}
    </div>
  );
}`
};