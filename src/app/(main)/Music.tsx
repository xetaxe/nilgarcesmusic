"use client"

import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { AudioProvider, useAudioPlayer } from '@/components/AudioProvider'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import { DonateIcon, DownloadIcon, PauseIcon, PlayIcon, PoemIcon, SheetIcon, SpotifyIcon, YoutubeIcon } from '@/assets/icons'
import { type Song, albums } from '@/data/albums'
import { useState } from 'react'

function SongEntry({ song }: { song: Song }) {

  let player = useAudioPlayer(song)

  return (
    <div aria-labelledby={`song-${song.number}-title`} className="py-1 md:py-2">
      <div id={`song-${song.number}-title`} className="mt-2 font-bold text-slate-900 flex  justify-between ">
        <span className="flex gap-2 items-center">
          <button type="button" onClick={() => player.toggle()} aria-label={`${player.playing ? 'Pause' : 'Play'} song ${ song.title }`} className="flex items-center gap-x-3 text-sm font-bold leading-6 text-slate-400 hover:text-slate-600 active:text-slate-600"
            title="Reproduir">
            {player.playing 
              ? <PauseIcon className="h-3 w-2.5 fill-current" /> 
              : <PlayIcon className="h-3 w-3 fill-current" /> 
            }
          </button>
          <span>
            {song.number}. {song.title}
          </span>
        </span>
        <span className="flex items-center gap-4">
          <Link
            href={`${song.download}`}
            className={`flex items-center text-sm font-bold leading-6 text-slate-400 hover:text-slate-600 active:text-slate-600 ${song.download ? "" : "hidden"}`}
            aria-label={`Download song ${song.title}`}
            title="Descarregar"
          >
            <DownloadIcon className="h-7 w-7"/>
          </Link>
          <Link
            href={`${song.sheet}`}
            className={`flex items-center text-sm font-bold leading-6 text-slate-400 hover:text-slate-600 active:text-slate-600 ${song.sheet ? "" : "hidden"}`}
            aria-label={`See sheet music of ${song.title}`}
            title="Partitura"
            target="_blank"
          >
            <SheetIcon className="h-6 w-6"/>
          </Link>
          <Link
            href={`/${song.poem}`}
            className={`flex items-center text-sm font-bold leading-6 text-slate-400 hover:text-slate-600 active:text-slate-600 ${song.poem ? "" : "hidden"}`}
            aria-label={`See poem of ${song.title}`}
            title="Poema (català)"
          >
            <PoemIcon className="h-6 w-6" />
          </Link>
        </span>
      </div>
    </div>
  )
}

export function Music() {
  
  const [currentAlbum, setCurrentAlbum] = useState(0);
  const [currency, setCurrency] = useState<"€" | "$">("€");
  const [donateString, setDonateString] = useState("0");

  const donateValue = Number.isNaN(parseFloat(donateString))
  ? 0
  : parseFloat(donateString)
  
  return (
    <AudioProvider>
      <div className="bg-bg-300 py-8 md:py-14 bg-gradient-to-b from-[#d1dfe8] sc">
      </div>
      <section id="music" className="bg-gradient-to-b from-[#e7ecf2] bg-bg-200 w-full pb-12">
        <Container>
          <h1 id="music" className="font-bold text-2xl text-center">
            Música
          </h1>

          <div className="mx-auto max-w-[80ch] text-justify py-8">
            Totes les pistes d'àudio es poden reproduir i descarregar lliurement en bona qualitat més avall. També estan disponibles en PDF les partitures que he pogut escriure.<br/><br/>
            
            Si podeu i voleu fer un donatiu per ajudar a mantenir viu aquest projecte, ho podeu fer des d'<Link href="#donate" className=" font-bold text-slate-900 underline">aquí ↓</Link>.
          </div>

          <div className="flex gap-4 pb-4 my-4 lg:justify-center overflow-x-scroll">
            {albums.map((album, index) => (
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

          <div className=" flex flex-col md:flex-row justify-center bg-bg-200 rounded-md p-4 gap-4">
            <div className="md:basis-80 lg:basis-96 lg:overflow-y-auto xl:basis-120">
              <div className="z-10 flex flex-col mx-auto py-4 lg:border-slate-200">
                <span
                  className="relative mx-auto block w-64 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 md:w-48 lg:w-64 sm:rounded-xl lg:rounded-2xl aspect-square"
                  aria-label="Homepage"
                >
                  <Image
                    className="w-full"
                    src={ albums[currentAlbum].img }
                    alt=""
                    fill
                    priority
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
                </span>
                <div className="mt-8 lg:mt-12 text-center">
                  <p className="text-xl font-bold text-center text-slate-900">
                    { albums[currentAlbum].title }
                  </p>
                  <p className="mt-3 font-medium leading-8 text-slate-700">
                    { albums[currentAlbum].catDescription }
                  </p>
                </div>
                <section className="mt-2">
                  <ul
                    role="list"
                    className="mt-4 flex flex-wrap content-start justify-center gap-6 xsm:gap-10 md:gap-6 md:text-sm text-base font-medium leading-7 text-slate-700"
                  >
                    <li className="flex">
                      <Link
                        href={albums[currentAlbum].spotifyLink}
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
                        href={albums[currentAlbum].youtubeLink}
                        className="group flex items-center"
                        aria-label="youtube"
                        title="Youtube link"
                        target="_blank"
                      >
                        <YoutubeIcon className="h-8 w-8 fill-slate-400 hover:fill-slate-600" />
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
                        <DonateIcon className="h-7 w-7 fill-slate-400 hover:fill-slate-600" />
                        <span className="ml-1">Compra</span>
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div className="lg:relative grow">
              <div className="relative">
                <div className="sm:px-4 py-4 md:pt-8">
                  <h1 className="text-xl text-center font-bold leading-7 text-slate-900">
                    Cançons
                  </h1>
                  <div className="divide-y mt-2 lg:mt-4">
                    {albums[currentAlbum].songs.map((song) => (
                      <SongEntry key={song.number} song={song} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed w-full right-0 bottom-0 z-10 lg:max-w-lg lg:right-12 lg:bottom-12">
            <AudioPlayer />
          </div>

          <div id="donate" className="mx-auto max-w-[80ch] text-justify py-8">
            <h2 className=" italic font-bold leading-7 text-slate-600 mb-4">
              Donatius
            </h2>
            Nil Garcés és un projecte musical totalment autogestionat. A dia d'avui, no hi ha concerts previstos, tot i ser aquests la principal font d'ingressos de la major part d'artistes. Si aquestes composicions han pogut veure la llum, és gràcies a les persones que hi han cregut i col·laborat.<br/><br/>
            Qualsevol contribució econòmica m'ajuda a cobrir despeses de futures creacions i altres aspectes logístics: publicitat, web, etc. Aquests diners també ajuden a tots aquells artistes locals involucrats en l'elaboració de nous treballs, per exemple en els processos de disseny, producció o gravació.<br/><br/>
            Podeu fer-ho via <Link href="https://ko-fi.com/nilgarces" className=" font-bold text-slate-900 underline" target="_blank">Ko-fi</Link> (i desbloquejar alguns continguts extra) o directament des de baix ↓.<br/><br/>
            Gràcies per fer-ho possible.
          </div>
          {/* <iframe id='kofiframe' src='https://ko-fi.com/nilgarces/?hidefeed=true&widget=true&embed=true&preview=true' className="mx-auto border-none w-full pt-6 rounded-lg bg-white max-w-lg"  height="712" title='nilgarces'></iframe> */}
          <div className="mt-4">
            <form action="https://www.paypal.com/donate" method="post" target="_top" className="flex flex-col gap-4 max-w-sm mx-auto">
              <span className="flex justify-center gap-2 px-8">
                <span className="rounded-xl p-2 font-semibold invisible">{currency}</span>
                <input type="text" className="rounded-xl p-2 font-semibold text-center text-xl grow min-w-0" value={donateString} onChange={(e) => setDonateString(e.currentTarget.value)
                } />
                <span className="rounded-xl px-2 py-2 font-semibold text-xl bg-slate-200 cursor-pointer" onClick={() => setCurrency((prev) => prev === "€" ? "$" : "€")}>{currency}</span>
              </span>
              <input type="hidden" name="hosted_button_id" value="HAY35FC9W2ZDS" />
              <span className="flex flex-col sm:flex-row sm:gap-4 items-center sm:justify-center">
                {
                  currency === "€"
                    ?
                <span>
                  Donatiu final: <b>{Math.max(Math.round((0.956 * donateValue - 0.39) * 100) / 100, 0) } {currency}</b>
                </span>
                :
                <span>
                  Donatiu final: <b>{Math.max(Math.round((0.956 * donateValue - 0.49) * 100) / 100, 0) } {currency}</b>
                </span>
                }
                <span className="text-xs">
                  (tarifa Paypal: {currency === "€" ? "0.39€" : "0.49$"} fix + 4.4%)
                </span>  
              </span>
              <input type="submit" name="submit" value="Fer donatiu" title="PayPal" alt="Donar a través de PayPal" className="inline-flex justify-center rounded-2xl bg-logo-400 hover:bg-logo-300 active:bg-logo-300 p-4 text-base font-semibold text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 active:text-white/70 cursor-pointer w-full" />
            </form>
          </div>
        </Container>
      </section>
    </AudioProvider>
  )
}