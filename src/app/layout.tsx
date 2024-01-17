import { ThemeProvider } from "@/components/theme/theme-provider"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import './themes.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKT',
  description: 'Made By Kellton',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en" className="dark ">
      <body 
        className={`${inter.className} dark:bg-noise dark:bg-fixed`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
