import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-6 text-logo-400">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <span>
          &copy; Nil Garcés
        </span>
        <span className="flex items-center gap-2">
          <a href="">IG</a>
          <a href="">FB</a>
          <a href="">YT</a>
          <a href="">SP</a>
        </span>
      </Container>
    </footer>
  )
}
