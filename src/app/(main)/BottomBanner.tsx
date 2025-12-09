'use client'

import { useState } from 'react'

export default function BottomBanner() {
  const [displayBanner, setDisplayBanner] = useState(true)

  return (
    <>
      {displayBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex animate-fadein items-center justify-end bg-bg-500 px-3 py-3 text-center shadow-lg md:hidden">
          <span className='grow'>
            Accedeix a la tablatura de "Mii Channel Theme" fent clic
            <a
              href="https://docs.google.com/file/d/13aniMApcODdivDr23ERIXsn3n9shMGfZ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 font-semibold underline"
            >
              aquí ↗
            </a>
          </span>
          <span className="font-regular px-2 text-xl">
            <button onClick={() => setDisplayBanner(false)}>✖</button>
          </span>
        </div>
      )}
    </>
  )
}
