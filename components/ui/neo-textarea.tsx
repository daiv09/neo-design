"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const NeoTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full border-3 border-neo-black bg-neo-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-black disabled:cursor-not-allowed disabled:opacity-50 shadow-neo transition-all focus:shadow-none focus:translate-x-(--translate-box-sm) focus:translate-y-(--translate-box-sm) font-neo-mono",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
NeoTextarea.displayName = "NeoTextarea"

export { NeoTextarea }

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const TextareaDemo = () => {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-neo-black">
          Project Description
        </label>
        <NeoTextarea 
          placeholder="Tell us about your next big Neobrutalist project..." 
          className="min-h-[120px]"
        />
      </div>
      <p className="text-[10px] font-bold text-neo-black/40 uppercase italic">
        Focus the textarea to see the tactile &quot;press&quot; animation.
      </p>
    </div>
  )
}

export const textareaDocData = {
  title: "Textarea",
  description: "A multi-line text input field with high-contrast borders and a tactile focus state animation.",
  status: "Stable",
  example: <TextareaDemo />,
  code: `"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const NeoTextarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-20 w-full border-3 border-neo-black bg-neo-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-black disabled:cursor-not-allowed disabled:opacity-50 shadow-neo transition-all focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] font-neo-mono",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
NeoTextarea.displayName = "NeoTextarea"

export { NeoTextarea }`
};