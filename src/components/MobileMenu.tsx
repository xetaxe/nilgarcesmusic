"use client"

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { socialLinks } from '@/assets/socialLinks'

const solutions = [
  { name: 'MÚSICA', href: '#music' },
  { name: 'BIO', href: '#bio' },
  { name: 'CONTACTE', href: '#contact' },
]

export default function MobileMenu() {
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
            {solutions.map((item) => (
              <a key={item.name} href={item.href} className="block p-2 hover:text-indigo-600">
                {item.name}
              </a>
            ))}
            <span className="flex justify-center gap-4 pt-1 px-2 items-center">
              {socialLinks.map((item) => (
                item.name === "Apple Music" || item.name === "Facebook" ? null :
                <a key={item.name} href={item.href} target="_blank" className="text-logo-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
              <a href="" className="relative flex ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" className="right-1">
                  <path fill="#2d1f12" d="M480-120q-74.308 0-140-28.423t-114.423-77.154Q176.846-274.308 148.423-340 120-405.692 120-480q0-74.539 28.423-140.115 28.423-65.577 77.154-114.308Q274.308-783.154 340-811.577 405.692-840 480-840q74.539 0 140.115 28.423 65.577 28.423 114.308 77.154 48.731 48.731 77.154 114.308Q840-554.539 840-480q0 74.308-28.423 140t-77.154 114.423q-48.731 48.731-114.308 77.154Q554.539-120 480-120Zm0-39.692q35.231-45.231 58.077-88.846 22.846-43.616 37.154-97.616H384.769q15.846 57.077 37.923 100.693 22.077 43.615 57.308 85.769Zm-50.923-6q-28-33-51.116-81.577-23.115-48.577-34.423-98.885H190.154q34.385 74.616 97.5 122.385Q350.769-176 429.077-165.692Zm101.846 0Q609.231-176 672.346-223.769q63.115-47.769 97.5-122.385H616.462q-15.154 51.077-38.269 99.654-23.116 48.577-47.27 80.808ZM173.846-386.154h161.385q-4.539-24.615-6.423-47.961-1.885-23.347-1.885-45.885 0-22.538 1.885-45.885 1.884-23.346 6.423-47.961H173.846q-6.538 20.769-10.192 45.269T160-480q0 24.077 3.654 48.577 3.654 24.5 10.192 45.269Zm201.385 0h209.538q4.539-24.615 6.423-47.192 1.885-22.577 1.885-46.654t-1.885-46.654q-1.884-22.577-6.423-47.192H375.231q-4.539 24.615-6.423 47.192-1.885 22.577-1.885 46.654t1.885 46.654q1.884 22.577 6.423 47.192Zm249.538 0h161.385q6.538-20.769 10.192-45.269T800-480q0-24.077-3.654-48.577-3.654-24.5-10.192-45.269H624.769q4.539 24.615 6.424 47.961 1.884 23.347 1.884 45.885 0 22.538-1.884 45.885-1.885 23.346-6.424 47.961Zm-8.307-227.692h153.384Q734.692-690 673.5-736.231q-61.192-46.23-142.577-58.846 28 36.846 50.346 84.269 22.347 47.423 35.193 96.962Zm-231.693 0h190.462q-15.846-56.308-39.077-101.846-23.231-45.539-56.154-84.616-32.923 39.077-56.154 84.616-23.231 45.538-39.077 101.846Zm-194.615 0h153.384q12.846-49.539 35.193-96.962 22.346-47.423 50.346-84.269-82.154 12.616-142.962 59.231-60.807 46.615-95.961 122Z"/>
                </svg>
                <span className="absolute bg-white top-[0.625rem] right-1 rounded-sm text-[0.75rem] leading-none text-logo-400">
                  ENG
                </span>
              </a>
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}