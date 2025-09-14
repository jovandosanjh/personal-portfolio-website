import type React from "react"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css"

const geistSans = {
  variable: "--font-geist-sans",
  className: GeistSans.className,
}

const geistMono = {
  variable: "--font-geist-mono",
  className: GeistMono.className,
}

export const metadata: Metadata = {
  title: "Jovan - Engineering & Tech Enthusiast",
  description:
    "Portfolio of Jovan, Management Engineering student at University of Waterloo specializing in innovation and problem-solving.",
  keywords: ["portfolio", "engineering", "technology", "University of Waterloo", "LinkUp"],
  authors: [{ name: "Jovan" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
