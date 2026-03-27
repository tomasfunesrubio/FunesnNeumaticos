"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface AnimatedProductDetailProps {
    backLink: string
    backText: string
    image: string
    imageAlt: string
    badgeText: string
    title: string
    description?: string | string[]
    isVipal?: boolean
    specs: ReactNode
    ctaText: string
    ctaLink: string
}

export function AnimatedProductDetail({
    backLink,
    backText,
    image,
    imageAlt,
    badgeText,
    title,
    description,
    isVipal,
    specs,
    ctaText,
    ctaLink
}: AnimatedProductDetailProps) {

    const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)"

    return (
        <>
            {/* Back Navigation */}
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-32 pb-8 bg-background border-b border-border"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Link
                        href={backLink}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        {backText}
                    </Link>
                </div>
            </motion.section>

            {/* Product Detail Section */}
            <section className="py-16 bg-zinc-50 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* COLUMNA IZQUIERDA: Imagen y CTA (Ahora con Sticky) */}
                        {/* Agregamos un contenedor wrapper con lg:sticky y lg:top-32 */}
                        <div className="space-y-6 lg:sticky lg:top-32">

                            {/* CAJA DE LA IMAGEN */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative bg-white border-2 border-zinc-200 p-8 lg:p-12 flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

                                {/* LOGO VIPAL DORADO */}
                                {isVipal && (
                                    <div className="absolute top-4 right-4 lg:top-6 lg:right-6 z-20 h-8 w-24 lg:h-10 lg:w-28 bg-zinc-900 shadow-xl border border-zinc-800 rounded flex items-center justify-center p-2 lg:p-2.5 transition-all">
                                        <Image
                                            src="/vipal.png"
                                            alt="Vipal Certificado"
                                            width={90}
                                            height={35}
                                            className="object-contain w-full h-full"
                                            style={{ filter: goldFilter }}
                                        />
                                    </div>
                                )}

                                <div className="relative aspect-square w-full max-w-md lg:max-w-lg mx-auto z-10">
                                    <Image
                                        src={image}
                                        alt={imageAlt}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                </div>

                                {/* Esquinas amarillas */}
                                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary z-20"></div>
                                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary z-20"></div>
                            </motion.div>

                            {/* NUEVA UBICACIÓN DEL BOTÓN CTA (Debajo de la imagen) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Aparece un poquito después de la imagen
                            >
                                <a
                                    href={ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button className="w-full h-14 bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider text-lg rounded-none shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        {ctaText}
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        {/* COLUMNA DERECHA: Información y Especificaciones */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 font-mono text-xs uppercase tracking-widest self-start"
                            >
                                {badgeText}
                            </motion.div>

                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-5xl lg:text-6xl font-black text-zinc-900 uppercase leading-[0.9] tracking-tighter mb-4"
                                >
                                    {title}
                                </motion.h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="h-1 w-24 bg-primary origin-left"
                                ></motion.div>
                            </div>

                            {/* DESCRIPCIÓN */}
                            {description && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className={`text-lg text-zinc-600 leading-relaxed ${Array.isArray(description) ? '' : 'border-l-4 border-primary pl-6 py-2'}`}
                                >
                                    {Array.isArray(description) ? (
                                        <ul className="space-y-3">
                                            {description.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-zinc-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{description}</p>
                                    )}
                                </motion.div>
                            )}

                            {/* ESPECIFICACIONES (Ya sin el botón abajo) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {subSpecsWrapper(specs)}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function subSpecsWrapper(children: ReactNode) {
    if (!children) return null
    return (
        <div className="bg-white border border-zinc-200 p-8 shadow-sm">
            {children}
        </div>
    )
}