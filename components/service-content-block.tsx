"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { LucideIcon, CheckCircle2 } from "lucide-react"

interface ServiceContentBlockProps {
    icon: ReactNode
    title: string
    description: string
    features?: ReactNode[] // Array of strings or nodes
    imageContent: ReactNode // The image block (e.g. placeholder or Next/Image)
    reversed?: boolean
}

export function ServiceContentBlock({
    icon: Icon,
    title,
    description,
    features,
    imageContent,
    reversed = false
}: ServiceContentBlockProps) {
    return (
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0`}>
            <motion.div
                className={`bg-zinc-200 shadow-xl border-4 border-zinc-100 relative ${reversed ? "lg:order-2" : "lg:order-1"}`}
                initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Aspect ratio can be controlled by parent or internal divs if needed, 
            but usually passed as a fully styled 'imageContent' div helps flexibility.
            However, to enforce style, we wrap it here.
        */}
                <div className="aspect-[4/3] w-full h-full relative">
                    {imageContent}
                </div>
            </motion.div>

            <motion.div
                className={`space-y-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}
                initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="inline-flex items-center gap-2 bg-zinc-900 text-primary px-4 py-2">
                    {Icon}
                </div>
                <h3 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">
                    {title}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-primary pl-6 text-balance">
                    {description}
                </p>

                {features && features.length > 0 && (
                    <ul className="space-y-2 text-zinc-500 font-medium">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </div>
    )
}
