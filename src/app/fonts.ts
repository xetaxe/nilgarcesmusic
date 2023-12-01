import { DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'


export const font = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
})

export const logoFont = localFont({ 
  src: './floraline.ttf',
  weight: '700',
})