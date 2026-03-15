"use client"

import { X } from "lucide-react"

interface TemplateModalProps {
  open: boolean
  onClose: () => void
  onSelect: (template: string) => void
}

const templates = ["Landing Page", "SaaS Dashboard", "Portfolio Website", "Mobile App"]

export function TemplateModal({ open, onClose, onSelect }: TemplateModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-[380px] rounded-xl border border-white/10 bg-[#111] p-5 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-300">Choose a template</h3>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close template modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-2">
          {templates.map((template) => (
            <button
              key={template}
              onClick={() => onSelect(template)}
              className="w-full rounded-lg bg-[#1a1a1a] px-4 py-3 text-left text-sm text-gray-200 transition-colors hover:bg-[#222]"
            >
              {template}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
