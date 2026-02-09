"use client";

import React from "react";
import Link from "next/link";
import { componentRegistry } from "@/config/registry";
import { NeoSectionTitle } from "@/components/ui/neo-section-title";

export default function ComponentsGalleryPage() {
  // Define static border and hover background colors
  const colorVariants = [
    { border: "border-neo-yellow-400", hoverBg: "hover:bg-neo-yellow-400" },
    { border: "border-neo-red-400", hoverBg: "hover:bg-neo-red-400" },
    { border: "border-neo-blue-400", hoverBg: "hover:bg-neo-blue-400" },
    { border: "border-neo-green-400", hoverBg: "hover:bg-neo-green-400" },
  ];

  const components = Object.entries(componentRegistry)
    .map(([slug, data]) => ({
      slug,
      ...data,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="mx-auto max-w-full px-4 -py-4 md:px-6">
      {/* Header Section */}
      <div className="mb-12 border-b-4 border-neo-black pb-8">
        <NeoSectionTitle
          eyebrow="Registry"
          title="Component Library"
          subtitle="A refined collection of high-contrast primitives. Clean, bold, and ready for production."
        />
      </div>

      {/* Grid of Component Tiles */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {components.map((item, index) => {
          const theme = colorVariants[index % colorVariants.length];
          
          return (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className={`
                group flex items-center justify-between 
                border-2 border-neo-black bg-neo-white p-4 
                transition-colors duration-200 
                ${theme.hoverBg}
              `}
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-widest text-neo-black/50 group-hover:text-neo-black/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-black uppercase tracking-tight text-neo-black">
                  {item.title}
                </span>
              </div>

              {/* Minimalist Status */}
              <div className="flex items-center">
                {item.status !== "Stable" ? (
                  <span
  className="text-[10px] font-black uppercase border-2 border-neo-black px-1 bg-neo-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5"
>
  {item.status}
</span>
                ) : (
                  <div className="h-2 w-2 bg-neo-black rotate-45 group-hover:bg-neo-white transition-colors" />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {components.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center border-2 border-neo-black py-20 bg-neo-white shadow-neo">
          <p className="text-xl font-black uppercase italic text-neo-black">
            No components found.
          </p>
        </div>
      )}
    </div>
  );
}