import React from 'react'
import { motion } from 'framer-motion'
import { Car, MapPin, Calendar, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Scegli il piano',
    desc: 'Esterno illimitato o completo con interni. Attivi in 60 secondi.'
  },
  {
    icon: MapPin,
    title: 'Dove vuoi a Milano',
    desc: 'Ufficio, casa o palestra: il nostro washer arriva dove preferisci.'
  },
  {
    icon: Car,
    title: 'Lavaggio senza sbatti',
    desc: 'No coda, no gettoni. Tu vivi, noi laviamo.'
  },
  {
    icon: Sparkles,
    title: 'Auto sempre brillante',
    desc: 'Illimitato a prezzo fisso. Quando vuoi.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 bg-[#002C40]">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(800px_400px_at_10%_0%,#FF9CB8,transparent),radial-gradient(800px_400px_at_90%_100%,#FF366E,transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-white text-[clamp(24px,4.5vw,40px)] font-semibold mb-3">Come funziona</h2>
          <p className="text-white/80 text-lg">Abbonamento a domicilio: prenoti dal telefono, arriviamo noi.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[#FF9CB8]/50 backdrop-blur-md overflow-hidden"
            >
              <s.icon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white font-medium mb-1">{s.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{s.desc}</p>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#FF9CB8]/20 to-[#FF366E]/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
