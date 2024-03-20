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
