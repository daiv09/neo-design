"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

interface NeoDialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  description?: string
}

const NeoDialog = ({ isOpen, onClose, children, title, description }: NeoDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-neo-black/60 backdrop-blur-sm" 
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0, rotate: -1 }}
            animate={{ scale: 1, y: 0, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.9, opacity: 0, rotate: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative z-50 w-full max-w-lg p-8 bg-neo-white border-4 border-neo-black shadow-neo-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -right-4 -top-4 bg-neo-red-400 border-3 border-neo-black p-2 hover:brightness-110 active:translate-x-1 active:translate-y-1 transition-all shadow-neo-sm active:shadow-none"
            >
              <X className="h-5 w-5 font-black" />
            </button>

            {/* Header Area */}
            {(title || description) && (
              <div className="mb-6 border-b-4 border-neo-black pb-4">
                {title && (
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-sm font-bold text-neo-black/60 mt-2 font-neo-mono bg-neo-yellow-400/20 inline-block px-2">
                    {description}
                  </p>
                )}
              </div>
            )}

            <div className="font-bold">{children}</div>
            
            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 h-4 w-4 bg-neo-black" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const DialogDemo = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <button 
        onClick={() => setOpen(true)}
        className="px-8 py-4 border-4 border-neo-black bg-neo-blue-400 font-black uppercase shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
      >
        Open Modal
      </button>

      <NeoDialog 
        isOpen={open} 
        onClose={() => setOpen(false)}
        title="Sync to DataVerse"
        description="Confirm repository synchronization"
      >
        <div className="space-y-4">
          <p className="text-sm">
            Are you sure you want to push your local design tokens to the <span className="underline decoration-neo-red-400 decoration-4">DataVerse</span> cloud?
          </p>
          <div className="flex gap-4 mt-6">
            <button 
              onClick={() => setOpen(false)}
              className="flex-1 py-2 border-3 border-neo-black bg-neo-green-400 font-black uppercase text-xs shadow-neo-sm"
            >
              Confirm
            </button>
            <button 
              onClick={() => setOpen(false)}
              className="flex-1 py-2 border-3 border-neo-black bg-neo-white font-black uppercase text-xs shadow-neo-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </NeoDialog>
      <p className="text-[10px] font-black uppercase text-neo-black/40 italic">↑ Click to test spring-loaded modal entrance</p>
    </div>
  )
}

export const dialogDocData = {
  title: "Dialog",
  description: "A high-impact overlay that interrupts the user with important information. Features spring physics and a textured backdrop.",
  status: "Stable",
  example: <DialogDemo />,
  code: `"use client"

import { NeoDialog } from "@/components/ui/neo-dialog"

export default function Example() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <NeoDialog 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      title="System Alert"
    >
      Your project tokens have been synced.
    </NeoDialog>
  )
}`
};

export { NeoDialog }