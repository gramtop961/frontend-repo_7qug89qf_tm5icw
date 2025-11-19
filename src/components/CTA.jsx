import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-[#002C40]">
      <div className="absolute inset-0 opacity-[0.08] bg-[conic-gradient(from_180deg_at_50%_50%,#FF9CB8,transparent,#FF366E,transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-[clamp(24px,4.5vw,40px)] font-semibold mb-3">Pronto per dire addio all'autolavaggio?</h3>
            <p className="text-white/80 text-lg">Scarica l'app e prenota il primo lavaggio: arriviamo noi, quando vuoi. Milano e hinterland.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white font-semibold shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] hover:brightness-110 transition">
              App Store
            </a>
            <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white font-semibold shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] hover:brightness-110 transition">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
