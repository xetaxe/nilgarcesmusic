import Image from 'next/image'

import { Container } from '@/components/Container'
import nilGarcesImagePortrait from '@/assets/img/nilgarces_portrait.jpg'
import nilGarcesImageLandscape from '@/assets/img/nilgarces_landscape.jpg'

export function Bio() {
  return (
    <section id="bio" className="bg-bg-400 py-12">
      <Container>
        <h1 className="font-bold text-2xl text-center mb-8">
          Bio
        </h1>
        <div className="mx-auto flex flex-col lg:flex-row justify-center lg:items-center  gap-16 lg:mx-0 lg:max-w-none">
          <div className="mx-auto w-full max-w-lg">
            <div className="xsm:hidden relative overflow-hidden rounded-3xl shadow-2xl px-6 py-48">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={nilGarcesImagePortrait}
                alt="Nil Garcés image"
                fill
              />
            </div>
            <div className="hidden xsm:block relative overflow-hidden rounded-3xl shadow-2xl px-6 py-48">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={nilGarcesImageLandscape}
                alt="Nil Garcés image"
                fill
              />
            </div>
          </div>
          <div className="mx-auto">
            <div className="text-base leading-7 text-gray-900 lg:max-w-lg">
              <div className="max-w-[80ch] text-justify">
                <p className="">
                  Nil Garcés is a solo musical project, based on instrumental guitar pieces that explore the margins of pop guitar. The songs aim to create a sound landscape in which emotive and nature-inspired images are predominant.
                </p>
                <p className="mt-4">
                  <em>Captura subtil</em> ("Subtle capture", 2016), the first work, has eleven songs + poems (in Catalan) of various styles that explore the acoustic and compositional limits of the guitar. The next release, <em>Versions I</em> (2018), is a collection of eight existing songs, adapted for solo guitar. After a period of creative inactivity, he returns with <em>El fred i la primavera</em> ("Breeze & Spring", 2022), more mature, conceptual in nature, and with an introspective look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
