import type sessionsByDate from './data/sessions-by-date.json'
import type { rooms } from './constants'

export type Speaker = {
  id: string
  name: string
  avatar?: string
}

export type Session = {
  id: string
  title: string
  description: string
  time: {
    start: string
    end: string
  }
  speakers: Array<Speaker>
  room?: typeof rooms[number]
  isBookmarked?: boolean
}

export type SessionDate = Exclude<keyof typeof sessionsByDate, '_PLEASE_READ_THIS'>
