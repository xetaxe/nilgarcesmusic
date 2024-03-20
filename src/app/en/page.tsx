import { Hero } from './Hero'
import { Bio } from './Bio'
import { Music } from './Music'
import { Contact } from './Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Nil Garcés - MUSIC",
  description: "Guitar music for you soul. Download all the songs, music sheets and more.",
  authors: { name: "Nil Garcés", url: "https://nilgarces.com" },
  keywords: [ "Nil Garcés", "Nil Garces", "music", "guitar", "instrumental", "classic guitar", "Nil music"],
  openGraph: {
    title: "Nil Garcés - MUSIC",
    description: "Guitar music for your soul. Download all the songs, music sheets and more.",
    url: "https://nilgarces.com/en",
    siteName: "Nil Garcés - MUSIC",
    images: [
      {
        url: "https://nilgarces.com/og_img.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    alternateLocale: "en_GB",
    type: "website",
  },
  twitter: {
    title: "Nil Garcés - MUSIC",
    description: "Guitar music for you soul. Download all the songs, music sheets and more.",
    creator: "Nil Garcés",
    images: [
      {
        url: "https://nilgarces.com/og_img.jpg",
        width: 1200,
        height: 630,
      },
    ]
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Music />
      <Bio />
      <Contact />
    </>
  )
}
