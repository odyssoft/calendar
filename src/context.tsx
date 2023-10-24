import React from 'react'
import { ThemeProvider } from './theme'
import { CalendarContext, CalendarView, DateType } from './types'
import moment from 'moment'

const empty = (...params: any): any => {}
const now = moment()

const Context = React.createContext<CalendarContext>({
  date: now,
  next: empty,
  previous: empty,
  selectDay: empty,
  selectMonth: empty,
  selectWeek: empty,
  setDate: empty,
  setView: empty,
  toggleSidebar: empty,
  view: 'month',
})

export const CalendarProvider = ({ children }: React.PropsWithChildren) => {
  const [date, setDate] = React.useState<moment.Moment>(now)
  const [sidebar, setSidebar] = React.useState<boolean>()
  const [view, setView] = React.useState<CalendarView>('month')

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
          date,
          next,
          previous,
          selectDay,
          selectMonth,
          selectWeek,
          setDate,
          setView,
          sidebar,
          toggleSidebar: () => setSidebar(!sidebar),
          view,
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}

export const useCalendar = () => React.useContext(Context)
