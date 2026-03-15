"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Folder, Home, Settings, Star, Users, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Projects", icon: Folder, href: "/projects" },
  { name: "Starred", icon: Star, href: "/starred" },
  { name: "Shared", icon: Users, href: "/shared" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[260px] h-screen sticky top-0 flex flex-col border-r border-white/10 bg-[#0b0b0c]">
      <div className="px-6 py-5 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/20">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">Calmora</span>
      </div>

      <nav className="px-3 py-2 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={18} className="shrink-0" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
