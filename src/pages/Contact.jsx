import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-24 sm:pt-28 lg:pt-32">
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Let's Talk</h1>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl">
              Schedule a 30-minute discovery call to discuss your product development challenges and explore how we can help.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-10">
              <div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <h2 className="font-semibold text-slate-900">Calendly</h2>
                  <p className="text-sm text-slate-600 mt-1">Choose a time that works for you. We'll discuss your challenges, how we can help, and next steps.</p>
                  <div className="mt-4 aspect-video w-full rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                    <span>Calendly embed placeholder</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-xl border border-slate-200 p-6">
                  <h2 className="font-semibold text-slate-900">Contact Form</h2>
                  <form className="mt-4 grid grid-cols-1 gap-4">
                    <input className="border border-slate-300 rounded-md px-3 py-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
                    <input className="border border-slate-300 rounded-md px-3 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
                    <input className="border border-slate-300 rounded-md px-3 py-2" placeholder="Company" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
                    <textarea className="border border-slate-300 rounded-md px-3 py-2" rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
                    <button type="button" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors">Send</button>
                  </form>
                  <div className="mt-6 text-sm text-slate-700">
                    <p>Email: <a href="mailto:contact@opusworks.ai" className="text-blue-600 hover:underline">contact@opusworks.ai</a></p>
                    <p className="mt-1">We typically respond within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 border-t">© {new Date().getFullYear()} Opus Works</footer>
    </div>
  )
}
