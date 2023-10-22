import React from 'react'
import { ThemeProvider } from './theme'
import { CalendarContext } from './types'

const empty = (...params: any): any => {}

const Context = React.createContext<CalendarContext>({
  toggleSidebar: empty,
})

export const CalendarProvider = ({ children }: React.PropsWithChildren) => {
  const [sidebar, setSidebar] = React.useState<boolean>()

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
          sidebar,
          toggleSidebar: () => setSidebar(!sidebar),
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}

export const useCalendar = () => React.useContext(Context)
