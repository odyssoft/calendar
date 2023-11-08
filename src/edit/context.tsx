import React from 'react'
import { useCalendar } from '../context'

const Context = React.createContext({})

export const EditProvider = ({ children }: React.PropsWithChildren) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}

export const useEdit = () => React.useContext(Context)
