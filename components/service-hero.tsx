"use client"

import { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceHeroProps {
    backgroundImage: string
    imageAlt: string
    badgeIcon: ReactNode
    badgeText: string
    title: ReactNode
    description: string
    ctaText?: string
    ctaLink?: string
}

export function ServiceHero({
    backgroundImage,
    imageAlt,
    badgeIcon,
    badgeText,
    title,
    description,
    ctaText = "Solicitar Turno por WhatsApp",
    ctaLink
}: ServiceHeroProps) {

    const defaultWhatsappUrl = "https://wa.me/543856981610"
    const finalLink = ctaLink || defaultWhatsappUrl

    return (
        <section className="pt-32 pb-20 bg-zinc-950 text-white relative border-b border-zinc-800 overflow-hidden">
            <Image
                src={backgroundImage}
                alt={imageAlt}
                fill
                className="object-cover object-center opacity-90"
                priority
                sizes="100vw"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2 mb-8 backdrop-blur-sm">
                            {badgeIcon}
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase font-mono">
                                {badgeText}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Title is passed as ReactNode to allow custom breaks/spans */}
                        <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl text-white mb-8 uppercase leading-[0.9] text-balance">
                            {title}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2 mb-10 text-balance">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href={finalLink} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8 text-lg rounded-none shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105 flex items-center gap-3">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                {ctaText}
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
