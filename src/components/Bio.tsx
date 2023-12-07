import Image from 'next/image'
import nilGarcesImage from '@/images/nilgarces.jpg'

export function Bio() {
  return (
    <>
      <div className="bg-bg-200 py-10 sm:py-20 bg-gradient-to-b from-[#d1dfe8] sc">
      </div>
      <div id="bio" className="bg-bg-200 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-col lg:flex-row justify-center max-w-2xl gap-16 lg:mx-0 lg:max-w-none">
            <div className="mx-auto lg:pr-4 w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl px-6 py-48 sm:py-56 lg:py-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={nilGarcesImage}
                  alt="Nil Garcés image"
                  fill
                />
              </div>
            </div>
            <div className="mx-auto">
              <div className="text-base leading-7 text-gray-900 lg:max-w-lg">
                <div className="max-w-xl">
                  <p className="">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                    semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                    auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                    hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
