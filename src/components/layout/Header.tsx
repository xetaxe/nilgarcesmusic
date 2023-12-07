import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/ui/Logo'
import { logoFont } from '@/styles/fonts'

export function Header() {
  return (
    <div className="relative z-50 flex-none lg:pt-6 text-logo-400">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className={`h-12 w-auto ${logoFont.className} text-5xl`} />
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end text-lg gap-8 font-medium">
          <a href="#about">BIO</a>
          <a href="#music">MÚSICA</a>
          <a href="#contact">CONTACTE</a>
        </div>
        <div>
          ENG
        </div>
      </Container>
    </div>
  )
}
