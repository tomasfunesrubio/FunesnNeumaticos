"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedGridProps {
    children: ReactNode
    className?: string
}

export function AnimatedGrid({ children, className = "" }: AnimatedGridProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {children}
        </motion.div>
    )
}

export function AnimatedGridItem({ children, className = "" }: { children: ReactNode, className?: string }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    )
}
