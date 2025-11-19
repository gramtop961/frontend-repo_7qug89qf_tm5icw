import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import BrandMark from './BrandMark'

export default function Hero() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to match brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002C40]/70 via-[#002C40]/80 to-[#002C40] pointer-events-none" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-10 sm:pt-12 lg:pt-16">
          <div className="flex flex-col items-start gap-8 max-w-3xl">
            <BrandMark className="h-10" />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-white font-semibold leading-tight tracking-tight text-[clamp(32px,6vw,64px)]"
            >
              Lavaggi auto illimitati, dove vuoi a Milano.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="text-white/85 text-[clamp(16px,2.5vw,20px)] max-w-xl"
            >
              Abbonati e il nostro washer arriva a domicilio. Prezzo fisso, zero sbatti: esterno illimitato o completo con interni.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href="#prezzi" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#FF366E] text-white font-medium shadow-[0_10px_30px_-10px_rgba(255,54,110,0.7)] hover:brightness-110 transition">
                Scopri i piani
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 text-white font-medium hover:bg-white/20 transition">
                Come funziona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.35 } }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full ring-2 ring-[#002C40] bg-gradient-to-br from-[#FF9CB8] to-[#FF366E]" />
                ))}
              </div>
              <p className="text-white/80 text-sm">Decine di clienti felici ogni settimana</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
