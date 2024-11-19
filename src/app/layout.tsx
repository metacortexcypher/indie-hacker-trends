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
  openGraph: {
    title: 'The Juiciest content & stories from the Indie Hackers & Buildinpublic community',
    description: 'The Distinguished Bootstrapper Daily Edition',
    url: 'https://www.theindiejuice.com',
    siteName: 'IndieHacker Trends',
    images: [
      {
        url: '/boldog.png', // Replace with the path to your image file
        width: 1200,
        height: 630,
        alt: 'IndieHacker Trends Open Graph Image',
      },
    ],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className}`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}