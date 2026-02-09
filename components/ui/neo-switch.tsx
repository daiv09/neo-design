"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

const NeoSwitch = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { 
    checked?: boolean; 
    onCheckedChange?: (checked: boolean) => void 
  }
>(({ className, checked: controlledChecked, onCheckedChange, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = React.useState(controlledChecked ?? false)
  
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked

  const toggle = () => {
    const newState = !isChecked
    if (controlledChecked === undefined) {
      setInternalChecked(newState)
    }
    onCheckedChange?.(newState)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={toggle}
      ref={ref}
      className={cn(
        "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center border-3 border-neo-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-neo-sm active:shadow-none active:translate-y-(--translate-box-sm)",
        isChecked ? "bg-neo-green-400" : "bg-neo-white",
        className
      )}
      {...props}
    >
      <motion.span
        initial={false}
        animate={{
          x: isChecked ? 28 : 4,
          backgroundColor: isChecked ? "#ffffff" : "#000000",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="pointer-events-none block h-5 w-5 border-2 border-neo-black shadow-sm"
      />
    </button>
  )
})
NeoSwitch.displayName = "NeoSwitch"

export { NeoSwitch }

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const SwitchDemo = () => {
  const [isSyncing, setIsSyncing] = React.useState(true)

  return (
    <div className="flex flex-col gap-6 w-full max-w-xs p-6 border-3 border-dashed border-neo-black bg-neo-white/50">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <label className="text-sm font-black uppercase tracking-tight">Real-time Sync</label>
          <p className="text-[10px] font-bold text-neo-black/60 uppercase">Sync data to DataVerse</p>
        </div>
        <NeoSwitch 
          checked={isSyncing} 
          onCheckedChange={setIsSyncing} 
        />
      </div>
      
      <div className="flex items-center justify-between opacity-60">
        <div className="space-y-0.5">
          <label className="text-sm font-black uppercase tracking-tight">Public Profile</label>
          <p className="text-[10px] font-bold text-neo-black/60 uppercase">Disabled by Admin</p>
        </div>
        <NeoSwitch disabled />
      </div>
      
      <p className="text-[10px] font-bold text-neo-black/40 uppercase italic text-center">
        State: {isSyncing ? "Active" : "Paused"}
      </p>
    </div>
  )
}

export const switchDocData = {
  title: "Switch",
  description: "A high-contrast toggle control that allows users to switch between two states with spring-loaded physics.",
  status: "Stable",
  example: <SwitchDemo />,
  code: `"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const NeoSwitch = React.forwardRef<HTMLButtonElement, NeoSwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        className={cn(
          "h-8 w-14 border-3 border-neo-black shadow-neo-sm ...",
          isChecked ? "bg-neo-green-400" : "bg-neo-white"
        )}
        {...props}
      >
        <motion.span
          animate={{ x: isChecked ? 28 : 4 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="h-5 w-5 border-2 border-neo-black ..."
        />
      </button>
    )
  }
)`
};