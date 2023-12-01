import '@/styles/tailwind.css'

import { type Metadata } from 'next'
import { font } from '../styles/fonts'


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
