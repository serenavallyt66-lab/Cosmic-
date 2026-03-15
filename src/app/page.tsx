import { Sidebar } from "@/components/Sidebar"
import { ChatInput } from "@/components/ChatInput"
import { ProjectCard } from "@/components/ProjectCard"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Home() {
  const recentProjects = [
    { title: "AI Content Strategy", lastAccessed: "2 hours ago", imageUrl: PlaceHolderImages[0].imageUrl, starred: true },
    { title: "Lovable Web Prototype", lastAccessed: "Yesterday", imageUrl: PlaceHolderImages[1].imageUrl },
    { title: "Poetry Anthology Draft", lastAccessed: "3 days ago", imageUrl: PlaceHolderImages[2].imageUrl },
    { title: "Marketing Slogans", lastAccessed: "1 week ago", imageUrl: "https://picsum.photos/seed/mkt1/400/300" },
  ]

  return (
    <div className="flex min-h-screen bg-[#0f0f10] text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14 space-y-14">
          <section className="space-y-6 pt-8">
            <div className="text-center space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Build your next product with AI</h1>
              <p className="text-sm md:text-base text-gray-400">
                Start from a prompt, choose a template, and ship faster with a modern builder workflow.
              </p>
            </div>

            <ChatInput />
          </section>

          <section className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Recent projects</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
        </div>
      </main>
    </div>
  )
}
