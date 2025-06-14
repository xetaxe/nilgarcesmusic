import { logoFont } from '@/styles/fonts'
import ImageCarousel from '../ImageCarousel'
import ReferalsCarousel from '../ReferalsCarousel'

const reviews = [
  {
    text: 'It was a pleasure to have Nil with us during la Hora del planeta. His music brought the warm and special atmosphere the evening called for. The guests enjoyed the experience, and so did we. Thank you for making it so easy and beautiful!',
    name: 'Alba González',
    headline: 'Guest Experience Manager, Hotel Meliá',
  },
  {
    text: 'Thank you, Nil, for this beautifully done version of Cançó de Suburbi.',
    name: 'Toti Soler',
    headline: 'Guitarist, accompanist of Ovidi Montllor',
  },
  // {
  //   text: 'Generic message.',
  //   name: 'Alba Luz',
  //   headline: 'Singer-songwriter and poet',
  // },
  {
    text: 'We were listening to your music on our way back from the concert and we really loved it, thank you!',
    name: 'Jo Jet i Maria Ribot',
    headline: 'Notable singer-songwriter duo',
  },
  {
    text: 'Have you ever thought about putting all these pieces together in a physical format so we can buy them?',
    name: 'Joan Reig',
    headline: 'Musician, drummer of the band Els Pets',
  },
  // {
  //   text: 'Generic message',
  //   name: 'Pol Orobitg',
  //   headline: 'Musician and singer-songwriter',
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
            <a href="/live/es">
              <span className="flex items-center gap-2">
                Castellano
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="24">
                  <rect width="24" height="16" fill="#c60b1e" />
                  <rect width="24" height="8" y="4" fill="#ffc400" />
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
              Guitarist & composer
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
                Contact
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
              I'm a professional guitarist with years of experience performing
              in public and at hotels, restaurants, and other events.
            </p>
            <p className="mt-4">
              Transform your space into a unique experience with a sound that
              captivates through its delicacy, sensitivity, and elegance in
              equal measure.
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
          <h2 className="mb-12 text-center text-3xl font-bold">Project</h2>
          <div className="flex flex-col-reverse items-center justify-center gap-12 text-lg lg:flex-row lg:items-start">
            <div className="basis-2/5">
              <ImageCarousel />
            </div>
            <div className="basis-3/5">
              <ul className="mx-auto mt-4 max-w-[70ch] list-inside list-none space-y-4 px-4 text-lg">
                <li>
                  <span className="font-semibold">Music:</span> original
                  compositions in a Mediterranean style, calm classical guitar
                  pieces, and jazz and pop covers. The repertoire can be adapted
                  depending on the venue and the event.
                </li>
                <li>
                  <span className="font-semibold">Spaces:</span> ideal settings
                  include lounges, chill-out areas, elegant restaurants,
                  receptions... places where people want to relax or enjoy a
                  pleasant moment.
                </li>
                <li>
                  <span className="font-semibold">Setup:</span> instrumental
                  classical guitar, can be amplified. Preferably with a sound
                  system; if not, I have a small portable amplifier.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Escolta'm */}
      <section id="about" className="bg-dark2 py-12 text-gray-100 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold">Discover my music</h2>
          <div className="mx-auto max-w-[75ch] py-12 text-center text-lg">
            For more information about my compositions, published works, and
            artistic-creative project, you can visit the main page by clicking{' '}
            <a
              href="https://nilgarces.com/en"
              className="underline"
              target="_blank"
            >
              here ↗
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
        <h2 className="mb-12 text-center text-3xl font-bold">Contact</h2>
        <div className="mx-auto mb-12 max-w-[60ch] text-center text-lg">
          Get in touch to learn more, ask questions, or find out how to tailor
          the experience to your needs:
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-center max-md:flex-col">
          <p>📞 +34 649 372 689 </p>
          <p>📧 nilgarcesmusic@gmail.com</p>
          <p>📍 Barcelona</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black2 py-4 text-center text-white">
        © Nil Garcés {new Date().getFullYear()}
      </footer>
    </>
  )
}
