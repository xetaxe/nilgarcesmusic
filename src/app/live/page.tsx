// alba Gonzalez hotel mèlia
// toti soler
// jo jet i maria ribot
// pol orobitg
// joan reig 27.30
// alba luz

import { logoFont } from '@/styles/fonts'

export default function Live() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="relative mx-auto h-full max-w-[1920px] bg-[url('/live/hero3.jpg')] bg-cover bg-top md:bg-[url('/live/hero2.jpg')]">
          <div className="absolute inset-x-0 top-0 flex justify-end gap-6 bg-black2 px-6 py-3 text-white">
            <a href="/live">
              <span className="flex items-center gap-2">
                Castellano
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="24">
                  <rect width="24" height="16" fill="#c60b1e" />
                  <rect width="24" height="8" y="4" fill="#ffc400" />
                </svg>
              </span>
            </a>
            <a href="/live">
              <span className="flex items-center gap-2">
                English
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 40"
                  width="24"
                  height="16"
                >
                  <defs>
                    <clipPath id="t">
                      <path d="M30,15H60V30zM30,15V30H0zM30,15H0V0zM30,15V0H60z" />
                    </clipPath>
                  </defs>
                  <rect width="60" height="40" style={{ fill: '#00247d' }} />
                  <g
                    style={{
                      stroke: '#ffffff',
                      strokeWidth: '6.93225527',
                      fill: 'none',
                    }}
                  >
                    <path d="M0,0L60,40M60,0L0,40" />
                    <path
                      d="M0,0L60,30M60,0L0,30"
                      style={{ stroke: '#cf142b', strokeWidth: '4' }}
                      clipPath="url(#t)"
                      transform="scale(1,1.3333333)"
                    />
                    <path
                      d="M30,0V40M0,20H60"
                      style={{ strokeWidth: '11.55375878' }}
                    />
                    <path d="M30,0V40M0,20H60" style={{ stroke: '#cf142b' }} />
                  </g>
                </svg>
              </span>
            </a>
          </div>
          <div className="absolute flex flex-col justify-stretch gap-2 text-center text-black2 max-md:inset-x-0 max-md:bottom-0 max-md:bg-white max-md:bg-opacity-80 max-md:py-6 md:right-[10%] md:top-1/4 lg:right-[13%]">
            <h1
              className={`text-7xl tracking-wider  2xl:text-8xl ${logoFont.className}`}
            >
              Nil Garcés
            </h1>
            <span className="uppercase tracking-[4px] text-[#3a4a45] 2xl:tracking-[6px]">
              Guitarrista i compositor
            </span>
            <span className="flex justify-center gap-4 py-4">
              <button className='uppercase border-2 border-black2 bg-black2 font-medium text-white py-2 w-32 rounded-full'>+ info</button>
              <button className='uppercase border-2 border-black2 bg-transparent font-medium text-black2 py-2 w-32 rounded-full'>Contacta</button>
            </span>
          </div>
        </div>
      </section>

      {/* Sobre mi */}
      <section id="sobre" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Sobre mi</h2>
        <p className="text-lg">
          Sóc un guitarrista professional amb més de 10 anys d’experiència
          tocant en hotels, restaurants i esdeveniments privats. El meu estil
          combina elegància, sensibilitat i passió per fer que cada actuació
          sigui inoblidable.
        </p>
      </section>

      {/* Serveis */}
      <section id="serveis" className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Serveis</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Tipus d’esdeveniments
              </h3>
              <ul className="list-inside list-disc text-gray-700">
                <li>Hotels i restaurants</li>
                <li>Bodes i celebracions</li>
                <li>Esdeveniments privats i corporatius</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Formats i estil</h3>
              <p>
                Solo, duet amb cantant, trio acústic. Estils: pop suau, jazz,
                flamenc lleuger, boleros...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Àudio / Vídeo */}
      <section id="audio" className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">Escolta'm</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <iframe
            className="h-64 w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
          <iframe
            className="h-64 w-full"
            src="https://open.spotify.com/embed/track/xyz"
            title="Spotify player"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonis */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Testimonis</h2>
          <p className="mb-4 italic">
            “El Nil va fer màgica la nostra boda. Professional i amb molt gust.”
            – Laura & Marc
          </p>
          <p className="italic">
            “Clients encantats cada vespre al restaurant gràcies a ell.” – Hotel
            Marina
          </p>
        </div>
      </section>

      {/* Contacte */}
      <section id="contacte" className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-6 text-center text-3xl font-bold">Contacte</h2>
        <div className="mt-6 text-center">
          <p>📞 +34 649 372 689 · 📧 nilgarcesmusic@gmail.com</p>
          <p>📍 Barcelona i voltants</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black2 py-4 text-center text-white">
        © Nil Garcés
      </footer>
    </>
  )
}
