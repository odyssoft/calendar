import { DateType } from '../types'

export type MiniCalendarProps = {
  controls?: boolean
  date?: string
  dayClick?: (day: DateType) => void
  monthClick?: (date: DateType) => void
  onChange?: (date: moment.Moment) => void
  selectedDates?: [moment.Moment] | [moment.Moment, moment.Moment]
  week?: boolean
  weekClick?: (week: string, year: string) => void
}
