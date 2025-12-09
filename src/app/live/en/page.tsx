import { logoFont } from '@/styles/fonts'
import ImageCarousel from '../ImageCarousel'
import ReferalsCarousel from '../ReferalsCarousel'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: "Nil Garcés - LIVE",
  description: "Music for venues",
  metadataBase: new URL("https://nilgarces.com"),
  openGraph: {
    title: "Nil Garcés - LIVE",
    description: "Music for venues",
    images: [
      {
        url: "https://nilgarces.com/live/hero2.jpg",
        width: 2048,
        height: 1272,
      },
    ],
  },
  twitter: {
    title: "Nil Garcés - LIVE",
    description: "Music for venues",
    images: [
      {
        url: "https://nilgarces.com/live/hero2.jpg",
        width: 2048,
        height: 1272,
      },
    ]
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
          <div className="max-md:from-black2/60 max-md:to-black2 absolute flex flex-col justify-stretch gap-2 text-center text-white max-md:inset-x-0 max-md:bottom-0 max-md:bg-gradient-to-b max-md:py-6 md:left-[10%] md:top-1/3 lg:left-[13%]">
            <h1 className="text-5xl font-medium uppercase tracking-widest xl:text-[60px]">
              Nil Garcés
            </h1>
            <span className="uppercase tracking-[4px] text-gray-100">
              Guitarist & composer
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
            <div className="basis-1/2">
              <ImageCarousel />
            </div>
            <div className="basis-1/2">
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
            <span>Barcelona</span>
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
