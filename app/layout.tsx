import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grupo Punto Alto - Soluciones integrales para proyectos a gran escala",
  description:
    "Grupo empresarial líder en los sectores de la construcción, inmobiliario, metalmecánico, aeronáutico y de servicios.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
