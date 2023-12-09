import { FacebookIcon } from '@/assets/icons/FacebookIcon'
import { InstagramIcon } from '@/assets/icons/InstagramIcon'
import { YoutubeIcon } from '@/assets/icons/YoutubeIcon'
import { SVGProps } from 'react'
import { SpotifyIcon } from './icons/SpotifyIcon'

export const socialLinks = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/intl-es/artist/0rvOkwdehM4VznxtpJwgC2',
    icon: (props: SVGProps<SVGSVGElement>) => SpotifyIcon(props)
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nil.garces/',
    icon: (props: SVGProps<SVGSVGElement>) => InstagramIcon(props)
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@nilgarces9969',
    icon: (props: SVGProps<SVGSVGElement>) => YoutubeIcon(props)
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/nilgarces',
    icon: (props: SVGProps<SVGSVGElement>) => FacebookIcon(props)
  },
]