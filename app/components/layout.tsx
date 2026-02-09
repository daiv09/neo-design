"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronRight
} from 'lucide-react';

import { sidebarLinks, componentCategories } from '@/config/registry';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-neo-white font-sans text-neo-black">

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-64 border-r-3 border-black bg-white transform transition-transform duration-200 pt-16 md:pt-0
          md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Top Level Main Links */}
            <div className="p-4 space-y-1 border-b-2 border-black/10">
              {sidebarLinks.map((link, idx) => (
                 <Link 
                    key={idx} 
                    href={link.href} 
                    className="flex items-center gap-3 px-3 py-2 rounded-md font-bold text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.icon} {link.label}
                 </Link>
              ))}
            </div>
            
            {/* Scrollable Component Categories */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
               {componentCategories.map((category, idx) => (
                  <div key={idx} className="mb-8">
                     <h3 className="font-black text-[10px] mb-3 uppercase tracking-[0.2em] text-gray-400 px-3">
                       {category.title}
                     </h3>
                     <div className="space-y-1">
                        {category.items.map((item, i) => {
                           const isActive = pathname === item.href;
                           return (
                              <Link 
                                 key={i} 
                                 href={item.href}
                                 onClick={() => setMobileMenuOpen(false)}
                                 className={`
                                   flex items-center justify-between px-3 py-2 text-sm font-bold rounded-none transition-all border-2
                                   ${isActive 
                                      ? 'bg-neo-yellow-400 text-black border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-1' 
                                      : 'text-gray-600 border-transparent hover:border-black hover:bg-gray-50 hover:text-black'
                                   }
                                 `}
                              >
                                 {item.name}
                                 {isActive && <ChevronRight size={14} />}
                              </Link>
                           )
                        })}
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden" 
            onClick={() => setMobileMenuOpen(false)} 
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-6 sm:p-10 md:p-16 min-w-0 bg-neo-grid-small">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}