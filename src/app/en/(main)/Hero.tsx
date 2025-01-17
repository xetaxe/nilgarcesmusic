import Image from 'next/image'

import { Container } from '@/components/Container'
import { logoFont } from '@/styles/fonts'
import backgroundImage from '@/assets/img/background.jpg'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <div className="w-full bg-bg-400">
      <Container className="relative h-screen">
        <div className="absolute top-0 inset-x-0 bottom-10 overflow-hidden">
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
              Listen on Spotify
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="ml-1 inline-block">
                <path fill="#fff" d="m553.846-253.847-42.153-43.384 152.77-152.77H180.001v-59.998h484.462l-152.77-152.77 42.153-43.384L779.999-480 553.846-253.847Z"/>
              </svg>
            </Button>
          </div>

          <div className="w-full px-4 lg:hidden absolute bottom-1/4 lg:left-1/2 text-center animate-fadein">
            <Button href="https://open.spotify.com/intl-es/album/7rV5S7qfyVeDpGZsfrzo1c?si=IjH70tsBT8-4Xrs4-GLYdQ" target="_blank" className="inline-block w-full max-w-sm mt-4">
              Listen on Spotify
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
