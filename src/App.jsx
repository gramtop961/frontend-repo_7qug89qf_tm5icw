import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#002C40]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-white/80 hover:text-white transition font-medium">Kikarwash</a>
          <nav className="hidden sm:flex items-center gap-6 text-white/80">
            <a href="#how" className="hover:text-white transition">Come funziona</a>
            <a href="#prezzi" className="hover:text-white transition">Prezzi</a>
            <a href="#cta" className="rounded-full px-4 py-2 bg-[#FF366E] text-white font-semibold shadow-[0_10px_30px_-10px_rgba(255,54,110,0.7)] hover:brightness-110 transition">Scarica l'app</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-[#012535]">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Kikarwash. All rights reserved.</p>
          <div className="text-white/60 text-sm">Milano • Lavaggi a domicilio</div>
        </div>
      </footer>
    </div>
  )
}

export default App
