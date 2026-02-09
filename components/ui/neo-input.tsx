"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const NeoInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full border-3 border-neo-black bg-neo-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 font-neo-mono",
          "shadow-neo transition-all focus:translate-x-(--translate-box-sm) focus:translate-y-(--translate-box-sm) focus:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
NeoInput.displayName = "NeoInput"

export { NeoInput }

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const InputDemo = () => {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-neo-black">
          Email Address
        </label>
        <NeoInput type="email" placeholder="daiv@mit-wpu.edu" />
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-neo-black">
          Password
        </label>
        <NeoInput type="password" placeholder="********" />
      </div>

      <div className="space-y-2 opacity-60">
        <label className="text-xs font-black uppercase tracking-widest text-neo-black">
          Disabled Field
        </label>
        <NeoInput disabled placeholder="Cannot edit this" />
      </div>
      
      <p className="text-[10px] font-bold text-neo-black/40 uppercase italic text-center">
        The input &quot;sinks&quot; into the page on focus for tactile feedback.
      </p>
    </div>
  )
}

export const inputDocData = {
  title: "Input",
  description: "A single-line text field built for high-contrast forms. Features a physical focus state that mirrors a button press.",
  status: "Stable",
  example: <InputDemo />,
  code: `"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const NeoInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full border-3 border-neo-black bg-neo-white px-3 py-2 text-sm font-neo-mono",
          "shadow-neo transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
NeoInput.displayName = "NeoInput"

export { NeoInput }`
};