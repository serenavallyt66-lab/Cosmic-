"use client"

import * as React from "react"
import { 
  Plus, 
  Keyboard, 
  Mic, 
  ArrowUp, 
  Paperclip,
  Loader2,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { generateCreativeContentFromPrompt } from "@/ai/flows/generate-creative-content-from-prompt"
import { cn } from "@/lib/utils"

export function AIPrompt() {
  const [prompt, setPrompt] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [result, setResult] = React.useState<string | null>(null)

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

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="relative group transition-all duration-300">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000 group-focus-within:duration-200"></div>
        <div className="relative ai-input-bg rounded-2xl p-2 shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-1">
            <Plus className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-white transition-colors" />
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything or generate a project..."
              className="flex-1 bg-transparent border-none focus-visible:ring-0 text-lg py-3 resize-none min-h-[60px] max-h-[300px] overflow-y-auto overflow-x-hidden whitespace-pre-wrap [overflow-wrap:anywhere] overscroll-y-contain touch-pan-y [-webkit-overflow-scrolling:touch]"
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t border-white/5">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg">
                <Keyboard className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg">
                <Mic className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              onClick={() => handleSubmit()}
              disabled={!prompt.trim() || isLoading}
              className={cn(
                "rounded-xl h-10 w-10 p-0 flex items-center justify-center transition-all duration-300",
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
