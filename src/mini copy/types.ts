import moment from 'moment'
import React from 'react'

import { DateType } from '../types'

export type MiniCalendarProps = {
  controls?: boolean
  date?: string
  dayClick?: (day: DateType) => void
  monthClick?: (date: DateType) => void
  onChange?: (date: moment.Moment) => void
  selectedDate?: DateType
  week?: boolean
  weekClick?: (week: string, year: string) => void
}

export type MiniDayProps = {
  day: moment.Moment
  index: number
  onClick?: (day: DateType) => void
  selectedDate?: DateType
}

export type MiniHeaderProps = React.PropsWithChildren<{
  controls?: boolean
  date: moment.Moment
  setDate: (date: moment.Moment) => void
}>

export type MiniWeekProps = {
  date: moment.Moment
  onClick?: (week: string, year: string) => void
}
