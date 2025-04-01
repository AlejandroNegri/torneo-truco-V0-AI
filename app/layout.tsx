import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Campeonato de Truco",
  description: "Leaderboard del campeonato anual de truco",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-muted/30 min-h-screen`}>
        {children}
        <Navigation />
      </body>
    </html>
  )
}



import './globals.css'