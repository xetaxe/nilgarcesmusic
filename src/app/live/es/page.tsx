import ImageCarousel from '../ImageCarousel'
import ReferalsCarousel from '../ReferalsCarousel'
import { Metadata } from 'next'

const reviews = [
  {
    text: 'Fue un placer contar con Nil durante la Hora del planeta. Su música aportó la atmósfera cálida y especial que el carácter de la velada requería, los clientes disfrutaron de la experiencia y nosotros también. Gracias por hacerlo tan fácil y bonito!',
    name: 'Alba González',
    headline: 'Guest experience manager, Hotel Meliá',
  },
  {
    text: 'Gracias Nil por esta versión de Cançó de Suburbi tan bien lograda.',
    name: 'Toti Soler',
    headline: 'Guitarrista, acompañante de Ovidi Montllor',
  },
  // {
  //   text: 'Missatge genèric.',
  //   name: 'Alba Luz',
  //   headline: 'Cantautora i poeta',
  // },
  {
    text: 'Te estuvimos escuchando de vuelta del concierto y nos gustó muchísimo, gracias!',
    name: 'Jo Jet i Maria Ribot',
    headline: 'Grupo destacado de música de autor',
  },
  {
    text: 'Y no tienes pensado en algún momento agrupar estas piezas que tienes en formato físico, para que las podamos comprar?',
    name: 'Joan Reig',
    headline: 'Músico, batería del grupo Els Pets',
  },
  // {
  //   text: 'Missatge genèric',
  //   name: 'Pol Orobitg',
  //   headline: 'Músic i cantautor',
  // },
]

export const metadata: Metadata = {
  title: 'Nil Garcés - LIVE',
  description: 'Música para eventos',
  openGraph: {
    title: 'Nil Garcés - LIVE',
    description: 'Música para eventos',
    images: [
      {
        url: 'https://nilgarces.com/live/hero2.jpg',
        width: 2048,
        height: 1272,
      },
    ],
  },
  twitter: {
    title: 'Nil Garcés - LIVE',
    description: 'Música para eventos',
    images: [
      {
        url: 'https://nilgarces.com/live/hero2.jpg',
        width: 2048,
        height: 1272,
      },
    ],
  },
}

export default function Live() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="relative mx-auto h-full max-w-[1920px] bg-[url('/live/new_hero33.jpg')] bg-cover bg-top md:bg-[url('/live/new_hero2.jpg')]">
          <div className="bg-black2 absolute inset-x-0 top-0 flex justify-end gap-6 px-6 py-3 text-white">
            <a href="/live">
              <span className="flex items-center gap-2">
                Català
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 810 540"
                  width="24"
                  height="16"
                >
                  <rect width="810" height="540" fill="#FCDD09" />
                  <path
                    stroke="#DA121A"
                    strokeWidth="60"
                    d="M0,90H810m0,120H0m0,120H810m0,120H0"
                  />
                </svg>
              </span>
            </a>
            <a href="/live/en">
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
          <div className="max-md:from-black2/60 max-md:to-black2 absolute flex flex-col justify-stretch gap-2 text-center text-white max-md:inset-x-0 max-md:bottom-0 max-md:bg-gradient-to-b max-md:py-6 md:left-[10%] md:top-1/3 lg:left-[13%]">
            <h1 className="text-5xl font-medium uppercase tracking-widest xl:text-[60px]">
              Nil Garcés
            </h1>
            <span className="uppercase tracking-[4px] text-gray-100">
              Guitarrista y compositor
            </span>
            <span className="flex justify-center gap-4 py-4">
              <a
                href="#about"
                className="text-black2 w-32 rounded-full border-2 border-white bg-white py-2 font-medium uppercase"
              >
                + info
              </a>
              <a
                href="#contact"
                className="w-32 rounded-full border-2 border-white bg-transparent py-2 font-medium uppercase text-white"
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
              Soy un guitarrista profesional con años de experiencia tocando en
              público y en hoteles, restaurantes y otros eventos.
            </p>
            <p className="mt-4">
              Transforma tu espacio en una experiencia única con una sonoridad
              que cautiva por su delicadeza, sensibilidad y elegancia a partes
              iguales.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonis */}
      <section className="bg-dark2">
        <div className="mx-auto max-w-[1280px] px-4 py-20 md:px-6">
          <ReferalsCarousel reviews={reviews} />
        </div>
      </section>

      {/* Projecte */}
      <section className="text-black2">
        <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 md:py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Proyecto</h2>
          <div className="flex flex-col-reverse items-center justify-center gap-12 text-lg lg:flex-row lg:items-start">
            <div className="basis-1/2">
              <ImageCarousel />
            </div>
            <div className="basis-1/2">
              <ul className="mx-auto mt-4 max-w-[70ch] list-inside list-none space-y-4 px-4 text-lg">
                <li>
                  <span className="font-semibold">Música:</span> composiciones
                  propias de estilo mediterráneo, piezas tranquilas de guitarra
                  clásica, versiones de jazz y pop. Se puede adaptar en función
                  del lugar y el evento.
                </li>
                <li>
                  <span className="font-semibold">Espacios:</span> los más
                  adecuados serían lounges, chill-outs, restaurantes elegantes,
                  recepciones,... lugares donde la gente quiere relajarse o
                  disfrutar de un momento agradable.
                </li>
                <li>
                  <span className="font-semibold">Formato:</span> guitarra
                  clásica instrumental, amplificable. Preferiblemente con
                  sistema de sonido, si no, cuento con un amplificador portátil
                  pequeño.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Escolta'm */}
      <section id="about" className="bg-dark2 py-12 text-gray-100 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold">Descubre mi música</h2>
          <div className="mx-auto max-w-[75ch] py-12 text-center text-lg">
            Para más información sobre mis composiciones, trabajos publicados y
            proyecto artístico-creativo, puedes consultar la página principal
            haciendo clic{' '}
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
              height="600"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-xl font-medium">Videos</h3>
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/OlnRnAPVHEE"
                title="YouTube Cançó de suburbi"
                allowFullScreen
              ></iframe>
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/cpgxEnzPgUI"
                title="YouTube Seguirem buscant"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contacte */}
      <section id="contact" className="px-4 py-12 md:px-6 md:py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Contacto</h2>
        <div className="mx-auto mb-12 max-w-[60ch] text-center text-lg">
          Contacta para saber más detalles, resolver dudas o descubrir cómo
          ajustar la experiencia a tu caso:
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-center max-md:flex-col">
          <p className="text-black2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
              fill="fill-black2"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            <span>+34 649 372 689</span>
          </p>
          <p className="text-black2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
              fill="fill-black2"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <span>nilgarcesmusic@gmail.com</span>
          </p>
          <p className="text-black2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
              fill="fill-black2"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <span>Barcelona y alrededores</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black2 py-4 text-center text-white">
        © Nil Garcés {new Date().getFullYear()}
      </footer>
    </>
  )
}
