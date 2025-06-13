'use client'

import { useState } from 'react'

// Helper to group in pairs
const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  )

export default function ReferalsCarousel({
  reviews,
}: {
  reviews: { text: string; name: string; headline: string }[]
}) {
  const [index, setIndex] = useState(0)
  const grouped = chunk(reviews, 2)

  const handlePrev = () => {
    setIndex((i) => (i - 1 + grouped.length) % grouped.length)
  }

  const handleNext = () => {
    setIndex((i) => (i + 1) % grouped.length)
  }

  return (
    <div className="relative p-4 text-gray-100">
      <div className="overflow-x-auto md:overflow-hidden px-2 md:px-6">
        <div
          className="hidden md:flex transition-transform duration-[1500ms] ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {grouped.map((pair, i) => (
            <div
              key={i}
              className="grid w-full flex-shrink-0 grid-cols-1 items-start gap-16 px-4 md:grid-cols-2 md:gap-6"
            >
              {pair.map((review, j) => (
                <div
                  key={j}
                  className="px-6 leading-7 shadow lg:px-12 "
                >
                  <p className="text-lg italic">&ldquo;{review.text}&rdquo;</p>
                  <p className="mt-4 font-semibold text-gray-400 md:mt-6">
                    {review.name}
                  </p>
                  <p className="text-gray-100">{review.headline}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex md:hidden snap-x snap-mandatory space-x-4 overflow-x-scroll">
          {reviews.map((review, i) => (
            <div key={i} className=" basis-full shrink-0 snap-start rounded-xl pb-8 shadow-md">
              <p className="text-lg italic">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 font-semibold text-gray-400 md:mt-6">
                {review.name}
              </p>
              <p className="text-gray-100">{review.headline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="bg-gray2/50 max-md:hidden absolute left-0 top-1/2 -translate-y-1/2 transform px-4 py-2 text-white"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="bg-gray2/50 max-md:hidden  absolute right-0 top-1/2 -translate-y-1/2 transform px-4 py-2 text-white"
      >
        ›
      </button>

      {/* Navigation dots */}
      <div className="mt-20 hidden md:flex justify-center space-x-4">
        {grouped.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? 'bg-gray-200' : 'bg-gray2'
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Go to review ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
