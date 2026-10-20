import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "next-themes"

import "./globals.css"

export const metadata: Metadata = {
  title: "Anastasiia Mind",
  description:
    "Психологиня і персональна тренерка Анастасія. Онлайн-консультації українською та російською: тривога, вигорання, самооцінка, психосоматика.",
}

export const viewport: Viewport = {
  themeColor: "#140f0d",
  viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Onest:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
