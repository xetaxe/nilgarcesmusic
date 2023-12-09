import Image from 'next/image'
import nilGarcesImage from '@/assets/img/nilgarces.jpg'
import { Container } from './layout/Container'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-6 text-center">
      <Container>
        <h1 className="mx-auto max-w-7xl font-bold text-2xl text-center">
          Contacte
        </h1>
        <div className="py-4">
          <p className="py-4">
            <strong>
              <a href="mailto:xetaxe@gmail.com">xetaxe@gmail.com</a>
            </strong>
            <span className=""> → Contacte directe
            </span>
          </p>
          <p className="py-4">
            O qualsevol de les xarxes socials
          </p>
        </div>
      </Container>
    </section>
  )
}
