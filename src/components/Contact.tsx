import Image from 'next/image'
import nilGarcesImage from '@/assets/img/nilgarces.jpg'
import { Container } from './layout/Container'

export function Contact() {
  return (
    <>
      {/* <div className="bg-white py-4 sm:py-8 bg-gradient-to-b from-[#d1dfe8] sc">
      </div> */}
      <section id="contact" className="bg-white text-center py-12">
        <Container className="mb-8">
          <h1 className="mx-auto max-w-7xl font-bold text-2xl text-center mb-8">
            Contacte
          </h1>
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
        </Container>
      </section>
    </>
  )
}
