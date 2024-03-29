import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'

const inter = Lato({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Discord',
  description: 'Generated by Discord',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
