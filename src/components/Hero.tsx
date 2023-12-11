import { Container } from '@/components/layout/Container'
import { logoFont } from '@/styles/fonts'
import Image from 'next/image'

import backgroundImage from '@/assets/img/background.jpg'
import MobileMenu from './MobileMenu'
import { Button } from './ui/Button'
import { socialLinks } from '@/assets/socialLinks'

export function Hero() {
  return (
    <div className="w-full bg-bg-400">
      <Container className="relative h-[105vh] flex flex-wrap justify-between lg:flex-nowrap pt-6">
        <div className="lg:grow lg:basis-0">
          <a href="">
            <svg aria-hidden="true" viewBox="0 0 183 48" className={`h-12 w-auto ${logoFont.className} text-5xl`}>
              <text x="0" y="35" style={{fill: "#2d1f12"}}>
                Nil Garcés
              </text>
            </svg>
          </a>
        </div>
        <div className="hidden mt-3 pr-10 md:flex lg:grow lg:basis-0 justify-end text-lg gap-8 font-medium">
          <a href="#music" className="text-logo-400">MÚSICA</a>
          <a href="#bio" className="text-logo-400">BIO</a>
          <a href="#contact" className="text-logo-400">CONTACTE</a>
          <span className="flex justify-center gap-2 pt-1">
            {socialLinks.map((item) => (
              item.name === "Apple Music" || item.name === "Facebook" ? null :
              <a key={item.name} href={item.href} target="_blank" className="text-logo-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </span>
        </div>
        <span className="hidden md:inline-block absolute top-9 right-3 basis-0">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
              <path fill="#2d1f12" d="M480-120q-74.308 0-140-28.423t-114.423-77.154Q176.846-274.308 148.423-340 120-405.692 120-480q0-74.539 28.423-140.115 28.423-65.577 77.154-114.308Q274.308-783.154 340-811.577 405.692-840 480-840q74.539 0 140.115 28.423 65.577 28.423 114.308 77.154 48.731 48.731 77.154 114.308Q840-554.539 840-480q0 74.308-28.423 140t-77.154 114.423q-48.731 48.731-114.308 77.154Q554.539-120 480-120Zm0-39.692q35.231-45.231 58.077-88.846 22.846-43.616 37.154-97.616H384.769q15.846 57.077 37.923 100.693 22.077 43.615 57.308 85.769Zm-50.923-6q-28-33-51.116-81.577-23.115-48.577-34.423-98.885H190.154q34.385 74.616 97.5 122.385Q350.769-176 429.077-165.692Zm101.846 0Q609.231-176 672.346-223.769q63.115-47.769 97.5-122.385H616.462q-15.154 51.077-38.269 99.654-23.116 48.577-47.27 80.808ZM173.846-386.154h161.385q-4.539-24.615-6.423-47.961-1.885-23.347-1.885-45.885 0-22.538 1.885-45.885 1.884-23.346 6.423-47.961H173.846q-6.538 20.769-10.192 45.269T160-480q0 24.077 3.654 48.577 3.654 24.5 10.192 45.269Zm201.385 0h209.538q4.539-24.615 6.423-47.192 1.885-22.577 1.885-46.654t-1.885-46.654q-1.884-22.577-6.423-47.192H375.231q-4.539 24.615-6.423 47.192-1.885 22.577-1.885 46.654t1.885 46.654q1.884 22.577 6.423 47.192Zm249.538 0h161.385q6.538-20.769 10.192-45.269T800-480q0-24.077-3.654-48.577-3.654-24.5-10.192-45.269H624.769q4.539 24.615 6.424 47.961 1.884 23.347 1.884 45.885 0 22.538-1.884 45.885-1.885 23.346-6.424 47.961Zm-8.307-227.692h153.384Q734.692-690 673.5-736.231q-61.192-46.23-142.577-58.846 28 36.846 50.346 84.269 22.347 47.423 35.193 96.962Zm-231.693 0h190.462q-15.846-56.308-39.077-101.846-23.231-45.539-56.154-84.616-32.923 39.077-56.154 84.616-23.231 45.538-39.077 101.846Zm-194.615 0h153.384q12.846-49.539 35.193-96.962 22.346-47.423 50.346-84.269-82.154 12.616-142.962 59.231-60.807 46.615-95.961 122Z"/></svg>
            <span className="absolute bg-bg-400 top-[0.625rem] left-1 rounded-sm text-[0.75rem] leading-none text-logo-400">
              ENG
            </span>
          </a>
        </span>
        <MobileMenu />
        <div className="absolute top-20 inset-x-0 bottom-10 overflow-hidden">
          <Image
            className= "absolute object-cover object-top"
            src={backgroundImage}
            alt="El fred i la primavera cover image"
            fill
            priority
            unoptimized
          />
          <div className="absolute top-[10%] left-[49%] sm:left-[55%] lg:top-[20%] lg:left-1/2 text-right animate-fadein">
            <svg aria-hidden="true" viewBox="0 0 360 72" height="64" width="348" className={`hidden lg:block ${logoFont.className} text-6xl`}>
              <text x="0" y="48" style={{fill: "#2d1f12"}}>
                El fred i la primavera
              </text>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 360 72" height="108" width="348" className={` lg:hidden ${logoFont.className}  text-5xl sm:text-6xl`}>
              <text x="0" y="24" style={{fill: "#2d1f12"}}>
                El fred
              </text>
              <text x="8" y="80" style={{fill: "#2d1f12"}}>
                i la primavera
              </text>
            </svg>
            <Button href="https://open.spotify.com/intl-es/album/7rV5S7qfyVeDpGZsfrzo1c?si=IjH70tsBT8-4Xrs4-GLYdQ" target="_blank" className="hidden lg:inline-block mt-4">
              Escolta'l a Spotify
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="ml-1 inline-block">
                <path fill="#fff" d="m553.846-253.847-42.153-43.384 152.77-152.77H180.001v-59.998h484.462l-152.77-152.77 42.153-43.384L779.999-480 553.846-253.847Z"/>
              </svg>
              </Button>
          </div>

          <div className="w-full px-4 lg:hidden absolute bottom-[14.3%] lg:left-1/2 text-center animate-fadein">
            <Button href="https://open.spotify.com/intl-es/album/7rV5S7qfyVeDpGZsfrzo1c?si=IjH70tsBT8-4Xrs4-GLYdQ" target="_blank" className="inline-block w-full max-w-sm mt-4">
              Escolta'l a Spotify
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="ml-2 inline-block">
                <path fill="#fff" d="m553.846-253.847-42.153-43.384 152.77-152.77H180.001v-59.998h484.462l-152.77-152.77 42.153-43.384L779.999-480 553.846-253.847Z"/>
              </svg>
              </Button>
          </div>

          <div className="absolute inset-x-0 h-20 bg-gradient-to-b from-[#d1dfe8]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#d1dfe8]" />
          <div className="absolute top-0 left-0 h-full lg:w-20 bg-gradient-to-r from-[#d1dfe8]" />
          <div className="absolute top-0 right-0 h-full lg:w-20 bg-gradient-to-l from-[#d1dfe8]" />
        </div>
      </Container>
    </div>
  )
}
