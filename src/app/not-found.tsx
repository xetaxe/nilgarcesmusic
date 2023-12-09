import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import backgroundLeft from '@/assets/img/left.jpg'
import backgroundRight from '@/assets/img/right.jpg'

export default function NotFound() {
  return (
    <div className="relative flex h-full items-center py-20 sm:py-36">
      <div className="absolute inset-y-0 left-0 right-0 sm:right-1/2 overflow-hidden">
        <Image
          className= "absolute object-cover object-top"
          src={backgroundLeft}
          alt="Marge esquerre"
          fill
          priority
          unoptimized
        />
      </div>
      <div className="hidden sm:block absolute inset-y-0 left-1/2 right-0 overflow-hidden">
        <Image
          className= "absolute object-cover object-top"
          src={backgroundRight}
          alt="Marge dret"
          fill
          priority
          unoptimized
        />
      </div>
      <Container className="relative flex w-full flex-col items-center">
        <p className=" text-2xl tracking-tight text-blue-900">
          404
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tighter text-logo-400 sm:text-5xl text-center">
          La pàgina no existeix
        </h1>
        <Button href="/" className="mt-8">
          Vés a la pàgina principal
        </Button>
      </Container>
    </div>
  )
}
