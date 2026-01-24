import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Funes Neumáticos | Soluciones Profesionales para tus Neumáticos',
  description: 'Especialistas en recapado de neumáticos. Calidad, durabilidad y confianza para tu flota. Más de 20 años de experiencia en el sector.',
  generator: 'v0.app',
  icons: {
    icon: '/rueda-camion.png',
    apple: '/rueda-camion.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
