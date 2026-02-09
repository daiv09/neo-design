"use client"

import * as React from "react";

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

export function NeoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "bg-neo-white border-3 border-neo-black shadow-neo",
        "rounded-(--radius-6) p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const CardDemo = () => {
  return (
    <div className="flex justify-center p-4">
      <NeoCard className="max-w-sm">
        <h3 className="text-xl font-black uppercase mb-2">Project DataVerse</h3>
        <p className="text-sm font-bold text-neo-black/70 mb-4">
          A collaborative web platform for research teams to sync data in real-time.
        </p>
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-neo-red-400 border-2 border-neo-black shadow-neo-sm" />
          <div className="h-8 w-8 bg-neo-blue-400 border-2 border-neo-black shadow-neo-sm" />
          <div className="h-8 w-8 bg-neo-yellow-400 border-2 border-neo-black shadow-neo-sm" />
        </div>
      </NeoCard>
    </div>
  );
};

export const cardDocData = {
  title: "Card",
  description: "A foundational container used to group related content. Built with high-contrast borders and the signature heavy shadow.",
  status: "Stable",
  example: <CardDemo />,
  code: `"use client"

import * as React from "react";

export function NeoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "bg-neo-white border-3 border-neo-black shadow-neo",
        "rounded-(--radius-6) p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}`
};