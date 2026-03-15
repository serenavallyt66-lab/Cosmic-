import { Sidebar } from "@/components/Sidebar"

const projects = [
  { name: "Marketing Site Revamp", lastEdited: "Last edited 2 hours ago" },
  { name: "Mobile Onboarding Flow", lastEdited: "Last edited 5 hours ago" },
  { name: "Analytics Dashboard", lastEdited: "Last edited yesterday" },
  { name: "Internal Admin Tool", lastEdited: "Last edited 2 days ago" },
  { name: "Portfolio Redesign", lastEdited: "Last edited 4 days ago" },
  { name: "Customer Support Bot", lastEdited: "Last edited 1 week ago" },
  { name: "Billing Experience", lastEdited: "Last edited 9 days ago" },
  { name: "Landing Page A/B", lastEdited: "Last edited 2 weeks ago" },
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-[#0f0f10] text-white">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold mb-6">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-white/10 bg-[#111] p-5 hover:border-white/30 transition-colors cursor-pointer"
              >
                <h3 className="text-sm font-medium">{project.name}</h3>
                <p className="mt-2 text-xs text-gray-400">{project.lastEdited}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
