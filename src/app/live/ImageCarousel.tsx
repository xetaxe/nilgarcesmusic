'use client'

import { useEffect, useState } from 'react'

const images = ['/live/55.jpg', '/live/33.jpg', '/live/22.jpg', '/live/44.jpg']

export default function ImageCarousel() {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full flex-shrink-0 object-cover"
            alt={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black/50 px-4 py-2 text-white"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black/50 px-4 py-2 text-white"
      >
        ›
      </button>

    </div>
      {/* Navigation dots */}
      <div className="mt-10 flex justify-center space-x-4">
        {images.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? 'bg-black2' : 'bg-gray-100'
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Go to review ${i + 1}`}
          ></button>
        ))}
      </div>
      </>
  )
}
