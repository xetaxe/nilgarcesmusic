import '@/styles/tailwind.css'

import { Analytics } from '@vercel/analytics/react';
import { font } from '@/styles/fonts'

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full bg-white antialiased scroll-smooth ${font.className}`}>
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
