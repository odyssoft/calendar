import { Property } from 'csstype'
import React from 'react'

export type CalendarContext = {
  calendars: CalendarType[]
  date: moment.Moment
  editable?: boolean
  excluded: string[]
  month: CalendarDate[][]
  next: () => void
  onEventChange?: (event: CalendarEvent) => void
  previous: () => void
  selectDay: (date: DateType) => void
  selectEvent: (event?: CalendarEvent) => void
  selectMonth: (date: DateType) => void
  selectWeek: (week: string, year: string) => void
  selectedEvent?: CalendarEvent
  setDate: (date: moment.Moment) => void
  setExcluded: (excluded: string[]) => void
  setView: (view: CalendarView) => void
  sidebar?: boolean
  title: string
  toggleSidebar: () => void
  view: CalendarView
  week: CalendarDate[][]
  year: moment.Moment[][]
}

export type CalendarDate = {
  date: moment.Moment
  events: Events
}

export type CalendarEvent = {
  id: string
  title: string
  calendar: CalendarType
  description?: string
} & (
  | { allDay: true; end: DateType; start: DateType }
  | { allDay?: false; end: DateTimeType; start: DateTimeType }
)

export type CalendarProps = {
  data?: CalendarEvent[]
  editable?: boolean
  onEventChange?: (event: CalendarEvent) => void
}

export type CalendarProviderProps = React.PropsWithChildren<CalendarProps>

export type CalendarView = 'day' | 'week' | 'month' | 'year'

export type CalendarType = {
  id: string
  name: string
  color: string
}

export type DateKey = DateType | DateTimeType

export type DateTimeType = `${DateType} ${TimeType}`

export type DateType =
  | `${number}${number}-${number}${number}-${number}${number}${number}${number}`
  | ''

export type EventType = 'allDay' | 'hourly'

export type Events = {
  [key in EventType]: ParsedEvent[]
}

export type EventsType = {
  [key in DateKey]: Events
}

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Property.AlignItems
  direction?: Property.FlexDirection
  justify?: Property.JustifyContent
  wrap?: Property.FlexWrap
}

export type Format = {
  [key in CalendarView]: string
}

export type GetDateTime = (datetime?: DateTimeType) => {
  date?: DateType
  time?: TimeType
}

export type GetEvents = (events: CalendarEvent[]) => EventsType

export type GetMonthEvents = (params: {
  data: CalendarEvent[]
  date: moment.Moment
}) => CalendarDate[][]

export type GetWeek = (params: {
  date: moment.Moment
  month: CalendarDate[][]
}) => CalendarDate[][]

export type ParsedEvent = CalendarEvent & {
  empty?: boolean
  span: number
  isEnd?: boolean
  isStart?: boolean
}

export type TimeType = `${number}:${number}` | ''
