"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface CategoryHeaderProps {
    title: string
    subtitle: string
    icon: ReactNode
}

export function CategoryHeader({ title, subtitle, icon }: CategoryHeaderProps) {
    const isMobile = useIsMobile()

    return (
        <motion.div
            className="flex flex-col md:flex-row md:items-end gap-4 mb-10 border-b-2 border-zinc-200 pb-4"
            initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            whileInView={isMobile ? { opacity: 1, x: 0 } : undefined}
            viewport={isMobile ? { once: true, amount: 0.1 } : undefined}
            transition={isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0 }}
        >
            <div className="p-3 bg-zinc-900 text-primary w-fit">
                {icon}
            </div>
            <div>
                <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight leading-none text-balance">
                    {title}
                </h2>
                <p className="text-sm text-zinc-500 font-medium mt-1 text-balance">
                    {subtitle}
                </p>
            </div>
        </motion.div>
    )
}
