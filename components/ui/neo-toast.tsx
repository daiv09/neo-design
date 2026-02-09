"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info, CheckCircle, AlertTriangle, AlertOctagon } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

type ToastType = "info" | "success" | "warning" | "error"

interface ToastProps {
  id: string
  message: string
  type: ToastType
  onDismiss: (id: string) => void
}

const NeoToast = ({ id, message, type, onDismiss }: ToastProps) => {
  const bgColors = {
    info: "bg-neo-blue-400",
    success: "bg-neo-green-400",
    warning: "bg-neo-yellow-400",
    error: "bg-neo-red-400",
  }

  const icons = {
    info: <Info className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    error: <AlertOctagon className="h-5 w-5" />,
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "flex items-center gap-3 w-80 p-4 border-3 border-neo-black shadow-neo-lg",
        bgColors[type]
      )}
    >
      <div className="bg-neo-white border-2 border-neo-black p-1 rounded-none shadow-neo-sm">
        {icons[type]}
      </div>
      <p className="flex-1 font-black text-xs uppercase tracking-tight leading-none text-neo-black">
        {message}
      </p>
      <button 
        onClick={() => onDismiss(id)}
        className="border-2 border-neo-black bg-neo-white p-1 hover:bg-neo-black hover:text-neo-white transition-all active:translate-x-0.5 active:translate-y-0.5 shadow-neo-sm active:shadow-none"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  )
}

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const ToastDemo = () => {
  const [toasts, setToasts] = React.useState<{id: string, message: string, type: ToastType}[]>([])

  const addToast = (type: ToastType) => {
    const id = crypto.randomUUID()
    const messages = {
      info: "Update available for DaivUI.",
      success: "Component added to registry!",
      warning: "Check your Tailwind config.",
      error: "Failed to sync to database."
    }
    setToasts((prev) => [...prev, { id, message: messages[type], type }])
    
    // Auto-dismiss after 4 seconds
    setTimeout(() => removeToast(id), 4000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => addToast("success")} className="px-4 py-2 border-3 border-neo-black bg-neo-green-400 font-black shadow-neo hover:translate-y-[-2px] active:translate-y-[2px] transition-all uppercase text-xs">Success</button>
        <button onClick={() => addToast("error")} className="px-4 py-2 border-3 border-neo-black bg-neo-red-400 font-black shadow-neo hover:translate-y-[-2px] active:translate-y-[2px] transition-all uppercase text-xs">Error</button>
        <button onClick={() => addToast("info")} className="px-4 py-2 border-3 border-neo-black bg-neo-blue-400 font-black shadow-neo hover:translate-y-[-2px] active:translate-y-[2px] transition-all uppercase text-xs">Info</button>
        <button onClick={() => addToast("warning")} className="px-4 py-2 border-3 border-neo-black bg-neo-yellow-400 font-black shadow-neo hover:translate-y-[-2px] active:translate-y-[2px] transition-all uppercase text-xs">Warning</button>
      </div>

      {/* Real-time Toast Container */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-100 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto">
              <NeoToast {...toast} onDismiss={removeToast} />
            </div>
          ))}
        </AnimatePresence>
      </div>
      <p className="text-[10px] font-bold text-neo-black/40 uppercase italic">↑ Click buttons to trigger animated toasts</p>
    </div>
  )
}

export const toastDocData = {
  title: "Toast",
  description: "Temporary notifications that provide real-time feedback. Built with Framer Motion for physical, spring-based animations.",
  status: "Experimental",
  example: <ToastDemo />,
  code: `"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Info, CheckCircle, AlertTriangle } from "lucide-react"

export const NeoToast = ({ id, message, type, onDismiss }: ToastProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="flex items-center gap-3 w-80 p-4 border-3 border-neo-black shadow-neo-lg ..."
    >
      {/* Icon, Message, and Dismiss Button */}
    </motion.div>
  )
}

// Ensure you wrap your toast list in <AnimatePresence mode="popLayout">
// for real-time exit animations.`
};