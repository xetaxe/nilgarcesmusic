

import { createContext, useContext, useMemo, useReducer, useRef } from 'react'

import { type Song } from '@/assets/musicLinks'

interface PlayerState {
  playing: boolean
  muted: boolean
  duration: number
  currentTime: number
  song: Song | null
}

interface PublicPlayerActions {
  play: (song?: Song) => void
  pause: () => void
  toggle: (song?: Song) => void
  seekBy: (amount: number) => void
  seek: (time: number) => void
  playbackRate: (rate: number) => void
  toggleMute: () => void
  isPlaying: (song?: Song) => boolean
}

export type PlayerAPI = PlayerState & PublicPlayerActions

const enum ActionKind {
  SET_META = 'SET_META',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  TOGGLE_MUTE = 'TOGGLE_MUTE',
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  SET_DURATION = 'SET_DURATION',
}

type Action =
  | { type: ActionKind.SET_META; payload: Song }
  | { type: ActionKind.PLAY }
  | { type: ActionKind.PAUSE }
  | { type: ActionKind.TOGGLE_MUTE }
  | { type: ActionKind.SET_CURRENT_TIME; payload: number }
  | { type: ActionKind.SET_DURATION; payload: number }

const AudioPlayerContext = createContext<PlayerAPI | null>(null)

function audioReducer(state: PlayerState, action: Action): PlayerState {
  switch (action.type) {
    case ActionKind.SET_META:
      return { ...state, song: action.payload }
    case ActionKind.PLAY:
      return { ...state, playing: true }
    case ActionKind.PAUSE:
      return { ...state, playing: false }
    case ActionKind.TOGGLE_MUTE:
      return { ...state, muted: !state.muted }
    case ActionKind.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload }
    case ActionKind.SET_DURATION:
      return { ...state, duration: action.payload }
  }
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  let [state, dispatch] = useReducer(audioReducer, {
    playing: false,
    muted: false,
    duration: 0,
    currentTime: 0,
    song: null,
  })
  let playerRef = useRef<React.ElementRef<'audio'>>(null)

  let actions = useMemo<PublicPlayerActions>(() => {
    return {
      play(song) {
        if (song) {
          dispatch({ type: ActionKind.SET_META, payload: song })

          if (
            playerRef.current &&
            playerRef.current.currentSrc !== song.link
          ) {
            let playbackRate = playerRef.current.playbackRate
            playerRef.current.src = song.link
            playerRef.current.load()
            playerRef.current.pause()
            playerRef.current.playbackRate = playbackRate
            playerRef.current.currentTime = 0
          }
        }

        playerRef.current?.play()
      },
      pause() {
        playerRef.current?.pause()
      },
      toggle(song) {
        this.isPlaying(song) ? actions.pause() : actions.play(song)
      },
      seekBy(amount) {
        if (playerRef.current) {
          playerRef.current.currentTime += amount
        }
      },
      seek(time) {
        if (playerRef.current) {
          playerRef.current.currentTime = time
        }
      },
      playbackRate(rate) {
        if (playerRef.current) {
          playerRef.current.playbackRate = rate
        }
      },
      toggleMute() {
        dispatch({ type: ActionKind.TOGGLE_MUTE })
      },
      isPlaying(song) {
        return song
          ? state.playing && playerRef.current?.currentSrc === song.link
          : state.playing
      },
    }
  }, [state.playing])

  let api = useMemo<PlayerAPI>(
    () => ({ ...state, ...actions }),
    [state, actions],
  )

  return (
    <>
      <AudioPlayerContext.Provider value={api}>
        {children}
      </AudioPlayerContext.Provider>
      <audio
        ref={playerRef}
        onPlay={() => dispatch({ type: ActionKind.PLAY })}
        onPause={() => dispatch({ type: ActionKind.PAUSE })}
        onTimeUpdate={(event) => {
          dispatch({
            type: ActionKind.SET_CURRENT_TIME,
            payload: Math.floor(event.currentTarget.currentTime),
          })
        }}
        onDurationChange={(event) => {
          dispatch({
            type: ActionKind.SET_DURATION,
            payload: Math.floor(event.currentTarget.duration),
          })
        }}
        muted={state.muted}
      />
    </>
  )
}

export function useAudioPlayer(song?: Song) {
  let player = useContext(AudioPlayerContext)

  return useMemo<PlayerAPI>(
    () => ({
      ...player!,
      play() {
        player!.play(song)
      },
      toggle() {
        player!.toggle(song)
      },
      get playing() {
        return player!.isPlaying(song)
      },
    }),
    [player, song],
  )
}