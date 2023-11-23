import React from 'react'
import moment from 'moment'

import { VIEWS } from './constants'
import { EditModal } from './edit'
import { empty, format, getMonthEvents, getWeek, getYear } from './helper'
import { ThemeProvider } from './theme'
import {
  CalendarContext,
  CalendarEvent,
  CalendarProviderProps,
  CalendarType,
  CalendarView,
  DateType,
} from './types'

const now = moment()

export const Context = React.createContext<CalendarContext>({
  calendars: [],
  date: now,
  disableSidebar: true,
  excluded: [],
  month: [],
  navigation: false,
  next: empty,
  previous: empty,
  selectDay: empty,
  selectEvent: empty,
  selectMonth: empty,
  selectWeek: empty,
  setDate: empty,
  setExcluded: empty,
  setView: empty,
  title: '',
  toggleSidebar: empty,
  view: 'month',
  views: VIEWS,
  week: [],
  year: [],
})

export const CalendarProvider = ({
  children,
  data,
  defaultView = 'month',
  editable,
  navigation = true,
  onEventChange,
  sidebar: sb = false,
  views = VIEWS,
}: CalendarProviderProps) => {
  const [date, setDate] = React.useState<moment.Moment>(now)
  const [disableSidebar, setDisableSidebar] = React.useState<boolean>(!sb)
  const [excluded, setExcluded] = React.useState<string[]>([])
  const [selectedEvent, selectEvent] = React.useState<CalendarEvent>()
  const [sidebar, setSidebar] = React.useState<boolean>(sb)
  const [view, setView] = React.useState<CalendarView>(defaultView)

  const calendars = React.useMemo(
    () =>
      Object.values(
        (data ?? [])
          .map(({ calendar }) => calendar)
          .reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
      ) as CalendarType[],
    [data]
  )
  const month = React.useMemo(
    () =>
      getMonthEvents({
        data:
          data?.filter(({ calendar }) => !excluded.includes(calendar.id)) ?? [],
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

  React.useEffect(() => setView(defaultView), [defaultView])

  return (
    <ThemeProvider>
      <Context.Provider
        value={{
          calendars,
          date,
          disableSidebar,
          editable,
          excluded,
          month,
          navigation,
          next,
          onEventChange,
          previous,
          selectDay,
          selectEvent,
          selectMonth,
          selectWeek,
          selectedEvent,
          setDate,
          setExcluded,
          setView,
          sidebar,
          title,
          toggleSidebar: () => setSidebar(!sidebar),
          view,
          views,
          week,
          year,
        }}
      >
        {children}
        {editable && !!selectedEvent && <EditModal />}
      </Context.Provider>
    </ThemeProvider>
  )
}

export const useCalendar = () => React.useContext(Context)
