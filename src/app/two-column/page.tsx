"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowUp,
  Code,
  ExternalLink,
  Eye,
  Lock,
  Monitor,
  Plus,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  SplitSquareHorizontal,
  Upload,
  X,
  ZoomIn,
} from "lucide-react";

const headerIconBtn =
  "flex h-8 w-8 items-center justify-center rounded-md text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200 ease-out";

export default function TwoColumnLayoutPage() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"preview" | "code" | "split">("preview");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [activePlan, setActivePlan] = useState<string | null>(searchParams.get("plan"));

  return (
    <div className="min-h-screen bg-[#0f1017] p-2 text-white">
      <div className="mx-auto flex h-[calc(100vh-1rem)] w-full max-w-[2048px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14151f] shadow-2xl shadow-black/40">
        <header className="flex h-12 items-center justify-between border-b border-white/10 bg-[#14161b]/95 px-4 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1b1e25]/90 px-3 py-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            <h1 className="text-sm font-semibold tracking-wide text-slate-100">Trusted Builder Workspace</h1>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#1b1e25] p-1">
            <button
              onClick={() => setMode("preview")}
              className={`rounded px-3 py-1 text-sm transition-colors ${
                mode === "preview"
                  ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Eye size={14} className="mr-1 inline" /> Preview
            </button>
            <button
              onClick={() => setMode("code")}
              className={`rounded px-3 py-1 text-sm transition-colors ${
                mode === "code"
                  ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Code size={14} className="mr-1 inline" /> Code
            </button>
            <button
              onClick={() => setMode("split")}
              className={`rounded px-3 py-1 text-sm transition-colors ${
                mode === "split"
                  ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <SplitSquareHorizontal size={14} className="mr-1 inline" /> Split
            </button>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1b1e25]/90 p-1">
            <button className="rounded-md px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white">Share</button>
            <button className="rounded-md bg-rose-600 px-3 py-1.5 text-sm text-white shadow-[0_6px_20px_rgba(244,63,94,0.35)] transition-colors hover:bg-rose-500">
              <Upload size={14} className="mr-1 inline" /> Publish
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <aside className="relative flex w-[31%] min-w-[380px] flex-col border-r border-[#2b2c2f] bg-[#202123]">
            <div className="h-12 border-b border-white/10 px-5" />

            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6 pb-36 text-gray-300">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-100">Chat Workspace</h2>
                <p className="text-sm text-gray-400">Describe your app idea and AI will generate trusted production-ready UI.</p>

                {activePlan && (
                  <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-200">
                    <span>Plan: {activePlan}</span>
                    <button
                      onClick={() => setActivePlan(null)}
                      className="grid h-4 w-4 place-items-center rounded-full text-rose-100 hover:bg-white/10"
                      aria-label="Dismiss selected plan"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-3 text-sm text-gray-400">
                <p>Try prompts:</p>
                <div className="flex flex-wrap gap-2">
                  <button className="rounded bg-white/10 px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-white/20">SaaS Dashboard</button>
                  <button className="rounded bg-white/10 px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-white/20">Landing Page</button>
                  <button className="rounded bg-white/10 px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-white/20">Analytics Panel</button>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-5 p-4">
              <div className="pointer-events-auto mx-auto flex max-w-[560px] items-center gap-3 rounded-full border border-white/10 bg-[#13151a] px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                <button className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-gray-100 transition-colors hover:bg-white/20" aria-label="Add prompt">
                  <Plus size={15} />
                </button>
                <input
                  placeholder="Ask AI to build a trusted SaaS layout..."
                  className="flex-1 bg-transparent text-sm text-gray-200 outline-none"
                />
                <button className="grid h-8 w-8 place-items-center rounded-full bg-rose-600 text-white transition-colors hover:bg-rose-500" aria-label="Send prompt">
                  <ArrowUp size={14} />
                </button>
              </div>
            </div>
          </aside>

          <section className="relative flex min-w-0 flex-1 flex-col bg-[#f2f2f4]">
            <div className="flex items-center border-b border-white/10 bg-[#14161b]/95 px-3 py-2 backdrop-blur-xl">
              <div className="flex w-[112px] items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="flex flex-1 justify-center px-3">
                <div className="flex w-full max-w-[350px] items-center gap-2 rounded-md border border-white/10 bg-[#10131a] px-3 py-1 text-sm text-[#e2e8f0] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <Lock size={12} className="text-emerald-400" />
                  <span className="truncate">preview.calmo.app/workspace</span>
                </div>
              </div>

              <div className="ml-auto flex w-[248px] shrink-0 items-center justify-end gap-1 rounded-md border border-white/10 bg-[#191c24] px-1 py-1">
                <button
                  onClick={() => setPreviewDevice("desktop")}
                  className={headerIconBtn}
                  aria-label="Desktop preview"
                >
                  <Monitor size={14} />
                </button>
                <button
                  onClick={() => setPreviewDevice("mobile")}
                  className={headerIconBtn}
                  aria-label="Mobile preview"
                >
                  <Smartphone size={14} />
                </button>
                <span className="mx-1 h-5 w-px bg-white/10" />
                <button className={headerIconBtn} aria-label="Reload preview">
                  <RefreshCw size={14} />
                </button>
                <button className={headerIconBtn} aria-label="Open preview in new tab">
                  <ExternalLink size={14} />
                </button>
                <button className={headerIconBtn} aria-label="Zoom preview">
                  <ZoomIn size={14} />
                </button>
              </div>
            </div>

            <div className="m-5 flex-1 overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl">
              <div className="flex h-full items-center justify-center text-center">
                <div className="max-w-md">
                  <h2 className="text-xl font-semibold text-gray-700">Your app preview will appear here</h2>
                  <p className="mt-2 text-sm text-gray-500">Ask AI to build something to see the live preview.</p>

                  <div className="mt-6 flex justify-center gap-2">
                    <button className="rounded-md bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300">Landing Page</button>
                    <button className="rounded-md bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300">Dashboard</button>
                    <button className="rounded-md bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300">Portfolio</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
