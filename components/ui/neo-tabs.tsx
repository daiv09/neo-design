"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

const TabsContext = React.createContext<{
  activeTab: string
  setActiveTab: (id: string) => void
} | null>(null)

const NeoTabs = ({
  defaultValue,
  className,
  children,
}: {
  defaultValue: string
  className?: string
  children: React.ReactNode
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

const NeoTabsList = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("inline-flex h-12 items-center border-3 border-neo-black bg-neo-white shadow-neo p-1 gap-1", className)}>
    {children}
  </div>
)

const NeoTabsTrigger = ({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) => {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("NeoTabsTrigger must be used within NeoTabs")

  const isActive = context.activeTab === value

  return (
    <button
      onClick={() => context.setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-black uppercase transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-2 border-transparent",
        isActive
          ? "bg-neo-black text-neo-white border-neo-black shadow-none"
          : "bg-transparent text-neo-black hover:bg-neo-yellow-400 hover:border-neo-black shadow-none",
        className
      )}
    >
      {children}
    </button>
  )
}

const NeoTabsContent = ({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) => {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("NeoTabsContent must be used within NeoTabs")

  if (context.activeTab !== value) return null

  return (
    <div
      className={cn(
        "mt-4 border-3 border-neo-black bg-neo-white p-6 shadow-neo animate-in fade-in-50 zoom-in-95 duration-200",
        className
      )}
    >
      {children}
    </div>
  )
}

export { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent }

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const TabsDemo = () => {
  return (
    <NeoTabs defaultValue="account" className="max-w-[400px]">
      <NeoTabsList className="w-full">
        <NeoTabsTrigger value="account" className="flex-1">Account</NeoTabsTrigger>
        <NeoTabsTrigger value="password" className="flex-1">Security</NeoTabsTrigger>
      </NeoTabsList>
      <NeoTabsContent value="account">
        <h3 className="text-lg font-black uppercase mb-1">Account Info</h3>
        <p className="text-sm font-bold text-neo-black/60 mb-4">Update your profile settings here.</p>
        <div className="h-10 w-full border-2 border-neo-black bg-neo-white shadow-neo-sm px-3 flex items-center text-xs font-mono">
          daiv@mit-wpu.edu
        </div>
      </NeoTabsContent>
      <NeoTabsContent value="password">
        <h3 className="text-lg font-black uppercase mb-1">Password</h3>
        <p className="text-sm font-bold text-neo-black/60 mb-4">Change your security credentials.</p>
        <div className="h-10 w-full border-2 border-neo-black bg-neo-black text-neo-white shadow-neo-sm px-3 flex items-center text-xs font-mono">
          ********
        </div>
      </NeoTabsContent>
    </NeoTabs>
  )
}

export const tabsDocData = {
  title: "Tabs",
  description: "A set of layered sections under a single navigation bar, allowing users to switch between different high-impact views.",
  status: "Stable",
  example: <TabsDemo />,
  code: `"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent }
// Component logic follows standard Context API pattern with Neo-styling...`
};