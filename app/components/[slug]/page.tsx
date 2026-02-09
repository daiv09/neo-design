"use client";

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { Copy, Check, Terminal, Package, ChevronRight } from 'lucide-react';
import { componentRegistry } from '@/config/registry';
import { NeoCard } from '@/components/ui/neo-card';
import { NeoBadge } from '@/components/ui/neo-badge';
import {DashboardTableOfContents, TabButton} from "@/components/RHS-Sidebar";

export default function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const { slug } = use(params);
  const component = componentRegistry[slug];

  if (!component) return notFound();

  const handleCopy = () => {
    if (component.code) {
      navigator.clipboard.writeText(component.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tocItems = [
    { title: "Installation", id: "installation" },
    { title: "Usage", id: "usage" },
    { title: "Properties", id: "props" },
  ];

  return (
    <main className="relative py-1 lg:gap-8 lg:-py-6 xl:grid xl:grid-cols-[1fr_250px] font-neo-sans">
      <div className="mx-auto w-full min-w-0">
        {/* Breadcrumbs */}
        <div className="mb-4 flex items-center space-x-1 text-sm font-bold text-neo-black/50 uppercase tracking-tighter">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
          <ChevronRight size={14} />
          <div className="font-black text-neo-black">Components</div>
        </div>

        {/* Header */}
        <div className="space-y-2 mb-10">
          <h1 className="scroll-m-20 text-5xl font-black tracking-tighter uppercase">
            {component.title}
          </h1>
          <p className="text-lg text-neo-black/70 font-bold border-l-4 border-neo-yellow-400 pl-4 italic">
            {component.description}
          </p>
          <div className="flex items-center gap-2 pt-2">
            <NeoBadge className="neo-green-400 shadow-neo-sm border-2 uppercase">{component.status}</NeoBadge>
            <span className="text-xs font-neo-mono font-bold opacity-40">v1.0.4</span>
          </div>
        </div>

        {/* --- SHADCN STYLE TABS SECTION --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-neo-black/10">
            <div className="flex">
              <TabButton active={activeTab === 'preview'} onClick={() => setActiveTab('preview')}>Preview</TabButton>
              <TabButton active={activeTab === 'code'} onClick={() => setActiveTab('code')}>Code</TabButton>
            </div>
          </div>

          <div className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2">
            {activeTab === 'preview' ? (
              <NeoCard className="border-4 shadow-neo-lg bg-neo-white min-h-100 flex items-center justify-center bg-neo-grid p-10 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-1">
                   <div className="h-2 w-2 bg-neo-red-400 border border-neo-black rounded-full" />
                   <div className="h-2 w-2 bg-neo-yellow-400 border border-neo-black rounded-full" />
                   <div className="h-2 w-2 bg-neo-green-400 border border-neo-black rounded-full" />
                </div>
                <div className="scale-110">{component.example}</div>
              </NeoCard>
            ) : (
              <div className="relative border-4 border-neo-black shadow-neo-lg overflow-hidden bg-neo-black">
                <button 
                  onClick={handleCopy}
                  className="absolute right-4 top-4 z-10 p-2 bg-neo-white border-2 border-neo-black shadow-neo-sm hover:bg-neo-yellow-400 active:translate-x-translate-box-sm transition-all"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <div className="p-6 overflow-auto max-h-125 custom-scrollbar">
                   <pre className="font-neo-mono text-sm text-neo-white/90">
                     <code>{component.code || 'No code available for this component.'}</code>
                   </pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- INSTALLATION SECTION --- */}
        <section id="installation" className="mt-16 space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tight border-b-4 border-neo-black inline-block mb-4">
            Installation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-3 border-neo-black px-6 -py-2 bg-neo-blue-400 shadow-neo">
              <h3 className="font-black text-xs uppercase mb-2 flex items-center gap-2"><Terminal size={14}/> CLI</h3>
              <div className="bg-neo-black text-neo-white p-3 font-neo-mono text-xs select-all">
                npx daiv-ui@latest add {slug}
              </div>
            </div>
            <div className="border-3 border-neo-black p-6 bg-neo-white shadow-neo">
              <h3 className="font-black text-xs uppercase mb-2 flex items-center gap-2"><Package size={14}/> Manual</h3>
              <p className="text-xs font-bold text-neo-black/60">Copy the source code above into your <code>components/ui</code> folder.</p>
            </div>
          </div>
        </section>

        {/* --- USAGE SECTION --- */}
        <section id="usage" className="mt-16 space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tight border-b-4 border-neo-black inline-block mb-4">
            Usage
          </h2>
          <div className="border-4 border-neo-black bg-neo-white p-6 shadow-neo font-neo-mono text-sm overflow-x-auto">
            <pre className="text-neo-black">
{`import { ${component.title} } from "@/components/ui/${slug}"

export default function Example() {
  return (
    <${component.title}>
       Click Me
    </${component.title}>
  )
}`}
            </pre>
          </div>
        </section>
      </div>

      {/* Right Sidebar - Table of Contents */}
      <DashboardTableOfContents items={tocItems} />
    </main>
  );
}