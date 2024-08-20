import sessionsByDateFromJson from './data/sessions-by-date.json'

export const ROOMS = ['room1', 'room2'] as const
export const { _PLEASE_READ_THIS, ...SESSIONS_BY_DATE } = sessionsByDateFromJson
export const BOOKMARKED_SESSIONS_STORAGE_KEY = 'BOOKMARKED_SESSIONS_STORAGE'
