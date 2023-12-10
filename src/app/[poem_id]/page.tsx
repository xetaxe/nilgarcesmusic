import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import left from '@/assets/img/left.jpg'
import background2 from '@/assets/img/background2.jpg'
import background3 from '@/assets/img/background3.jpg'
import background4 from '@/assets/img/background4.jpg'
import { poems } from '@/assets/poems'
import { logoFont } from '@/styles/fonts'

export async function generateStaticParams() {
 
  return poems.map((poem) => ({
    poem_id: poem.id
  }))
}

export default function Page({ params }: { params: { poem_id: string } }) {

  const { poem_id } = params
  const title = poems.find((poem) => poem.id === poem_id)!.title
  const content = poems.find((poem) => poem.id === poem_id)!.content

  return (
    <>
      <div className="absolute z-10 inset-x-0 top-6 text-center">
        <a href="." className="inline-block">
          <svg aria-hidden="true" viewBox="0 0 183 48" className={`h-12 w-auto ${logoFont.className} text-5xl`}>
            <text x="0" y="35" style={{fill: "#2d1f12"}}>
              Nil Garcés
            </text>
          </svg>
        </a>
      </div>
      <div className="relative flex h-full items-center pt-32 pb-16">
         <picture>
          <source media="(max-width: 540px)" srcSet={background2.src} />
          <source media="(max-width: 768px)" srcSet={left.src} />
          <source media="(max-width: 1024px)" srcSet={background3.src} />
          <Image src={background4} alt="alt text here" fill className="bg-repeat object-fill" />
        </picture>
        <Container className="relative flex w-full flex-col items-center justify-center">
          <h1 className="mt-4 text-2xl font-medium tracking-tighter text-logo-400 sm:text-3xl text-center mb-4">
            {title}
          </h1>
          <div className="max-w-[80ch] whitespace-break-spaces">
            {content}
          </div>
        </Container>
      </div>
    </>
  )
}
