'use client'

import { useAudioPlayer } from './AudioProvider'
import { type Song } from '@/app/_data/albums'

export function SongPlayButton({
  song,
  playing,
  paused,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  song: Song
  playing: React.ReactNode
  paused: React.ReactNode
}) {
  let player = useAudioPlayer(song)

  return (
    <button
      type="button"
      onClick={() => player.toggle()}
      aria-label={`${player.playing ? 'Pause' : 'Play'} song ${
        song.title
      }`}
      {...props}
    >
      {player.playing ? playing : paused}
    </button>
  )
}