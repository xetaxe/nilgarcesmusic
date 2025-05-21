// alba Gonzalez hotel mèlia
// toti soler
// jo jet i maria ribot
// pol orobitg
// joan reig 27.30
// alba luz

export default function Live() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/live/hero.jpg')",
        }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-60 px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Nil Garcés</h1>
          <p className="mb-6 text-xl md:text-2xl">
            Música en viu per fer especial el teu esdeveniment
          </p>
          <div className="space-x-4">
            <a
              href="#audio"
              className="rounded-full bg-red-500 px-6 py-2 text-white hover:bg-red-600"
            >
              Escolta'm
            </a>
            <a
              href="#contacte"
              className="rounded-full bg-white px-6 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contacta'm
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mi */}
      <section id="sobre" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Sobre mi</h2>
        <p className="text-lg">
          Sóc un guitarrista professional amb més de 10 anys d’experiència
          tocant en hotels, restaurants i esdeveniments privats. El meu estil
          combina elegància, sensibilitat i passió per fer que cada actuació
          sigui inoblidable.
        </p>
      </section>

      {/* Serveis */}
      <section id="serveis" className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Serveis</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Tipus d’esdeveniments
              </h3>
              <ul className="list-inside list-disc text-gray-700">
                <li>Hotels i restaurants</li>
                <li>Bodes i celebracions</li>
                <li>Esdeveniments privats i corporatius</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Formats i estil</h3>
              <p>
                Solo, duet amb cantant, trio acústic. Estils: pop suau, jazz,
                flamenc lleuger, boleros...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Àudio / Vídeo */}
      <section id="audio" className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold">Escolta'm</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <iframe
            className="h-64 w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
          <iframe
            className="h-64 w-full"
            src="https://open.spotify.com/embed/track/xyz"
            title="Spotify player"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonis */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Testimonis</h2>
          <p className="mb-4 italic">
            “El Nil va fer màgica la nostra boda. Professional i amb molt gust.”
            – Laura & Marc
          </p>
          <p className="italic">
            “Clients encantats cada vespre al restaurant gràcies a ell.” – Hotel
            Marina
          </p>
        </div>
      </section>

      {/* Contacte */}
      <section id="contacte" className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-6 text-center text-3xl font-bold">Contacte</h2>
        <form className="space-y-4">
          <input
            className="w-full rounded border border-gray-300 p-3"
            type="text"
            placeholder="Nom"
            required
          />
          <input
            className="w-full rounded border border-gray-300 p-3"
            type="email"
            placeholder="Correu electrònic"
            required
          />
          <textarea
            className="w-full rounded border border-gray-300 p-3"
            placeholder="Missatge"
            required
          ></textarea>
          <button
            className="rounded-full bg-red-500 px-6 py-2 text-white hover:bg-red-600"
            type="submit"
          >
            Envia
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>📞 +34 600 000 000 · 📧 niltorres.music@gmail.com</p>
          <p>📍 Catalunya i voltants</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-4 text-center text-white">
        © Nil Torres · Música en directe per a moments únics
      </footer>
    </div>
  )
}
