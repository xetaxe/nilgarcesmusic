import { Container } from '@/components/Container'

export function Contact() {
  return (
    <section id="contact" className="bg-white text-center py-12">
      <Container className="mb-8">
        <h1 className="mx-auto max-w-7xl font-bold text-2xl text-center mb-8">
          Contacte
        </h1>
          <p className="py-4">
            <strong>
              <a href="mailto:nilgarcesmusic@gmail.com">nilgarcesmusic@gmail.com</a>
            </strong>
          </p>
          <p className="py-4">
            O qualsevol de les xarxes socials
          </p>
      </Container>
    </section>
  )
}
