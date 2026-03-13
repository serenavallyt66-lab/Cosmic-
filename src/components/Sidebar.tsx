"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  Search, 
  BookOpen, 
  LayoutGrid, 
  Star, 
  User, 
  Users, 
  PlusCircle, 
  Settings,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Search', icon: Search, href: '/search' },
  { name: 'Resources', icon: BookOpen, href: '/resources' },
]

const projectCategories = [
  { name: 'All projects', icon: LayoutGrid, count: 12 },
  { name: 'Starred', icon: Star, count: 3 },
  { name: 'Created by me', icon: User, count: 8 },
  { name: 'Shared with me', icon: Users, count: 4 },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 sidebar-bg flex flex-col h-screen border-r border-white/5 sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="font-headline font-bold text-lg tracking-tight">Lovable</span>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-6 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group hover:bg-white/5",
                pathname === item.href ? "bg-white/5 text-primary" : "text-muted-foreground"
              )}>
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-white"
                )} />
                <span className="text-sm font-medium">{item.name}</span>
                {item.name === 'Search' && (
                  <span className="ml-auto text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-muted-foreground border border-white/10">⌘K</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-4">
          <div className="px-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
            Workspace
            <PlusCircle className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          </div>
          <div className="space-y-1">
            {projectCategories.map((cat) => (
              <button key={cat.name} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground transition-all duration-200 group hover:bg-white/5 hover:text-white">
                <cat.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{cat.name}</span>
                <span className="ml-auto text-xs text-muted-foreground/50">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-white/5 mt-auto">
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:bg-white/5 hover:text-white rounded-xl">
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </Button>
      </div>
    </aside>
  )
}
