"use client"

import * as React from "react";

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

type NeoButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent";

const variantClasses: Record<NeoButtonVariant, string> = {
  primary: "bg-neo-red-400 text-neo-black",
  secondary: "bg-neo-blue-400 text-neo-black",
  tertiary: "bg-neo-yellow-400 text-neo-black",
  accent: "bg-neo-green-400 text-neo-black", // Changed to black for contrast consistency
};

export function NeoButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: NeoButtonVariant;
}) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-wide",
        "rounded-(--radius-6) border-3 border-neo-black shadow-neo transition-all duration-150",
        "hover:-translate-y-0.5 hover:shadow-neo-lg",
        "active:translate-x-(--translate-box-sm) active:translate-y-(--translate-box-sm) active:shadow-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-black focus-visible:ring-offset-2 focus-visible:ring-offset-neo-white",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const ButtonDemo = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center">
      <NeoButton variant="primary">Primary</NeoButton>
      <NeoButton variant="secondary">Secondary</NeoButton>
      <NeoButton variant="tertiary">Tertiary</NeoButton>
      <NeoButton variant="accent">Accent</NeoButton>
    </div>
  );
};

export const buttonDocData = {
  title: "Button",
  description: "A bold, tactile button designed for high interaction. Supports multiple Neobrutalist variants with heavy shadows.",
  status: "Stable",
  example: <ButtonDemo />,
  code: `"use client"

import * as React from "react";

type NeoButtonVariant = "primary" | "secondary" | "tertiary" | "accent";

const variantClasses: Record<NeoButtonVariant, string> = {
  primary: "bg-neo-red-400 text-neo-black",
  secondary: "bg-neo-blue-400 text-neo-black",
  tertiary: "bg-neo-yellow-400 text-neo-black",
  accent: "bg-neo-green-400 text-neo-black",
};

export function NeoButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: NeoButtonVariant;
}) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold uppercase tracking-wide",
        "rounded-(--radius-6) border-3 border-neo-black shadow-neo transition-all duration-150",
        "hover:-translate-y-0.5 hover:shadow-neo-lg",
        "active:translate-x-(--translate-box-sm) active:translate-y-(--translate-box-sm) active:shadow-none",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}`
};