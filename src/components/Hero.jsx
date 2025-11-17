import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            From Product Strategy to Shipping Code in Weeks, Not Quarters
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-2xl">
            Expert Product Management + Agentic Programming
          </p>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 text-base font-semibold hover:bg-blue-700 transition-colors">
              Schedule Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
