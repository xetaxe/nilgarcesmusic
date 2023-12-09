import { Container } from '@/components/layout/Container'
import { socialLinks } from '@/assets/socialLinks'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-auto">
        {children}
      </main>
      <footer className="bg-white">
        <Container>
          <div className="border-gray-400 border-solid border-t mx-12">
          </div>
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-500">
                &copy; {new Date().getFullYear()} Nil Garcés
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}