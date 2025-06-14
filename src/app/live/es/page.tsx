import { logoFont } from '@/styles/fonts'
import ImageCarousel from '../ImageCarousel'
import ReferalsCarousel from '../ReferalsCarousel'

const reviews = [
  {
    text: 'Fue un placer contar con Nil durante la Hora del planeta. Su música aportó la atmósfera cálida y especial que el carácter de la velada requería, los clientes disfrutaron de la experiencia y nosotros también. Gracias por hacerlo tan fácil y bonito!',
    name: 'Alba González',
    headline: 'Guest experience manager, Hotel Meliá',
  },
  {
    text: 'Gracias Nil por esta versión de Cançó de Suburbi tan bien conseguida.',
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
    headline: "Músico, batería del grupo Els Pets",
  },
  // {
  //   text: 'Missatge genèric',
  //   name: 'Pol Orobitg',
  //   headline: 'Músic i cantautor',
  // },
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
            {/* <a href="/live">
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
            </a> */}
          </div>
          <div className="text-black2 absolute flex flex-col justify-stretch gap-2 text-center max-md:inset-x-0 max-md:bottom-0  max-md:bg-gradient-to-b max-md:from-white/70 max-md:to-white max-md:py-6 md:right-[10%] md:top-1/4 lg:right-[13%]">
            <h1
              className={`text-7xl tracking-wider  2xl:text-8xl ${logoFont.className}`}
            >
              Nil Garcés
            </h1>
            <span className="uppercase tracking-[4px] text-[#3a4a45] 2xl:tracking-[6px]">
              Guitarrista y compositor
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
            <div className="basis-2/5">
              <ImageCarousel />
            </div>
            <div className="basis-3/5">
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
          <h2 className="text-center text-3xl font-bold">
            Descubre mi música
          </h2>
          <div className="mx-auto max-w-[75ch] py-12 text-center text-lg">
          Para más información sobre mis composiciones, trabajos publicados y proyecto artístico-creativo, puedes consultar la página principal haciendo clic{' '}
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
          Contacta para saber más detalles, resolver dudas o descubrir cómo ajustar la experiencia a tu caso:
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-center max-md:flex-col">
          <p>📞 +34 649 372 689 </p>
          <p>📧 nilgarcesmusic@gmail.com</p>
          <p>📍 Barcelona y alrededores</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black2 py-4 text-center text-white">
        © Nil Garcés {new Date().getFullYear()}
      </footer>
    </>
  )
}
