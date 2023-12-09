import Link from 'next/link'
import Image from 'next/image'


import { Container } from '@/components/layout/Container'
import { EpisodePlayButton } from './music/EpisodePlayButton'
import { type Episode, getAllEpisodes } from '@/assets/episodes'
import { AudioProvider } from '@/components/music/AudioProvider'
import { AudioPlayer } from '@/components/music/player/AudioPlayer'
import posterImage from '@/assets/img/captura_subtil.jpg'
import { SpotifyIcon, YoutubeIcon } from '@/assets/icons'

function PauseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z" />
    </svg>
  )
}

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
    </svg>
  )
}

function EpisodeEntry({ episode }: { episode: Episode }) {

  return (
    <div
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-2"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            <div className="flex gap-2">
              <EpisodePlayButton
                episode={episode}
                className="flex items-center gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                playing={ <PauseIcon className="h-2.5 w-2.5 fill-current" /> }
                paused={ <PlayIcon className="h-2.5 w-2.5 fill-current" /> }
              />
              {episode.title}
            </div>
          </h2>
          <div className="mt-2 lg:mt-0 flex items-center gap-4">
            <Link
              href={`/${episode.id}`}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label={`Show notes for episode ${episode.title}`}
            >
              Descarrega
            </Link>
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-400"
            >
              /
            </span>
            <Link
              href={`/${episode.id}`}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label={`Show notes for episode ${episode.title}`}
            >
              Partitura
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export async function Music() {

  let episodes = await getAllEpisodes()
  
  return (
    <AudioProvider>
      <section id="music" className="bg-bg-200 w-full">
        <div className="bg-bg-200 py-10 sm:py-20 bg-gradient-to-b from-[#d1dfe8] sc">
        </div>
        <h1 className="mx-auto max-w-7xl font-bold text-2xl text-center">
          Música
        </h1>
        <Container className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-center">
          <div className="bg-slate-50 sm:basis-80 md:basis-96 lg:items-start lg:overflow-y-auto xl:basis-120">
            <div className="z-10 flex flex-col mx-auto px-4 py-8 lg:border-slate-200">
              <span
                className="relative mx-auto block w-64 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-48 md:w-64 sm:rounded-xl  lg:rounded-2xl aspect-square"
                aria-label="Homepage"
              >
                <Image
                  className="w-full"
                  src={posterImage}
                  alt=""
                  fill
                  priority
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
              </span>
              <div className="mt-10 text-center lg:mt-12 lg:text-left">
                <p className="text-xl font-bold text-slate-900">
                  Captura subtil
                </p>
                <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
                  Primer disc, publicat el 2016. Cada cançó va acompanyada d'un poema.
                </p>
              </div>
              <section className="mt-4">
                <ul
                  role="list"
                  className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:gap-4"
                >
                  {(
                    [
                      ['Spotify', SpotifyIcon],
                      ['Youtube', YoutubeIcon],
                    ] as const
                  ).map(([label, Icon]) => (
                    <li key={label} className="flex">
                      <Link
                        href="/"
                        className="group flex items-center"
                        aria-label={label}
                      >
                        <Icon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                        <span className="ml-3">{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <div className="lg:relative lg:mb-28 lg:ml-112 xl:ml-120 grow">
            <div className="relative">
              <div className="py-8 sm:pb-4 lg:pt-12">
                <Container>
                  <h1 className="text-xl font-bold leading-7 text-slate-900">
                    Cançons
                  </h1>
                </Container>
                <div className="divide-y divide-slate-100 mt-2 lg:mt-4 lg:border-t lg:border-slate-100">
                  {episodes.map((episode) => (
                    <EpisodeEntry key={episode.id} episode={episode} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
            <AudioPlayer />
          </div>
        </Container>
      </section>
    </AudioProvider>
  )
}