import React from 'react'
import { ThemeProvider } from './theme'

const Context = React.createContext({})

export const CalendarProvider = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider>
    <Context.Provider value={{}}>{children}</Context.Provider>
  </ThemeProvider>
)

export const useCalendar = () => React.useContext(Context)
