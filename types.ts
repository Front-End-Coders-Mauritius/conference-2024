import type sessionsByDate from './data/sessions-by-date.json'
import type { ROOMS } from './constants'

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
  room?: typeof ROOMS[number]
}

export type SessionDate = Exclude<keyof typeof sessionsByDate, '_PLEASE_READ_THIS'>
