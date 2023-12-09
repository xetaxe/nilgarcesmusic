import { SVGProps } from 'react'
import { SpotifyIcon, AppleMusicIcon, InstagramIcon, YoutubeIcon, FacebookIcon } from "./icons";

export const socialLinks = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/intl-es/artist/0rvOkwdehM4VznxtpJwgC2",
    icon: (props: SVGProps<SVGSVGElement>) => SpotifyIcon(props)
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/es/artist/nil-garc%C3%A9s/1436841437",
    icon: (props: SVGProps<SVGSVGElement>) => AppleMusicIcon(props)
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nil.garces/",
    icon: (props: SVGProps<SVGSVGElement>) => InstagramIcon(props)
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@nilgarces9969",
    icon: (props: SVGProps<SVGSVGElement>) => YoutubeIcon(props)
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nilgarces",
    icon: (props: SVGProps<SVGSVGElement>) => FacebookIcon(props)
  },
]