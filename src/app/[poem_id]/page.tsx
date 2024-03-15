import { Container } from '@/components/Container'
import Image from 'next/image'
import left from '@/assets/img/left.jpg'
import background2 from '@/assets/img/background2.jpg'
import background3 from '@/assets/img/background3.jpg'
import background4 from '@/assets/img/background4.jpg'
import { poems } from '@/data/poems'
import { logoFont } from '@/styles/fonts'
import Link from 'next/link'

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
        <Link href="" className="inline-block">
          <svg aria-hidden="true" viewBox="0 0 183 48" className={`h-12 w-auto ${logoFont.className} text-5xl`}>
            <text x="0" y="35" style={{fill: "#2d1f12"}}>
              Nil Garcés
            </text>
          </svg>
        </Link>
      </div>
      <div className="relative h-screen max-h-screen bg-gradient-to-r from-[#F7F3F1] from-45% via-[#F7F3F1] to-[#DCE3E9] to-55%">
        <div className="absolute inset-0 max-w-5xl mx-auto bg-gradient-to-r to-[#DCE3E9]">
          <picture>
            <source media="(max-width: 500px)" srcSet={background2.src} />
            <source media="(max-width: 700px)" srcSet={left.src} />
            <source media="(max-width: 900px)" srcSet={background3.src} />
            <Image src={background4} alt="alt text here" fill className="bg-repeat object-fill" />
          </picture>
          <Container className="absolute lg:inset-y-0 left-0 w-8 mx-auto bg-gradient-to-r from-[#F7F3F1]"></Container>
          <Container className="absolute lg:inset-y-0 right-0 w-8 mx-auto bg-gradient-to-l from-[#DCE3E9]"></Container>
          <Container className="absolute inset-0 mt-32 pb-16 flex w-full flex-col items-center overflow-y-auto no-scrollbar">
            <h1 className="mt-4 text-2xl font-medium tracking-tighter text-logo-400 sm:text-3xl text-center mb-4">
              {title}
            </h1>
            <div className="max-w-[80ch] whitespace-break-spaces">
              {content}
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
