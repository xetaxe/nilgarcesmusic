import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import backgroundImage from '@/images/background2.jpg'

export default function NotFound() {
  return (
    <div className="relative flex h-full items-center py-20 sm:py-36">
      <div className="absoluteinset-x-0 bottom-10 overflow-hidden">
        <Image
          className= "absolute object-cover object-top"
          src={backgroundImage}
          alt="El fred i la primavera cover image"
          fill
          priority
          unoptimized
        />
      </div>
      <Container className="relative flex w-full flex-col items-center">
        <p className=" text-2xl tracking-tight text-blue-900">
          404
        </p>
        <h1 className="mt-4  text-4xl font-medium tracking-tighter text-logo-400 sm:text-5xl">
          La pàgina no existeix
        </h1>
        <Button href="/" className="mt-8">
          Vés a la pàgina principal
        </Button>
      </Container>
    </div>
  )
}
