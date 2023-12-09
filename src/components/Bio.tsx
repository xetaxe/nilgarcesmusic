import Image from 'next/image'
import nilGarcesImage from '@/assets/img/nilgarces.jpg'

export function Bio() {
  return (
    <>
      <section id="bio" className="bg-bg-200 py-6">
        <h1 className="mx-auto max-w-7xl font-bold text-2xl text-center mb-12">
          Bio
        </h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-col lg:flex-row justify-center max-w-2xl gap-16 lg:mx-0 lg:max-w-none">
            <div className="mx-auto lg:pr-4 w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl px-6 py-48 sm:py-56 lg:py-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={nilGarcesImage}
                  alt="Nil Garcés image"
                  fill
                />
              </div>
            </div>
            <div className="mx-auto">
              <div className="text-base leading-7 text-gray-900 lg:max-w-lg">
                <div className="max-w-[80ch]">
                  <p className="">
                    Nil Garcés és un projecte musical en solitari, basat en peces de guitarra instrumentals, a les fronteres del pop. A través d'aquestes, es busca crear un paisatge sonor i evocador on predominen imatges emotives i de natura.
                  </p>
                  {/* <p className="mt-4">
                    Després de participar Garcés és un projecte musical en solitari, basat en peces de guitarra instrumentals, sempre a les fronteres del pop.
                  </p> */}
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
