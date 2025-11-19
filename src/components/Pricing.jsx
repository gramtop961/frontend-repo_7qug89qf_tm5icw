import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Esterno Illimitato',
    price: '36,99€ / mese',
    highlight: false,
    features: [
      'Lavaggi ESTERNO illimitati',
      'A domicilio in tutta Milano',
      'Prenotazione super rapida',
      'One-time interni a 2,50€'
    ]
  },
  {
    name: 'Completo Illimitato',
    price: '46,99€ / mese',
    highlight: true,
    features: [
      'Esterno + INTERNI illimitati',
      'Zero costi extra',
      'Priorità di prenotazione',
      'A domicilio in tutta Milano'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="prezzi" className="relative py-24 bg-gradient-to-b from-[#002C40] to-[#012535]">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(600px_300px_at_0%_0%,#FF9CB8,transparent),radial-gradient(600px_300px_at_100%_100%,#FF366E,transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-white text-[clamp(24px,4.5vw,40px)] font-semibold mb-3">Scegli il tuo piano</h2>
          <p className="text-white/80">Illimitato davvero. Prezzo fisso, nessuna sorpresa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-6 sm:p-8 border backdrop-blur-xl ${
                t.highlight
                  ? 'bg-[#031C28]/80 border-[#FF366E]/30 shadow-[0_30px_60px_-15px_rgba(255,54,110,0.35)]'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF366E] text-white shadow-[0_10px_30px_-10px_rgba(255,54,110,0.7)]">Più scelto</div>
              )}

              <h3 className="text-white text-xl font-medium">{t.name}</h3>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9CB8] to-[#FF366E] text-3xl sm:text-4xl font-extrabold mt-2">{t.price}</div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/85">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-br from-[#FF9CB8] to-[#FF366E]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#cta" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition ${
                t.highlight
                  ? 'bg-[#FF366E] text-white hover:brightness-110'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Attiva ora
              </a>
            </motion.div>
          ))}
        </div>

        <p className="relative mt-6 text-center text-white/70 text-sm">Hai il piano esterno e vuoi una volta gli interni? Costa solo 2,50€ one-time.</p>
      </div>
    </section>
  )
}
