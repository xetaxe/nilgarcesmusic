import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      {/* <img
        srcSet="/img/dianne_guilianelli-small.jpg 600w, /img/dianne_guilianelli-mid.jpg 1024w, /img/dianne_guilianelli-large.jpg 1120w"
        // sizes="(min-width: 1024px) 1024px, (min-width: 600px) 700px, 400px"
        src="/img/dianne_guilianelli-mid.jpg"
        alt=""
      /> */}
      <Hero />
      {/* <Speakers /> */}
      <Schedule />
      <Sponsors />
      <Newsletter />
    </>
  )
}
