import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Capabilities from '../components/Capabilities'
import Proof from '../components/Proof'
import VideoTestimonial from '../components/VideoTestimonial'
import HowWeWork from '../components/HowWeWork'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <Proof />
        <VideoTestimonial />
        <HowWeWork />
        <FinalCTA />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500 border-t">© {new Date().getFullYear()} Opus Works</footer>
    </div>
  )
}
