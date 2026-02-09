"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Copy,
  Layers,
  Palette,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import TokensSection from "./TokenSection";

import { NeoBadge } from "@/components/ui/neo-badge";
import { NeoButton } from "@/components/ui/neo-button";
import { NeoCard } from "@/components/ui/neo-card";
import { NeoSectionTitle } from "@/components/ui/neo-section-title";
import { NeoStat } from "@/components/ui/neo-stat";

const featureRows = [
  {
    title: "Brutal, but usable",
    description:
      "High contrast, oversized typography, and sharp borders that still hit AA-friendly contrast in the core palette.",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-neo-yellow-400",
  },
  {
    title: "Shadcn-ready architecture",
    description:
      "Drop-in components built for Next.js and Tailwind. Same UI folder structure, but Neo energy.",
    icon: <Layers className="h-6 w-6" />,
    color: "bg-neo-blue-400",
  },
  {
    title: "Fast feedback loops",
    description:
      "Tokens + primitives + preview sections. You can design, build, and ship in one pass.",
    icon: <Palette className="h-6 w-6" />,
    color: "bg-neo-green-400",
  },
];

const components = [
  { name: "Button", status: "Stable", tone: "bg-neo-yellow-400" },
  { name: "Card", status: "Stable", tone: "bg-neo-blue-400" },
  { name: "Badge", status: "Stable", tone: "bg-neo-red-400" },
  { name: "Toast", status: "Beta", tone: "bg-neo-green-400" },
  { name: "Tabs", status: "Beta", tone: "bg-neo-yellow-400" },
  { name: "Dialog", status: "In progress", tone: "bg-neo-blue-400" },
];

export default function NeoLandingPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npx create-next-app@latest neo-app");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-neo-white text-neo-black">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 neo-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10 neo-noise" />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-18">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <NeoBadge color="red">Public Beta v1.0.0</NeoBadge>
              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
                Neo is brutal,
                <span className="block text-neo-white">
                  <span className="inline-block border-3 border-neo-black bg-neo-black px-4 py-2 shadow-neo">
                    but clean.
                  </span>
                </span>
              </h1>
              <p className="max-w-xl border-l-4 border-neo-black pl-5 text-lg font-medium md:text-xl">
                A high-contrast design system built for teams who want
                shadcn-style flexibility with a bold, neobrutalist voice.
              </p>
              <div className="flex flex-wrap gap-4">
                <NeoButton variant="primary" className="text-base">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </NeoButton>
                <Link href="/components" scroll={false}>
                  <NeoButton variant="secondary" className="text-base">
                    View Components
                  </NeoButton>
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <NeoStat label="Components" value="32+" />
                <NeoStat label="Tokens" value="84" />
                <NeoStat label="Themes" value="4" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-8 h-24 w-24 rounded-full border-3 border-neo-black bg-neo-blue-400 shadow-neo" />
              <div className="absolute -bottom-10 -right-8 h-20 w-20 rounded-full border-3 border-neo-black bg-neo-green-400 shadow-neo" />

              <NeoCard className="relative space-y-6 p-7">
                <div className="flex items-center justify-between border-b-3 border-neo-black pb-4">
                  <div className="flex gap-2">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-neo-black bg-neo-red-400" />
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-neo-black bg-neo-yellow-400" />
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-neo-black bg-neo-blue-400" />
                  </div>
                  <span className="text-xs font-bold uppercase">
                    neo-hero.tsx
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full border-3 border-neo-black bg-neo-yellow-400 shadow-neo" />
                    <div>
                      <div className="text-lg font-black">Studio Brut</div>
                      <div className="text-xs font-bold uppercase text-neo-black/70">
                        design lead
                      </div>
                    </div>
                  </div>
                  <div className="rounded-(--radius-6) border-3 border-neo-black bg-neo-white p-4 shadow-neo-sm">
                    <p className="text-sm font-bold uppercase">
                      “Neo makes my UI look like a zine cover.”
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <NeoBadge color="yellow">Design Tokens</NeoBadge>
                    <NeoBadge color="blue">Components</NeoBadge>
                    <NeoBadge color="green">Docs</NeoBadge>
                  </div>
                </div>
              </NeoCard>

              <NeoCard className="mt-6 rotate-1 bg-neo-yellow-400 p-6">
                <div className="flex items-center gap-3 text-sm font-bold uppercase">
                  <Sparkles className="h-4 w-4" />
                  Signature neo shadow
                </div>
                <div className="mt-4 grid gap-3">
                  <div className="h-3 w-3/4 border-2 border-neo-black bg-neo-white" />
                  <div className="h-3 w-2/3 border-2 border-neo-black bg-neo-white" />
                  <div className="h-3 w-1/2 border-2 border-neo-black bg-neo-white" />
                </div>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section
          id="features"
          className="border-y-3 border-neo-black bg-neo-white py-20"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <NeoSectionTitle
              eyebrow="Why Neo"
              title="High contrast. Hard edges. Human readable."
              subtitle="Neo keeps the clarity of shadcn/ui while pushing a loud, playful
              visual identity that still respects accessible contrast."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featureRows.map((feature) => (
                <NeoCard key={feature.title} className="space-y-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center border-3 border-neo-black ${feature.color} shadow-neo`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase">{feature.title}</h3>
                  <p className="text-sm font-medium">{feature.description}</p>
                </NeoCard>
              ))}
            </div>
          </div>
        </section>

        {/* Tokens */}
       <TokensSection />

        {/* Component preview */}
        <section id="components" className="bg-neo-red-400 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <NeoSectionTitle
              eyebrow="Components"
              title="A bold component library ready to ship."
              subtitle="Buttons, cards, badges, tabs, modals, and more. Everything follows the
              same loud-but-clean language."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <NeoCard className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black uppercase">Buttons</h3>
                  <NeoBadge color="black">Stable</NeoBadge>
                </div>
                <div className="flex flex-wrap gap-4">
                  <NeoButton variant="primary">Primary</NeoButton>
                  <NeoButton variant="secondary">Secondary</NeoButton>
                  <NeoButton variant="tertiary">Tertiary</NeoButton>
                  <NeoButton variant="accent">Accent</NeoButton>
                </div>
                <div className="rounded-(--radius-6) border-3 border-neo-black bg-neo-white p-4 shadow-neo-sm">
                  <div className="flex items-center gap-3 text-sm font-bold uppercase">
                    <Sparkles className="h-4 w-4" />
                    Utility-first, but not bland.
                  </div>
                </div>
              </NeoCard>
              <div className="grid gap-4 sm:grid-cols-2">
                {components.map((item) => (
                  <NeoCard key={item.name} className="space-y-3">
                    <div
                      className={`inline-flex items-center gap-2 border-3 border-neo-black ${item.tone} px-3 py-2 text-xs font-bold uppercase shadow-neo`}
                    >
                      {item.status}
                    </div>
                    <div className="text-2xl font-black">{item.name}</div>
                    <p className="text-sm font-medium">
                      Ready for brutalist layouts, dashboards, and marketing pages.
                    </p>
                  </NeoCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Docs */}
        <section id="docs" className="py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-8">
            <NeoSectionTitle
              eyebrow="Docs"
              title="Install in minutes."
              subtitle="Neo ships the same way shadcn/ui does: copy the component, tweak tokens,
              and keep moving."
            />
            <NeoCard className="mt-10 overflow-hidden">
              <div className="flex items-center justify-between border-b-3 border-neo-black bg-neo-black px-6 py-3 text-neo-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase">
                  <Terminal className="h-4 w-4" />
                  Terminal
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full border-2 border-neo-white bg-neo-red-400" />
                  <span className="h-3 w-3 rounded-full border-2 border-neo-white bg-neo-yellow-400" />
                  <span className="h-3 w-3 rounded-full border-2 border-neo-white bg-neo-green-400" />
                </div>
              </div>
              <div className="space-y-6 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-(--radius-6) border-3 border-neo-black bg-neo-white px-4 py-3 font-mono text-sm shadow-neo-sm">
                  <span>npx create-next-app@latest neo-app</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 border-2 border-neo-black bg-neo-yellow-400 px-3 py-1 text-xs font-bold uppercase shadow-neo-sm"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <NeoCard className="bg-neo-yellow-400">
                    <div className="text-xs font-bold uppercase">Step 1</div>
                    <div className="text-lg font-black">Install tokens</div>
                    <p className="text-sm font-medium">
                      Drop `globals.css` tokens into your app. Use Neo colors only.
                    </p>
                  </NeoCard>
                  <NeoCard className="bg-neo-blue-400 text-neo-white">
                    <div className="text-xs font-bold uppercase">Step 2</div>
                    <div className="text-lg font-black">Copy components</div>
                    <p className="text-sm font-medium">
                      Use the same `components/ui` workflow as shadcn.
                    </p>
                  </NeoCard>
                </div>
              </div>
            </NeoCard>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t-3 border-neo-black bg-neo-black py-16 text-neo-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:px-8">
            <div>
              <h3 className="text-3xl font-black uppercase">Ready to go loud?</h3>
              <p className="mt-2 max-w-xl text-sm font-medium text-neo-white/80">
                Neo gives you a brutalist layer without killing clarity. Ship bold,
                fast, and consistently.
              </p>
            </div>
            <div className="flex gap-4">
              <NeoButton variant="primary">Open Docs</NeoButton>
              <NeoButton variant="secondary" className="bg-neo-white">
                See Components
              </NeoButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-3 border-neo-black bg-neo-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
          <div className="space-y-3">
            <div className="text-2xl font-black">NEO</div>
            <p className="text-sm font-medium">
              Neo is a neobrutalist design system built on the shadcn/ui
              architecture.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase">Links</div>
            <ul className="mt-3 space-y-2 text-sm font-medium">
              <li>
                <a href="#" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Figma Kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase">Notes</div>
            <p className="mt-3 text-sm font-medium">
              © 2026 Neo Design System. Copy it, remix it, ship it.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
