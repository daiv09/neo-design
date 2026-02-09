"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ==========================================
 * 1. COMPONENT SOURCE CODE
 * ==========================================
 */

const NeoAccordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
NeoAccordion.displayName = "NeoAccordion"

const NeoAccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-3 border-neo-black bg-neo-white shadow-neo transition-all",
      className
    )}
    {...props}
  />
))
NeoAccordionItem.displayName = "NeoAccordionItem"

const NeoAccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isOpen: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex w-full flex-1 items-center justify-between p-4 font-neo-sans font-bold transition-all hover:bg-neo-yellow-400 [&[data-state=open]>svg]:rotate-180",
      className
    )}
    data-state={isOpen ? "open" : "closed"}
    {...props}
  >
    {children}
    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 border-2 border-neo-black rounded-full" />
  </button>
))
NeoAccordionTrigger.displayName = "NeoAccordionTrigger"

const NeoAccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 border-t-3 border-neo-black p-4" : "max-h-0 border-none"
    )}
    {...props}
  >
    <div className={cn("font-neo-mono", className)}>{children}</div>
  </div>
))
NeoAccordionContent.displayName = "NeoAccordionContent"

export { NeoAccordion, NeoAccordionItem, NeoAccordionTrigger, NeoAccordionContent }


/**
 * ==========================================
 * 2. DOCUMENTATION DATA (Colocated)
 * ==========================================
 */

const AccordionDemo = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  
  const faqItems = [
    { 
      question: "Is it Neobrutalist?", 
      answer: "Yes. It uses the signature border-3, shadow-neo, and high-contrast color palettes defined in your design system." 
    },
    { 
      question: "Is it production ready?", 
      answer: "Absolutely. It uses React forwardRefs and standard ARIA attributes for maximum compatibility and accessibility." 
    }
  ];

  return (
    <NeoAccordion className="w-full max-w-md">
      {faqItems.map((item, i) => (
        <NeoAccordionItem key={i}>
          <NeoAccordionTrigger 
            isOpen={openIndex === i} 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.question}
          </NeoAccordionTrigger>
          <NeoAccordionContent isOpen={openIndex === i}>
            {item.answer}
          </NeoAccordionContent>
        </NeoAccordionItem>
      ))}
    </NeoAccordion>
  );
};

export const accordionDocData = {
  title: "Accordion",
  description: "A high-contrast stacked list of items that reveal content sections when toggled. Built for heavy visual impact.",
  status: "Stable",
  example: <AccordionDemo />,
  code: `"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const NeoAccordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
NeoAccordion.displayName = "NeoAccordion"

const NeoAccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-3 border-neo-black bg-neo-white shadow-neo transition-all",
      className
    )}
    {...props}
  />
))
NeoAccordionItem.displayName = "NeoAccordionItem"

const NeoAccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isOpen: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex w-full flex-1 items-center justify-between p-4 font-neo-sans font-bold transition-all hover:bg-neo-yellow-400 [&[data-state=open]>svg]:rotate-180",
      className
    )}
    data-state={isOpen ? "open" : "closed"}
    {...props}
  >
    {children}
    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 border-2 border-neo-black rounded-full" />
  </button>
))
NeoAccordionTrigger.displayName = "NeoAccordionTrigger"

const NeoAccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isOpen: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 border-t-3 border-neo-black p-4" : "max-h-0 border-none"
    )}
    {...props}
  >
    <div className={cn("font-neo-mono", className)}>{children}</div>
  </div>
))
NeoAccordionContent.displayName = "NeoAccordionContent"

export { NeoAccordion, NeoAccordionItem, NeoAccordionTrigger, NeoAccordionContent }`
};