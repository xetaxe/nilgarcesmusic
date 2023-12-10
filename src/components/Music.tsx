"use client"

import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import { SongPlayButton } from './music/SongPlayButton'
import { AudioProvider } from '@/components/music/AudioProvider'
import { AudioPlayer } from '@/components/music/player/AudioPlayer'
import { SpotifyIcon, YoutubeIcon } from '@/assets/icons'
import { type Song, musicLinks } from '@/assets/musicLinks'
import { useState } from 'react'

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

function SongEntry({ song }: { song: Song }) {

  return (
    <div
      aria-labelledby={`song-${song.number}-title`}
      className="py-2"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <h2
            id={`song-${song.number}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            <div className="flex gap-2">
              <SongPlayButton
                song={song}
                className="flex items-center gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                playing={ <PauseIcon className="h-2.5 w-2.5 fill-current" /> }
                paused={ <PlayIcon className="h-2.5 w-2.5 fill-current" /> }
              />
              {song.number}. {song.title}
            </div>
          </h2>
          <div className="mt-2 lg:mt-0 flex items-center gap-4">
            <Link
              href={`${song.download}`}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label={`Show notes for song ${song.title}`}
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
              href={`/${song.number}`}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label={`Show notes for song ${song.title}`}
            >
              Partitura
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export function Music() {
  
  const [currentAlbum, setCurrentAlbum] = useState(0);
  
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
                  src={ musicLinks[currentAlbum].img }
                  alt=""
                  fill
                  priority
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
              </span>
              <div className="mt-10 text-center lg:mt-12 lg:text-left">
                <p className="text-xl font-bold text-slate-900">
                  { musicLinks[currentAlbum].title }
                </p>
                <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
                  { musicLinks[currentAlbum].catDescription }
                </p>
              </div>
              <section className="mt-4">
                <ul
                  role="list"
                  className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:gap-4"
                >
                  <li className="flex">
                    <Link
                      href={musicLinks[currentAlbum].spotifyLink}
                      className="group flex items-center"
                      aria-label="spotify"
                      target="_blank"
                    >
                      <SpotifyIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                      <span className="ml-3">Spotify</span>
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href={musicLinks[currentAlbum].youtubeLink}
                      className="group flex items-center"
                      aria-label="youtube"
                      target="_blank"
                    >
                      <YoutubeIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                      <span className="ml-3">Youtube</span>
                    </Link>
                  </li>
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
                  {musicLinks[currentAlbum].songs.map((song) => (
                    <SongEntry key={song.number} song={song} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed w-full right-0 bottom-0 z-10 lg:max-w-lg lg:right-12 lg:bottom-12">
            <AudioPlayer />
          </div>
        </Container>
      </section>
    </AudioProvider>
  )
}