import { Footer } from '@/components/layout/Footer'

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
