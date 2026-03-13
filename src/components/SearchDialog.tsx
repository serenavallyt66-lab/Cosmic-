"use client"

import * as React from "react"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function SearchDialog() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[550px] bg-secondary border-none shadow-2xl p-0">
        <DialogHeader className="px-4 pt-4">
          <DialogTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search Projects, Resources & Tasks
          </DialogTitle>
        </DialogHeader>
        <div className="p-4 pt-2">
          <Input 
            placeholder="Type a command or search..." 
            className="h-12 ai-input-bg border-none focus-visible:ring-primary rounded-xl text-lg"
            autoFocus
          />
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-xs text-muted-foreground font-semibold px-2 uppercase tracking-wider">Recently Searched</p>
            <div className="space-y-1">
              {['Project Lovable', 'Creative writing drafts', 'Resources/NextJS'].map((item) => (
                <button 
                  key={item}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
