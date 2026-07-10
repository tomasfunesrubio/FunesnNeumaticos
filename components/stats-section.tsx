"use client"

import { PhoneCall, Mail, ArrowUpRight } from "lucide-react"

export function StatsSection() {
  return (
    <section className="bg-primary relative overflow-hidden py-6 md:py-8">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Izquierda: Encabezado directo */}
          <div className="text-center lg:text-left lg:max-w-md">
            <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight leading-tight">
              Escribinos para conocer más.
            </h3>
            <p className="text-black/80 font-medium text-xs md:text-sm mt-1">
              Asesoramiento directo en cubiertas, recauchutaje y atención a flotas y agro.
            </p>
          </div>

          {/* Derecha: Botón de WhatsApp único + Datos en texto limpio */}
          <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
            
            {/* Botón WhatsApp (Azul Noche / Slate - Contraste elegante con el dorado) */}
            <a
              href="https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Quisiera%20solicitar%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/60 px-8 py-3.5 font-bold text-sm md:text-base uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-[0.99] w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366] shrink-0">
                <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2 1 .4 1.5.5.6.2 1.3.1 1.9.1.7-.1 1.6-.6 1.9-1.2.3-.6.3-1.2.2-1.3-.1-.1-.3-.2-.5-.3z"/>
                <path d="M12 2a10 10 0 0 0-8.4 15.3l-1.6 5.7 5.9-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20z"/>
              </svg>
              <span>Escribir por WhatsApp</span>
            </a>

            {/* Datos en texto (Teléfono y Email) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 md:gap-6 text-black font-bold text-xs md:text-sm pt-1">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-black/70 shrink-0" />
                <span>385 413-5265</span>
              </div>
              <span className="text-black/30 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-black/70 shrink-0" />
                <a 
                  href="mailto:ventas@funesneumaticos.com" 
                  className="group inline-flex items-center gap-1 border-b border-black/30 hover:border-black hover:text-slate-900 pb-0.5 transition-all"
                >
                  <span>ventas@funesneumaticos.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black/60 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
