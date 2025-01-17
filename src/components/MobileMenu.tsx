'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { socialLinks } from '@/assets/socialLinks'
import Link from 'next/link'
import { CatIcon, EngIcon } from '@/assets/icons'

export default function MobileMenu({ lang = 'CAT' }: { lang?: string }) {
  return (
    <Popover className="absolute right-7 top-7 basis-0 md:hidden">
      <Popover.Button className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path
              fill="#2d1f12"
              d="M140.001-254.616v-59.999h679.998v59.999H140.001Zm0-195.385v-59.998h679.998v59.998H140.001Zm0-195.384v-59.999h679.998v59.999H140.001Z"
            />
          </svg>
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
        <Popover.Panel className="absolute -right-3 top-16 z-10 flex w-screen max-w-min px-4">
          <div className="w-56 shrink rounded-xl bg-bg-200 p-4 text-sm font-semibold leading-6 text-logo-400 shadow-lg ring-1 ring-gray-900/5">
            <Link
              href={`/${lang === 'ENG' ? 'en' : ''}#music`}
              className="block p-2 hover:text-indigo-600"
            >
              {lang === 'CAT' ? 'MÚSICA' : 'MUSIC'}
            </Link>
            <Link
              href={`/${lang === 'ENG' ? 'en' : ''}#bio`}
              className="block p-2 hover:text-indigo-600"
            >
              BIO
            </Link>
            <Link
              href={`/${lang === 'ENG' ? 'en' : ''}#contact`}
              className="block p-2 hover:text-indigo-600"
            >
              {lang === 'CAT' ? 'CONTACTE' : 'CONTACT'}
            </Link>
            <span className="flex items-center justify-center gap-4 px-2 pt-1">
              {socialLinks.map((item) =>
                item.name === 'Apple Music' ||
                item.name === 'Facebook' ? null : (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="text-logo-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ),
              )}
              {lang === 'CAT' ? (
                <Link href="/en" className="relative ml-auto pl-2 flex text-sm">
                  {/* <EngIcon /> */}
                  ENG
                </Link>
              ) : (
                <Link href="." className="relative ml-auto pl-2 flex text-sm">
                  {/* <CatIcon /> */}
                  CAT
                </Link>
              )}
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
