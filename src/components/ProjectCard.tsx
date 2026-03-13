"use client"

import Image from "next/image"
import { Clock, Star, MoreHorizontal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  lastAccessed: string
  imageUrl: string
  starred?: boolean
}

export function ProjectCard({ title, lastAccessed, imageUrl, starred }: ProjectCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer overflow-hidden rounded-2xl">
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur text-white border-none">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm truncate pr-2">{title}</h3>
          {starred && <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />}
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span className="text-[10px] font-medium uppercase tracking-wider">{lastAccessed}</span>
        </div>
      </CardContent>
    </Card>
  )
}
