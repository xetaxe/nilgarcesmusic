import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Bio } from '@/components/Bio'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Schedule />
      <Sponsors />
      <Newsletter />
    </>
  )
}
