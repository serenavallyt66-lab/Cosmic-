"use client"

import { Sidebar } from "@/components/Sidebar"
import { AIPrompt } from "@/components/AIPrompt"
import { ProjectCard } from "@/components/ProjectCard"
import { SearchDialog } from "@/components/SearchDialog"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Home() {
  const recentProjects = [
    { title: "AI Content Strategy", lastAccessed: "2 hours ago", imageUrl: PlaceHolderImages[0].imageUrl, starred: true },
    { title: "Lovable Web Prototype", lastAccessed: "Yesterday", imageUrl: PlaceHolderImages[1].imageUrl },
    { title: "Poetry Anthology Draft", lastAccessed: "3 days ago", imageUrl: PlaceHolderImages[2].imageUrl },
    { title: "Marketing Slogans", lastAccessed: "1 week ago", imageUrl: "https://picsum.photos/seed/mkt1/400/300" },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <SearchDialog />
      
      <main className="flex-1 main-gradient-bg overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
          
          {/* Welcome & AI Prompt Focal Point */}
          <section className="space-y-12 py-20">
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tight text-white drop-shadow-sm">
                Let's build something, Valt
              </h1>
              <p className="text-white/70 text-lg font-medium">
                Unleash your creativity with Lovable's reasoning and generation capabilities.
              </p>
            </div>
            
            <AIPrompt />
          </section>

          {/* Recent Activity */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-white">Recent Activity</h2>
              <button className="text-sm font-semibold text-white/60 hover:text-white transition-colors">View all projects</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentProjects.map((project, idx) => (
                <ProjectCard 
                  key={idx}
                  title={project.title}
                  lastAccessed={project.lastAccessed}
                  imageUrl={project.imageUrl}
                  starred={project.starred}
                />
              ))}
            </div>
          </section>

          {/* Featured Templates/Resources Placeholder */}
          <section className="bg-black/10 backdrop-blur-sm rounded-3xl p-8 border border-white/5 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">New Templates</h3>
                <p className="text-sm text-white/60 font-medium">Jumpstart your next project with these AI-enhanced drafts.</p>
              </div>
              <button className="bg-primary hover:bg-accent px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl shadow-primary/20">
                Explore Resources
              </button>
            </div>
          </section>

        </div>
        
        {/* Footer info */}
        <footer className="py-12 px-6 text-center text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
          Powered by Lovable Intelligence • Built with passion
        </footer>
      </main>
    </div>
  )
}
