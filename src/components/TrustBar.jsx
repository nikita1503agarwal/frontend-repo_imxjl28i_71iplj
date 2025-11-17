export default function TrustBar() {
  return (
    <section className="py-10 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest">Trusted by Fortune 500 Technology Companies</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-700 text-sm">
          <span className="font-semibold">Industries:</span>
          <span>Enterprise Networking</span>
          <span className="text-slate-400">|</span>
          <span>Infrastructure</span>
          <span className="text-slate-400">|</span>
          <span>Security</span>
        </div>
      </div>
    </section>
  )
}
