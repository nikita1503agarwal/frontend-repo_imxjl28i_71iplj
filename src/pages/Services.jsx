import Navbar from '../components/Navbar'

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-24 sm:pt-28 lg:pt-32">
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Our Services</h1>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl">
              We bridge strategic product thinking with cutting-edge agentic development to help enterprise teams ship faster, safer, and smarter.
            </p>
          </div>
        </section>

        <section className="py-6 border-t">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900">Product Management Services</h2>
              <p className="mt-3 text-slate-700">Ensure you build the RIGHT thing with expert product strategy and execution planning.</p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
                <li>Product Strategy & Planning</li>
                <li>Product Roadmaps</li>
                <li>User Stories & Requirements</li>
                <li>End-to-End Workflows</li>
                <li>Product Planning</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900">Agentic Development Services</h2>
              <p className="mt-3 text-slate-700">Build it FAST and RIGHT with modern AI-powered development and automation.</p>
              <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
                <li>Greenfield Projects (scalable, best practices from day 1)</li>
                <li>Brownfield Codebase Transformation (10-90x faster feature implementation)</li>
                <li>Full CI/CD Pipeline Implementation</li>
                <li>Advanced Agentic Programming Training</li>
                <li>Claude Code Mastery & Coaching</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">Key Capabilities: Multi-Agent System Architecture | Knowledge Graphs & RAG | Hardware Abstraction Layers | Automated CI/CD Pipelines | Platform-Specific Code Generation</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 border-t">© {new Date().getFullYear()} Opus Works</footer>
    </div>
  )
}
