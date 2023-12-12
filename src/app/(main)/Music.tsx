"use client"

import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { SongPlayButton } from '@/components/music/SongPlayButton'
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
    <div aria-labelledby={`song-${song.number}-title`} className="py-1 md:py-2">
      <div id={`song-${song.number}-title`} className="mt-2 font-bold text-slate-900 flex  justify-between ">
        <span className="flex gap-2 items-center">
          <SongPlayButton
            song={song}
            className="flex items-center gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
            playing={ <PauseIcon className="h-3 w-2.5 fill-current" /> }
            paused={ <PlayIcon className="h-3 w-3 fill-current" /> }
            title="Reproduir"
          />
          <span>
            {song.number}. {song.title}
          </span>
        </span>
        <span className="flex items-center gap-4">
          <Link
            href={`${song.download}`}
            className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
            aria-label={`Download song ${song.title}`}
            title="Descarregar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-current" width={28} height={28}>
              <path d="M480-336.923 338.461-478.462l28.308-28.769L460-414v-346h40v346l93.231-93.231 28.308 28.769L480-336.923ZM264.615-200Q237-200 218.5-218.5 200-237 200-264.615v-96.923h40v96.923q0 9.23 7.692 16.923Q255.385-240 264.615-240h430.77q9.23 0 16.923-7.692Q720-255.385 720-264.615v-96.923h40v96.923Q760-237 741.5-218.5 723-200 695.385-200h-430.77Z"/>
            </svg>
          </Link>
          <Link
            href={`${song.sheet}`}
            className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
            aria-label={`See sheet music of ${song.title}`}
            title="Partitura"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.94" className="fill-current" width={24} height={24}>
              <path d="M51,45.64q3.72-4.23,7.69-8.06a45.85,45.85,0,0,1-2.19-12c-.23-7.24.88-14.93,5-21C62.68,2.79,64.69-.25,66.85,0c1.84.22,2.82,2.81,3.55,4.3,4.93,10,5.94,20.55.25,32A46,46,0,0,1,62.79,47.1l2.38,12.1q.43-.09.9-.15a14.3,14.3,0,0,1,8.56,1.42c5.6,3,9.08,10.58,8.52,16.83-.5,5.51-3,9.31-7.15,12.64a24.06,24.06,0,0,1-4.25,2.79l2.87,14.62a26.62,26.62,0,0,1,.13,3.75c-.35,7.71-6.35,12.16-13.79,11.82-5.73-.36-11.67-4.9-11.7-10.64-.07-11.14,15-10.61,13.9-.42-.32,3-2.51,5.65-7.21,5.82,3.79,6.28,15.52,1.79,16.31-6.45a17.1,17.1,0,0,0-.69-6.24L69.4,93.69a16.82,16.82,0,0,1-3.07.68,23.71,23.71,0,0,1-18.15-5.66,26,26,0,0,1-8-24.36c1.5-7.64,5.91-13.07,10.87-18.71ZM2,18.94a2,2,0,0,1,0-4.06H46.84c-.21,1.35-.37,2.7-.47,4.06Zm82.39-4.06h36.43a2,2,0,1,1,0,4.06H84.79c-.06-1.37-.18-2.72-.37-4.06ZM2,108.06a2,2,0,1,1,0-4H40.58a17.75,17.75,0,0,0-1.25,4Zm82.47-4h36.35a2,2,0,1,1,0,4H85L85,107.2a10.53,10.53,0,0,0-.19-1.83L84.5,104ZM2,93.2a2,2,0,1,1,0-4h33.1a34.8,34.8,0,0,0,3,4Zm88.15-4h30.67a2,2,0,1,1,0,4H87.41a25.91,25.91,0,0,0,2.48-3.55c.1-.16.19-.33.29-.5ZM2,78.35a2,2,0,1,1,0-4H29.66a39.64,39.64,0,0,0,.78,4Zm91.43-4h27.39a2,2,0,1,1,0,4H93.4v-.12a25.74,25.74,0,0,0,0-3.93ZM2,63.5a2,2,0,0,1,0-4.06H30.72c-.27,1-.5,1.93-.7,2.93-.07.37-.14.75-.2,1.13Zm86.28-4.06h32.54a2,2,0,0,1,0,4.06H90.65c-.11-.23-.22-.46-.34-.69a27.41,27.41,0,0,0-2-3.37ZM2,48.64a2,2,0,1,1,0-4H38.47c-1,1.28-1.92,2.62-2.83,4Zm75.77-4h43.05a2,2,0,1,1,0,4H75l.36-.47q1.27-1.72,2.43-3.58ZM2,33.79a2,2,0,1,1,0-4.05H46.51c.13,1.16.31,2.34.53,3.52l.1.53Zm81.84-4.05h37a2,2,0,1,1,0,4.05H82.79q.64-2,1.08-4.05Zm-23,6.35C58.77,28.56,59.08,19,64.41,12.77S75.63,15,67.86,27.44a48.32,48.32,0,0,1-7,8.65Zm0,13c-.67.67-1.36,1.34-2.06,2-4,3.84-8,7.52-11,13a20.63,20.63,0,0,0-1.5,17.24c2.4,7.49,14,12.22,22.66,10L64.41,67.66a9.81,9.81,0,0,0-7.1,8,8.71,8.71,0,0,0,3.08,7.82,18.2,18.2,0,0,0,1.81,1.37c1.24.81.64,1.4-.53,1.05-3.87-1.29-6.19-3.44-7.43-6.18-3.67-8.07.83-17.08,8.67-19.92L60.84,49.09ZM71.31,90.48l.12-.06c4.8-2.21,7.7-8.37,6.5-14a12,12,0,0,0-6.62-8.23,9.08,9.08,0,0,0-4.56-1l4.56,23.21Z"/>
            </svg>
          </Link>
          <Link
            href={`/${song.poem}`}
            className={`flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 ${song.poem ? "" : "hidden"}`}
            aria-label={`See poem of ${song.title}`}
            title="Poema (català)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height={26} viewBox="0 -960 960 960" width={26} className="fill-current">
              <path d="M304.615-120q-43.384 0-74-30.615-30.615-30.616-30.615-74V-720q0-50.308 34.846-85.154T320-840h440v550.769q-26.538 0-45.577 19.039-19.038 19.038-19.038 45.577 0 26.538 19.038 45.577Q733.462-160 760-160v40H304.615ZM240-305.462q13.231-11.615 29.385-17.692 16.153-6.077 35.23-6.077h30.77V-800H320q-32.692 0-56.346 23.654Q240-752.692 240-720v414.538Zm135.385-23.769H720V-800H375.385v470.769ZM240-305.462v-479.153 479.153ZM304.615-160h374.539q-11.385-13.231-17.577-29.269-6.192-16.039-6.192-35.346 0-18.308 6.077-34.846 6.076-16.539 17.692-29.77H304.615q-27.538 0-46.077 19.039Q240-251.154 240-224.615q0 27.538 18.538 46.077Q277.077-160 304.615-160Z"/>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  )
}

export function Music() {
  
  const [currentAlbum, setCurrentAlbum] = useState(0);
  
  return (
    <AudioProvider>
      <div className="bg-bg-300 py-8 md:py-14 bg-gradient-to-b from-[#d1dfe8] sc">
      </div>
      <section id="music" className="bg-gradient-to-b from-[#e7ecf2] bg-bg-200 w-full py-8 px-4 lg:px-8">
        <h1 id="music" className="mx-auto max-w-7xl font-bold text-2xl text-center">
          Música
        </h1>
        <div className="mx-auto max-w-[80ch] text-justify py-8">
          Totes les pistes d'àudio es poden reproduir i descarregar lliurement en bona qualitat més avall. També estan disponibles en PDF les partitures que he pogut escriure.<br/><br/>
          
          Si podeu i voleu fer un donatiu per ajudar a mantenir viu aquest projecte, ho podeu fer des d'<Link href="#donate" className=" font-bold text-slate-900 underline">aquí ↓</Link>.
        </div>
        <div className="mx-auto flex gap-4 pb-4 my-4 over md:justify-center overflow-x-scroll px-2">
          {musicLinks.map((album, index) => (
            <div className={`z-10 flex flex-col p-4 lg:border-slate-200 cursor-pointer rounded-lg ${index === currentAlbum ? "bg-bg-500": "bg-bg-400"}`} key={album.title} onClick={() => setCurrentAlbum(index)}>
              <span className="relative mx-auto block w-40 overflow-hidden rounded-md bg-slate-200 shadow-md shadow-slate-200 aspect-square" aria-label={album.title}
              >
                <Image
                  className="w-full"
                  src={ album.img }
                  alt=""
                  fill
                  priority
                />
                <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/10" />
              </span>
              <div className="mt-2 text-center">
                <p className="font-bold text-slate-900">
                  { album.title }
                </p>
                <p className="text-xs font-medium text-slate-700">
                  { album.year }
                </p>
              </div>
            </div>
          ))}
        </div>
        <Container className="mx-auto max-w-7xl flex flex-col md:flex-row justify-center bg-bg-200 rounded-md md:py-4">
          <div className="md:basis-80 lg:basis-96 lg:items-start lg:overflow-y-auto xl:basis-120">
            <div className="z-10 flex flex-col mx-auto sm:px-4 py-8 lg:border-slate-200">
              <span
                className="relative mx-auto block w-64 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 md:w-48 lg:w-64 sm:rounded-xl lg:rounded-2xl aspect-square"
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
              <div className="mt-8 lg:mt-12 text-center">
                <p className="text-xl font-bold text-center text-slate-900">
                  { musicLinks[currentAlbum].title }
                </p>
                <p className="mt-3 font-medium leading-8 text-slate-700">
                  { musicLinks[currentAlbum].catDescription }
                </p>
              </div>
              <section className="mt-2">
                <ul
                  role="list"
                  className="mt-4 flex flex-wrap content-start justify-center gap-6 xsm:gap-10 md:gap-6 md:text-sm text-base font-medium leading-7 text-slate-700"
                >
                  <li className="flex">
                    <Link
                      href={musicLinks[currentAlbum].spotifyLink}
                      className="group flex items-center"
                      aria-label="spotify"
                      title="Spotify link"
                      target="_blank"
                    >
                      <SpotifyIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                      <span className="ml-1">Spotify</span>
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href={musicLinks[currentAlbum].youtubeLink}
                      className="group flex items-center"
                      aria-label="youtube"
                      title="Youtube link"
                      target="_blank"
                    >
                      <YoutubeIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                      <span className="ml-1">Youtube</span>
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="./#donate"
                      className="group flex items-center"
                      aria-label="compra"
                      title="Compra"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="h-7 w-7 fill-slate-400 group-hover:fill-slate-600">
                        <path d="M267.691-167.847v-315.227h73.616q6.231 0 12.654 1.307 6.423 1.308 12.654 3.308l258.922 95.692q15.923 5.769 25.962 19.731 10.038 13.961 10.038 30.269 0 16-10.846 25.923-10.846 9.923-25.615 9.923H548.54q-12.693 0-23.655-1.462-10.962-1.462-22.27-5.769l-67.847-25.385-12.231 34.384 77.77 27q10.462 3.693 22.539 5.154 12.078 1.462 23.925 1.462h240.151q29.692 0 51.384 20.5 21.693 20.5 21.693 51.038L560.615-83.846l-292.924-84.001ZM67.694-100.001v-383.073h139.999v383.073H67.694Zm566.152-352.308L475.539-605.462q-28.693-27.692-48.269-61.692-19.577-34-19.577-73.922 0-49.615 34.653-84.269 34.654-34.654 84.269-34.654 32.385 0 59.808 15.616 27.423 15.616 47.423 39.769 20-24.153 47.423-39.769 27.423-15.616 59.807-15.616 49.615 0 84.269 34.654t34.654 84.269q0 39.922-19.27 73.922-19.269 34-47.961 61.692L633.846-452.309Z"/>
                      </svg>
                      <span className="ml-1">Compra</span>
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="lg:relative  grow">
            <div className="relative">
              <div className="sm:px-4 py-4 md:pt-8">
                <Container>
                  <h1 className="text-xl text-center font-bold leading-7 text-slate-900">
                    Cançons
                  </h1>
                </Container>
                <div className="divide-y mt-2 lg:mt-4">
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
        <div id="donate" className="mx-auto max-w-[80ch] text-justify py-8">
          <h2 className=" italic font-bold leading-7 text-slate-600 mb-4">
            Contribueix
          </h2>
          Nil Garcés és un projecte musical totalment autogestionat. A dia d'avui, no hi ha concerts previstos, tot i ser aquests la principal font d'ingressos de la major part d'artistes. Si aquestes composicions han pogut veure la llum, és gràcies a les persones que hi han cregut i col·laborat.<br/><br/>
          Qualsevol contribució econòmica m'ajuda a cobrir despeses de futures creacions i altres aspectes logístics: publicitat, web, etc. Aquests diners també ajuden a tots aquells artistes locals involucrats en l'elaboració de nous treballs, per exemple en els processos de disseny, producció o gravació.<br/><br/>
          Gràcies per fer-ho possible.
        </div>
      </section>
    </AudioProvider>
  )
}