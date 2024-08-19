import sessionsByDateFromJson from './data/sessions-by-date.json'

export const rooms = ['room1', 'room2'] as const
export const { _PLEASE_READ_THIS, ...sessionsByDate } = sessionsByDateFromJson
