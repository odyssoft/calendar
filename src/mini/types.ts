import { DateType } from '../types'

export type MiniCalendarProps = {
  controls?: boolean
  dayClick?: (day: DateType) => void
  monthClick?: (date: DateType) => void
  onChange?: (date: moment.Moment) => void
  selectedDate?: DateType
  week?: boolean
  weekClick?: (week: string, year: string) => void
}

export type MiniContext = MiniCalendarProps & {
  date: moment.Moment
  items: moment.Moment[][]
  setDate: (date: moment.Moment) => void
  title: string
}

export type MiniDayProps = {
  day: moment.Moment
  index: number
}

export interface MiniProviderProps extends MiniContext {
  children: React.ReactNode
}

export type MiniWeekProps = {
  date: moment.Moment
}
