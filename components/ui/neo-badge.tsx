"use client"

import * as React from "react";

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

type NeoBadgeColor = "red" | "blue" | "green" | "yellow" | "black";

const colorClasses: Record<NeoBadgeColor, string> = {
  red: "bg-neo-red-400 text-neo-black", // Adjusted to black for Neobrutalist contrast
  blue: "bg-neo-blue-400 text-neo-black",
  green: "bg-neo-green-400 text-neo-black",
  yellow: "bg-neo-yellow-400 text-neo-black",
  black: "bg-neo-black text-neo-white",
};

export function NeoBadge({
  children,
  color = "yellow",
  className = "",
}: {
  children: React.ReactNode;
  color?: NeoBadgeColor;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border-2 border-neo-black px-3 py-1 text-xs font-bold uppercase tracking-widest",
        "shadow-neo-sm",
        colorClasses[color],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const BadgeDemo = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <NeoBadge color="red">Urgent</NeoBadge>
      <NeoBadge color="blue">New</NeoBadge>
      <NeoBadge color="green">Stable</NeoBadge>
      <NeoBadge color="yellow">Warning</NeoBadge>
      <NeoBadge color="black">Archived</NeoBadge>
    </div>
  );
};

export const badgeDocData = {
  title: "Badge",
  description: "Small, high-contrast labels used to categorize content or display status counts.",
  status: "Stable",
  example: <BadgeDemo />,
  code: `"use client"

import * as React from "react";

type NeoBadgeColor = "red" | "blue" | "green" | "yellow" | "black";

const colorClasses: Record<NeoBadgeColor, string> = {
  red: "bg-neo-red-400 text-neo-black",
  blue: "bg-neo-blue-400 text-neo-black",
  green: "bg-neo-green-400 text-neo-black",
  yellow: "bg-neo-yellow-400 text-neo-black",
  black: "bg-neo-black text-neo-white",
};

export function NeoBadge({
  children,
  color = "yellow",
  className = "",
}: {
  children: React.ReactNode;
  color?: NeoBadgeColor;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border-2 border-neo-black px-3 py-1 text-xs font-bold uppercase",
        "shadow-neo-sm",
        colorClasses[color],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}`
};