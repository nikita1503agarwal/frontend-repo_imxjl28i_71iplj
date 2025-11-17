export default function HowWeWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How We Work</h2>
        <p className="mt-4 text-slate-700 max-w-3xl">Our approach combines guided workflows with specialized domain expertise to unlock the full potential of human-AI collaboration.</p>
        <ol className="mt-8 space-y-6 list-decimal pl-6 text-slate-700">
          <li>
            <span className="font-semibold">Guided Workflows</span> - Battle-tested workflows that bring out human insight while leveraging AI's analytical capabilities at scale.
          </li>
          <li>
            <span className="font-semibold">Specialized Collaboration</span> - Domain experts work alongside multi-agent systems, each focused on their area of expertise.
          </li>
          <li>
            <span className="font-semibold">Scale-Adaptive Planning</span> - Right-sized planning for every scenario: quick fixes to enterprise features. No unnecessary overhead.
          </li>
          <li>
            <span className="font-semibold">Story-Centric Implementation</span> - Quality built in from the start through clear requirements, automated testing, and continuous validation.
          </li>
        </ol>
      </div>
    </section>
  )
}
