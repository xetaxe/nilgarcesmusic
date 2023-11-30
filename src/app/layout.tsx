import '@/styles/tailwind.css'

import { type Metadata } from 'next'
import { DM_Sans } from 'next/font/google'


const font = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: "Nil Garcés music",
  description: "Music page of Nil Garcés. Solo guitar compositions to heal your soul"
}

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full bg-white antialiased ${font.className}`}>
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
