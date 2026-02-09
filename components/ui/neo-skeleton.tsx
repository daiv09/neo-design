"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

function NeoSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse bg-neo-black/10 border-2 border-neo-black border-dashed opacity-50 shadow-neo-sm",
        className
      )}
      {...props}
    />
  )
}

export { NeoSkeleton }

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const SkeletonDemo = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm p-6 border-3 border-neo-black bg-neo-white shadow-neo rounded-(--radius-6)">
      {/* Header Skeleton */}
      <div className="flex items-center gap-4">
        <NeoSkeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <NeoSkeleton className="h-4 w-[80%]" />
          <NeoSkeleton className="h-3 w-[40%]" />
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="space-y-3">
        <NeoSkeleton className="h-3 w-full" />
        <NeoSkeleton className="h-3 w-full" />
        <NeoSkeleton className="h-3 w-[60%]" />
      </div>

      {/* Button Skeleton */}
      <NeoSkeleton className="h-10 w-full rounded-(--radius-6)" />
      
      <p className="text-[10px] font-black uppercase text-center text-neo-black/40 italic">
        Loading state simulation
      </p>
    </div>
  )
}

export const skeletonDocData = {
  title: "Skeleton",
  description: "A placeholder component used to indicate a loading state while maintaining the high-contrast layout of your application.",
  status: "Stable",
  example: <SkeletonDemo />,
  code: `"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function NeoSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse bg-neo-black/10 border-2 border-neo-black border-dashed opacity-50 shadow-neo-sm",
        className
      )}
      {...props}
    />
  )
}

export { NeoSkeleton }`
};