"use client"

import * as React from "react"
import { 
  Plus, 
  ArrowUp, 
  X,
  Loader2,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { generateCreativeContentFromPrompt } from "@/ai/flows/generate-creative-content-from-prompt"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const planOptions = [
  "Landing Page",
  "SaaS Dashboard",
  "Portfolio Website",
  "Mobile App",
]

export function AIPrompt() {
  const router = useRouter()
  const [prompt, setPrompt] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [result, setResult] = React.useState<string | null>(null)
  const [isPlanMenuOpen, setIsPlanMenuOpen] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null)

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!prompt.trim() || isLoading) return

    setIsLoading(true)
    setResult(null)
    try {
      const response = await generateCreativeContentFromPrompt({ prompt })
      setResult(response.content)
    } catch (error) {
      console.error("AI Generation failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan)
    setIsPlanMenuOpen(false)
    router.push(`/two-column?plan=${encodeURIComponent(plan)}`)
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="relative group transition-all duration-300">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-focus-within:opacity-50 transition duration-1000 group-focus-within:duration-200"></div>

        {isPlanMenuOpen && (
          <div className="absolute left-3 -top-44 z-20 w-64 rounded-2xl border border-white/10 bg-[#14161f]/95 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Choose a plan</p>
              <button
                onClick={() => setIsPlanMenuOpen(false)}
                className="grid h-6 w-6 place-items-center rounded-md text-white/60 hover:bg-white/10 hover:text-white"
                aria-label="Close plan options"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-1">
              {planOptions.map((plan) => (
                <button
                  key={plan}
                  onClick={() => handlePlanSelect(plan)}
                  className="w-full rounded-xl border border-transparent bg-white/5 px-3 py-2 text-left text-sm font-medium text-white/85 transition-all hover:border-primary/40 hover:bg-primary/20"
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="relative ai-input-bg rounded-full px-3 py-2 shadow-2xl">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlanMenuOpen((prev) => !prev)}
              className="h-9 w-9 rounded-full text-muted-foreground hover:bg-white/10 hover:text-white"
              aria-label="Open plan options"
            >
              <Plus className="w-5 h-5" />
            </Button>

            {selectedPlan && (
              <span className="hidden sm:inline-flex rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                {selectedPlan}
              </span>
            )}

            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything or generate a project..."
              className="flex-1 bg-transparent border-none focus-visible:ring-0 text-base md:text-lg py-2 resize-none min-h-[44px] max-h-[180px]"
            />

            <Button 
              onClick={() => handleSubmit()}
              disabled={!prompt.trim() || isLoading}
              className={cn(
                "rounded-full h-10 w-10 p-0 flex items-center justify-center transition-all duration-300",
                prompt.trim() ? "bg-primary hover:bg-accent text-white" : "bg-white/5 text-muted-foreground"
              )}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowUp className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {result && (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>Generation Successful</span>
          </div>
          <div className="prose prose-invert max-w-none text-white/90 whitespace-pre-wrap leading-relaxed">
            {result}
          </div>
          <div className="mt-6 flex gap-3">
            <Button size="sm" variant="secondary" className="rounded-lg">Star project</Button>
            <Button size="sm" variant="secondary" className="rounded-lg">Share draft</Button>
          </div>
        </div>
      )}
    </div>
  )
}
