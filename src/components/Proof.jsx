export default function Proof() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Proven Results for Enterprise Clients</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Hardware Abstraction Case</h3>
            <p className="text-sm text-slate-600">Fortune 500 Enterprise Networking Vendor</p>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              <li>12x faster product introduction (1 year → 1 month)</li>
              <li>30-90x faster features (1-3 months → 1 day)</li>
              <li>Write once, deploy to 12+ platforms</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Firmware Security Case</h3>
            <p className="text-sm text-slate-600">Enterprise Networking Vendor</p>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              <li>Patch propagation: Weeks → Hours</li>
              <li>Eliminated manual work across 3 teams</li>
              <li>Near-zero regressions from automation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
