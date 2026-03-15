"use client"

import * as React from "react"
import { ArrowUp, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { TemplateModal } from "@/components/TemplateModal"

export function ChatInput() {
  const router = useRouter()
  const [prompt, setPrompt] = React.useState("")
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!prompt.trim()) return
    router.push(`/two-column?prompt=${encodeURIComponent(prompt.trim())}`)
  }

  const handleTemplateSelect = (template: string) => {
    setIsModalOpen(false)
    router.push(`/two-column?plan=${encodeURIComponent(template)}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center mt-10">
        <div className="w-[720px] flex items-center gap-3 px-5 py-4 rounded-full bg-[#141414] border border-white/10 shadow-xl">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 transition-colors"
            aria-label="Open template picker"
          >
            <Plus className="w-5 h-5" />
          </button>

          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the app you want to build..."
            className="flex-1 bg-transparent outline-none text-gray-200 placeholder:text-gray-500 text-sm"
          />

          <button
            type="submit"
            className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-500 flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!prompt.trim()}
            aria-label="Send prompt"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </form>

      <TemplateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSelect={handleTemplateSelect} />
    </>
  )
}
