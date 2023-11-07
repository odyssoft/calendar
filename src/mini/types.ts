import { DateType } from '../types'

export type MiniCalendarProps = {
  controls?: boolean
  date?: DateType
  dayClick?: (day: DateType) => void
  disabledDates?: (date: moment.Moment) => boolean
  monthClick?: (date: DateType) => void
  onChange?: (date: moment.Moment) => void
  selectedDate?: DateType
  week?: boolean
  weekClick?: (week: string, year: string) => void
}

export type MiniContext = Omit<MiniCalendarProps, 'date'> & {
  date: moment.Moment
  items: moment.Moment[][]
  setDate: (date: moment.Moment) => void
  title: string
}

export type MiniDayProps = {
  day: moment.Moment
  index: number
}

export interface MiniProviderProps extends MiniCalendarProps {
  children: React.ReactNode
}

export type MiniWeekProps = {
  date: moment.Moment
}
