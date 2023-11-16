import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'R and D Panel',
  description: 'R and D panel is admin dashboard for company managing data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  )
}
