import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://funesneumaticos.com'),
  title: {
    default: 'Funes Neumáticos | Ingeniería en Transporte',
    template: '%s | Funes Neumáticos',
  },
  description:
    'Representante Oficial VIPAL en Santiago del Estero. Soluciones integrales para flotas: Precurado premium, mecánica ligera, tren delantero y alineación 3D. Maximizamos tu rendimiento kilométrico.',
  generator: 'v0.app',
  verification: {
    google: 'xsCdW2dO7Va7dC7AdCFMhK-EF4t0KoRW0vGvOm4I-yA',
  },
  icons: {
    icon: '/icono.png',
    apple: '/icono.png',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Funes Neumáticos',
    title: 'Funes Neumáticos | Ingeniería en Transporte',
    description:
      'Representante Oficial VIPAL en Santiago del Estero. Soluciones integrales para flotas de transporte.',
    url: '/',
    images: [
      {
        url: '/icono.png',
        width: 512,
        height: 512,
        alt: 'Funes Neumáticos Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funes Neumáticos | Ingeniería en Transporte',
    description:
      'Representante Oficial VIPAL en Santiago del Estero. Soluciones integrales para flotas de transporte.',
    images: ['/icono.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
