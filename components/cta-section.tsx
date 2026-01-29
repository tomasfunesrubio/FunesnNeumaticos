"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background Texture: Dotted Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      {/* Radial Gradient for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 text-center">

        {/* HUD Container with Corner Brackets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-8 sm:p-12"
        >
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/50"></div>
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/50"></div>
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/50"></div>
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/50"></div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="mb-6"
          >
            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase font-mono">
                // MANTENIMIENTO INTEGRAL
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight"
          >
            SOLUCIONES DE <br className="hidden sm:block" />
            ALTO RENDIMIENTO <br />
            <span className="text-primary">
              PARA TU FLOTA
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12 font-light"
          >
            Maximizá la rentabilidad de cada kilómetro. Mantenimiento preventivo y correctivo con estándares industriales.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="https://wa.me/5493855711696?text=Hola%20Funes,%20necesito%20asesoramiento%20t%C3%A9cnico%20para%20mi%20flota."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full h-16 px-10 bg-primary text-black hover:bg-primary/90 font-black uppercase tracking-wider rounded-none text-base shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-1">
                <MessageCircle className="mr-3 h-5 w-5" />
                Asesoría Inmediata
              </Button>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="https://www.google.com/maps?q=Funes+Neumaticos,+RN34+720,+La+Banda,+Santiago+del+Estero"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="ghost" className="w-full h-16 px-10 text-zinc-400 hover:text-white hover:bg-white/5 border-2 border-zinc-800 hover:border-white/20 font-bold uppercase tracking-wider rounded-none text-base transition-all">
                <MapPin className="mr-3 h-5 w-5" />
                Ver Ubicación
              </Button>
            </motion.a>
          </div>

          {/* Features Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 border-t border-white/5 pt-10"
          >
            {["Atención Inmediata", "Presupuesto Sin Cargo", "Garantía Escrita"].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-zinc-300 font-medium uppercase tracking-wide text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}