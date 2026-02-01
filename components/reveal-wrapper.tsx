"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function RevealWrapper({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    )
}
