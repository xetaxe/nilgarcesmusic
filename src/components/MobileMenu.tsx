"use client"

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { socialLinks } from '@/assets/socialLinks'
import Link from 'next/link'
import { CatIcon, EngIcon } from '@/assets/icons'

export default function MobileMenu( { lang="CAT" }: { lang?: string } ) {
  return (
    <Popover className="md:hidden top-7 right-7 basis-0 absolute">
      <Popover.Button className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path fill="#2d1f12" d="M140.001-254.616v-59.999h679.998v59.999H140.001Zm0-195.385v-59.998h679.998v59.998H140.001Zm0-195.384v-59.999h679.998v59.999H140.001Z"/></svg>
        </span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 top-16 -right-3 flex w-screen max-w-min px-4">
          <div className="w-56 shrink rounded-xl bg-bg-200 p-4 text-sm font-semibold leading-6 text-logo-400 shadow-lg ring-1 ring-gray-900/5">
            <Link href="/#music" className="block p-2 hover:text-indigo-600">
              {lang === "CAT" ? "MÚSICA" : "MUSIC"}
            </Link>
            <Link href="/#bio" className="block p-2 hover:text-indigo-600">
              BIO
            </Link>
            <Link href="/#contact" className="block p-2 hover:text-indigo-600">
              {lang === "CAT" ? "CONTACTE" : "CONTACT"}
            </Link>
            <span className="flex justify-center gap-4 pt-1 px-2 items-center">
              {socialLinks.map((item) => (
                item.name === "Apple Music" || item.name === "Facebook" ? null :
                <Link key={item.name} href={item.href} target="_blank" className="text-logo-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
              <Link href="" className="relative flex ml-auto">
                {lang === "CAT" ? <EngIcon /> : <CatIcon />}
              </Link>
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}