import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <main className="flex-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}
