import { logoFont } from '@/styles/fonts'
import ImageCarousel from './ImageCarousel'
import ReferalsCarousel from './ReferalsCarousel'

const reviews = [
  {
    text: "Va ser un plaer comptar amb el Nil durant l’Hora del planeta. La seva música va aportar l'atmosfera càlida i especial que el caràcter de la vetllada demanava, els clients van gaudir de l'experiència i nosaltres també. Gràcies per fer-ho tan fàcil i bonic!",
    name: 'Alba González',
    headline: 'Guest experience manager, Hotel Meliá',
  },
  {
    text: 'Gràcies Nil per aquesta versió de Cançó de Suburbi tan ben trobada.',
    name: 'Toti Soler',
    headline: "Guitarrista, acompanyant d'Ovidi Montllor",
  },
  {
    text: 'Missatge genèric.',
    name: 'Alba Luz',
    headline: 'Cantautora i poeta',
  },
  {
    text: 'Et vam estar escoltant de tornada del concert i ens va agradar moltíssim, gràcies!',
    name: 'Jo Jet i Maria Ribot',
    headline: "Grup destacat de música d'autor",
  },
  {
    text: 'I no tens pensat en algun moment agrupar aquestes peces teves en format físic, per a que les poguem comprar?',
    name: 'Joan Reig',
    headline: "Músic, bateria d'Els Pets",
  },
  {
    text: 'Missatge genèric',
    name: 'Pol Orobitg',
    headline: 'Músic i cantautor',
  },
]

export default function Live() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="relative mx-auto h-full max-w-[1920px] bg-[url('/live/hero3.jpg')] bg-cover bg-top md:bg-[url('/live/hero2.jpg')]">
          <div className="bg-black2 absolute inset-x-0 top-0 flex justify-end gap-6 px-6 py-3 text-white">
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
          <div className="text-black2 absolute flex flex-col justify-stretch gap-2 text-center max-md:inset-x-0 max-md:bottom-0  max-md:bg-gradient-to-b max-md:from-white/70 max-md:to-white max-md:py-6 md:right-[10%] md:top-1/4 lg:right-[13%]">
            <h1
              className={`text-7xl tracking-wider  2xl:text-8xl ${logoFont.className}`}
            >
              Nil Garcés
            </h1>
            <span className="uppercase tracking-[4px] text-[#3a4a45] 2xl:tracking-[6px]">
              Guitarrista i compositor
            </span>
            <span className="flex justify-center gap-4 py-4">
              <a
                href="#about"
                className="border-black2 bg-black2 w-32 rounded-full border-2 py-2 font-medium uppercase text-white"
              >
                + info
              </a>
              <a
                href="#contact"
                className="border-black2 text-black2 w-32 rounded-full border-2 bg-transparent py-2 font-medium uppercase"
              >
                Contacta
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Resum */}
      <section id="about">
        <div className="text-black2 mx-auto max-w-[1280px] px-4 py-20 md:px-6">
          <div className="mx-auto max-w-[60ch] text-center text-lg font-medium">
            <p>
              Sóc un guitarrista professional amb anys d'experiència tocant en
              públic i en hotels, restaurants i altres esdeveniments.
            </p>
            <p className="mt-4">
              Transforma el teu espai en una experiència única amb una sonoritat
              que captiva per la seva delicadesa, sensibilitat i elegància a
              parts iguals.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonis */}
      <section className="bg-black2">
        <div className="mx-auto max-w-[1280px] px-4 py-20 md:px-6">
          <ReferalsCarousel reviews={reviews} />
        </div>
      </section>

      {/* Projecte */}
      <section className="text-black2">
        <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 md:py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Projecte</h2>
          <div className="flex flex-col-reverse items-center lg:items-start justify-center gap-12 lg:flex-row text-lg">
            <div className="basis-2/5">
              <ImageCarousel />
            </div>
            <div className="basis-3/5">
              <ul className="mt-4 list-inside list-disc space-y-4 text-lg max-w-[70ch] mx-auto px-4">
                <li>
                  <span className="font-semibold">Música:</span> composicions
                  pròpies d'estil mediterrani, peces calmades de guitarra
                  clàssica, versions de jazz i pop. A adaptar segons
                  l'esdeveniment.
                </li>
                <li>
                  <span className="font-semibold">Espais:</span> lounges,
                  chill-outs, restaurants elegants, recepcions,...
                </li>
                <li>
                  <span className="font-semibold">Format:</span> guitarra
                  clàssica instrumental (es pot amplificar). Preferiblement amb
                  sistema de so, si no compto amb un amplificador portàtil
                  petit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Escolta'm */}
      <section id="about" className="bg-black2 py-12 text-gray-100 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold">Escolta'm</h2>
          <div className="mx-auto max-w-[75ch] py-12 text-center text-lg">
            Per més informació sobre les meves composicions i projecte
            artístic-creatiu, podeu consultar la pàgina principal fent clic{' '}
            <a
              href="https://nilgarces.com/"
              className="underline"
              target="_blank"
            >
              aquí ↗
            </a>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <iframe
              src="https://open.spotify.com/embed/playlist/6m00gAmps9ShiZnJvA8Fak"
              width="100%"
              height="480"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/cpgxEnzPgUI"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contacte */}
      <section id="contact" className="px-4 py-12 md:px-6 md:py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Contacte</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-center max-md:flex-col">
          <p>📞 +34 649 372 689 </p>
          <p>📧 nilgarcesmusic@gmail.com</p>
          <p>📍 Barcelona i voltants</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black2 py-4 text-center text-white">
        © Nil Garcés {new Date().getFullYear()}
      </footer>
    </>
  )
}
