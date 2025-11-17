import Navbar from '../components/Navbar'

export default function CaseStudy() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-24 sm:pt-28 lg:pt-32">
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Hardware Abstraction Layer for Network Infrastructure</h1>
            <p className="mt-2 text-slate-600">Client: Fortune 500 Enterprise Networking Vendor</p>

            <div className="mt-8 space-y-6 text-slate-700">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Challenge</h2>
                <p className="mt-2">1 year to introduce new products, 1-3 months per feature, 3 dedicated teams required, duplicate effort across 12+ platforms.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Solution</h2>
                <p className="mt-2">6-month engagement delivering Hardware Abstraction Layer (HAL), Knowledge Graphs with RAG, Multi-Agent System per platform, Parallel Implementation, and Automated CI/CD.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Results</h2>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li>12x faster product introduction (1 year → 1 month)</li>
                  <li>30-90x faster features (1-3 months → 1 day)</li>
                  <li>Write once, deploy to 12+ platforms</li>
                  <li>What required 3 teams now requires 1</li>
                  <li>Decades of features now compatible with future hardware</li>
                </ul>
              </div>
              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-700">
                "Opus Works gave us something we never had before: true feature portability across hardware. They turned a decades-old codebase into a modern, scalable system and cut our product timelines by an order of magnitude." — Engineering Manager
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 border-t">© {new Date().getFullYear()} Opus Works</footer>
    </div>
  )
}
