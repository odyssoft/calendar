import { Property } from 'csstype'
import React from 'react'

export type CalendarContext = {
  date: moment.Moment
  next: () => void
  previous: () => void
  selectDay: (date: DateType) => void
  selectMonth: (date: DateType) => void
  selectWeek: (week: string, year: string) => void
  setDate: (date: moment.Moment) => void
  setView: (view: CalendarView) => void
  sidebar?: boolean
  toggleSidebar: () => void
  view: CalendarView
}

export type CalendarView = 'day' | 'week' | 'month' | 'year'

export type DateType =
  `${number}${number}-${number}${number}-${number}${number}${number}${number}`

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Property.AlignItems
  direction?: Property.FlexDirection
  justify?: Property.JustifyContent
  wrap?: Property.FlexWrap
}
