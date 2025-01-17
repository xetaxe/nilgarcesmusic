import { Hero } from './Hero'
import { Bio } from './Bio'
import { Music } from './Music'
import { Contact } from './Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Nil Garcés - MÚSICA",
  description: "Música per guitarra. Descarrega les cançons, partitures i més.",
  authors: { name: "Nil Garcés", url: "https://nilgarces.com" },
  keywords: [ "Nil Garcés", "música", "guitarra", "instrumental", "guitarra clàssica", "Nil música"],
  metadataBase: new URL("https://nilgarces.com"),
  alternates: {
    canonical: "https://nilgarces.com",
    languages: {
      'es-ES': "https://nilgarces.com",
      'en-US': "https://nilgarces.com/en",
      'en-GB': "https://nilgarces.com/en",
    },
  },
  openGraph: {
    title: "Nil Garcés - MÚSICA",
    description: "Música per guitarra. Descarrega les cançons, partitures i més.",
    url: "https://nilgarces.com",
    siteName: "Nil Garcés - MÚSICA",
    images: [
      {
        url: "https://nilgarces.com/og_img.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ca_ES",
    alternateLocale: "es_ES",
    type: "website",
  },
  twitter: {
    title: "Nil Garcés - MÚSICA",
    description: "Música per guitarra. Descarrega les cançons, partitures i més.",
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
