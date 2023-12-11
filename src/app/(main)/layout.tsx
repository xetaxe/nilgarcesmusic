import Link from 'next/link'

import { Container } from '@/components/Container'
import { socialLinks } from '@/assets/socialLinks'
import MobileMenu from '@/components/MobileMenu'
import { logoFont } from '@/styles/fonts'
import { EngIcon } from '@/assets/icons'

function Header() {
  return (
    <div className="w-full bg-bg-400">
      <Container className="relative flex justify-between pt-6">
        <div className="">
          <Link href="">
            <svg aria-hidden="true" viewBox="0 0 183 48" className={`h-12 w-auto ${logoFont.className} text-5xl`}>
              <text x="0" y="35" style={{fill: "#2d1f12"}}>
                Nil Garcés
              </text>
            </svg>
          </Link>
        </div>
        <div className="hidden mt-3 pr-10 md:flex lg:grow lg:basis-0 justify-end text-lg gap-8 font-medium">
          <Link href="#music" className="text-logo-400">MÚSICA</Link>
          <Link href="#bio" className="text-logo-400">BIO</Link>
          <Link href="#contact" className="text-logo-400">CONTACTE</Link>
          <span className="flex justify-center gap-2 pt-1">
            {socialLinks.map((item) => (
              item.name === "Apple Music" || item.name === "Facebook" ? null :
              <Link key={item.name} href={item.href} target="_blank" className="text-logo-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </span>
        </div>
        <Link href="" className="hidden md:inline-block absolute top-9 right-3 basis-0">
          <EngIcon />
        </Link>
        <MobileMenu />
      </Container>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="border-logo-400 border-solid border-t mx-12">
        </div>
        <div className="mx-auto max-w-7xl px-8 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <Link key={item.name} href={item.href} target="_blank" title={item.name} className="text-logo-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-logo-400">
              &copy; {new Date().getFullYear()} Nil Garcés
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">
        {children}
      </main>
      <Footer/>
    </>
  )
}