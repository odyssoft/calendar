import { CalendarEvent } from '../types'

export type EditContext = {
  event?: CalendarEvent
  setEvent: (event?: CalendarEvent) => void
}
