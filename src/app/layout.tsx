import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

// Initialize the font
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'IndieHacker Trends',
  description: 'The Distinguished Bootstrapper Daily Edition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} grid-background antialiased`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}