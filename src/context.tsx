import React from 'react'
import { ThemeProvider } from './theme'
import {
  CalendarContext,
  CalendarProviderProps,
  CalendarView,
  DateType,
  ParsedEvent,
} from './types'
import moment from 'moment'
import { format, getMonthEvents, getWeek, getYear } from './helper'

const empty = (...params: any): any => {}
const now = moment()

export const Context = React.createContext<CalendarContext>({
  calendars: [],
  date: now,
  month: [],
  next: empty,
  previous: empty,
  selectDay: empty,
  selectEvent: empty,
  selectMonth: empty,
  selectWeek: empty,
  setDate: empty,
  setView: empty,
  toggleSidebar: empty,
  view: 'month',
  week: [],
})

export const CalendarProvider = ({ children, data }: CalendarProviderProps) => {
  const [date, setDate] = React.useState<moment.Moment>(now)
  const [excluded, setExcluded] = React.useState<string[]>([])
  const [selectedEvent, selectEvent] = React.useState<ParsedEvent>()
  const [sidebar, setSidebar] = React.useState<boolean>()
  const [view, setView] = React.useState<CalendarView>('month')

  const calendars = React.useMemo(() => [], [])
  const month = React.useMemo(
    () =>
      getMonthEvents({
        data: data.filter(({ calendar }) => !excluded.includes(calendar.id)),
        date,
      }),
    [date, data, excluded]
  )
  const week = React.useMemo(() => getWeek({ date, month }), [date, month])
  const title = React.useMemo(() => date.format(format[view]), [date, view])
  const year = React.useMemo(() => getYear(date), [date])

  const next = () => setDate(date.clone().add(1, view))
  const previous = () => setDate(date.clone().subtract(1, view))

  const select = (newDate: DateType, view: CalendarView) => {
    setView(view)
    setDate(moment(newDate, 'DD-MM-YYYY'))
  }
  const selectDay = (day: DateType) => select(day, 'day')
  const selectMonth = (month: DateType) => select(month, 'month')
  const selectWeek = (week: string, year: string): void => {
    setView('week')
    setDate(moment().week(Number(week)).year(Number(year)))
  }

  React.useEffect(() => {
    setSidebar(localStorage.getItem('calendarOpen') === 'true')
  }, [])

  React.useEffect(() => {
    if (sidebar !== undefined)
      localStorage.setItem('calendarOpen', sidebar.toString())
  }, [sidebar])

  return (
    <ThemeProvider>
      <Context.Provider
        value={{
          calendars,
          date,
          month,
          next,
          previous,
          selectDay,
          selectEvent,
          selectMonth,
          selectWeek,
          selectedEvent,
          setDate,
          setView,
          sidebar,
          toggleSidebar: () => setSidebar(!sidebar),
          view,
          week,
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}

export const useCalendar = () => React.useContext(Context)
