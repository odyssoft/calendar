import React from 'react'
import { DateType } from '../types'
import moment from 'moment'

export type MiniCalendarProps = {
  controls?: boolean
  date?: string
  dayClick?: (day: DateType) => void
  monthClick?: (date: DateType) => void
  onChange?: (date: moment.Moment) => void
  selectedDates?: SelectedDates
  week?: boolean
  weekClick?: (week: string, year: string) => void
}

export type MiniDayProps = {
  day: moment.Moment
  index: number
  onClick?: (day: DateType) => void
  selectedDates?: SelectedDates
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

type SelectedDates = [moment.Moment] | [moment.Moment, moment.Moment]
