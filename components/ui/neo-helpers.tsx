"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

// A layout grid specifically tuned for Neobrutalist offsets
export const NeoGrid = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
    {children}
  </div>
)

// A "Sticky Note" style callout helper
export const NeoNote = ({ children, color = "yellow", className }: { 
  children: React.ReactNode, 
  color?: "yellow" | "blue" | "red" | "green",
  className?: string 
}) => {
  const colors = {
    yellow: "bg-neo-yellow-400",
    blue: "bg-neo-blue-400",
    red: "bg-neo-red-400",
    green: "bg-neo-green-400"
  }
  return (
    <motion.div 
      whileHover={{ rotate: 0 }}
      initial={{ rotate: -1 }}
      className={cn(
        "p-6 border-3 border-neo-black shadow-neo font-neo-mono text-sm relative",
        colors[color],
        className
      )}
    >
      <div className="absolute top-2 right-2 h-3 w-3 border-2 border-neo-black rounded-full bg-neo-white" />
      {children}
    </motion.div>
  )
}

// A high-contrast decorative divider
export const NeoDivider = ({ className }: { className?: string }) => (
  <div className={cn("h-1.5 w-full bg-neo-black my-8 relative", className)}>
    <div className="absolute -top-1 left-10 h-3 w-3 bg-neo-yellow-400 border-2 border-neo-black rotate-45" />
    <div className="absolute -top-1 right-10 h-3 w-3 bg-neo-blue-400 border-2 border-neo-black rotate-45" />
  </div>
)

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const HelpersDemo = () => {
  return (
    <div className="w-full space-y-10">
      <div className="space-y-4">
        <p className="text-xs font-black uppercase italic">NeoNote Helper:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NeoNote color="yellow">
            <span className="font-black underline">IMPORTANT:</span> Always use 3px borders for consistent &quot;metal&quot; feel.
          </NeoNote>
          <NeoNote color="blue">
            <span className="font-black underline">TIP:</span> Mix Space Grotesk with Space Mono for best results.
          </NeoNote>
        </div>
      </div>

      <NeoDivider />

      <div className="space-y-4">
        <p className="text-xs font-black uppercase italic">NeoDivider Helper:</p>
        <p className="text-sm font-bold text-neo-black/60">Used to separate heavy sections.</p>
      </div>
    </div>
  )
}

export const helpersDocData = {
  title: "Neo Helpers",
  description: "A collection of layout and decorative utilities designed to reinforce the Neobrutalist aesthetic across your application.",
  status: "Stable",
  example: <HelpersDemo />,
  code: `"use client"

import * as React from "react"
import { motion } from "framer-motion"

export const NeoNote = ({ children, color = "yellow" }) => (
  <motion.div 
    initial={{ rotate: -1 }}
    whileHover={{ rotate: 0 }}
    className="border-3 border-neo-black shadow-neo font-neo-mono ..."
  >
    {children}
  </motion.div>
)

export const NeoDivider = () => (
  <div className="h-1.5 w-full bg-neo-black my-8 relative">
    {/* Decorative diamond accents */}
  </div>
)`
};