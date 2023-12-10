import Image from 'next/image'
import nilGarcesImagePortrait from '@/assets/img/nilgarces_portrait.jpg'
import nilGarcesImageLandscape from '@/assets/img/nilgarces_landscape.jpg'

export function Bio() {
  return (
    <>
      {/* <div className="bg-bg-200 py-10 md:py-16">
      </div> */}
      <section id="bio" className="bg-bg-400 py-12">
        <h1 className="mx-auto max-w-7xl font-bold text-2xl text-center mb-8">
          Bio
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-col lg:flex-row justify-center lg:items-center max-w-2xl gap-16 lg:mx-0 lg:max-w-none">
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
                    Nil Garcés és un projecte musical en solitari, basat en peces de guitarra instrumentals, a les fronteres del pop. A través d'aquestes, es busca crear un paisatge sonor i evocador on predominen imatges emotives i de natura.
                  </p>
                  <p className="mt-4">
                    <em>Captura subtil</em> (2016), el primer treball, compta amb onze cançons (amb poema) d'estils diversos, que exploren els límits sonors i compositius de la guitarra. Posteriorment ve <em>Versions I</em> (2018), un recull de vuit cançons variades ja existents, adaptades a guitarra sola. Després d'un període d'inactivitat creativa, torna amb <em>El fred i la primavera</em> (2022), amb un so més madur, concebut de manera unitària i de mirada introspectiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
