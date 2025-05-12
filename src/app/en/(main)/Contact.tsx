import { Container } from '@/components/Container'

export function Contact() {
  return (
    <section id="contact" className="bg-white text-center py-12">
      <Container className="mb-8">
        <h1 className="mx-auto max-w-7xl font-bold text-2xl text-center mb-8">
          Contact
        </h1>
          <p className="py-4">
            <strong>
              <a href="mailto:nilgarcesmusic@gmail.com">nilgarcesmusic@gmail.com</a>
            </strong>
            <span className=""> → Direct contact
            </span>
          </p>
          <p className="py-4">
            Or message me on social media
          </p>
      </Container>
    </section>
  )
}
