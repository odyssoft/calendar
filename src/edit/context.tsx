import React from 'react'

import { useCalendar } from '../context'
import { empty, objectEquals } from '../helper'
import { CalendarEvent } from '../types'
import { EditContext } from './types'

const Context = React.createContext<EditContext>({
  setEvent: empty,
})

export const EditProvider = ({ children }: React.PropsWithChildren) => {
  const { selectedEvent } = useCalendar()
  const [event, setEvent] = React.useState<CalendarEvent>()

  const isValid = React.useMemo(() => {
    if (!event?.title || event?.title.trim().length === 0) {
      console.log({ title: event?.title })
      return false
    }
    return !objectEquals(event, selectedEvent)
  }, [event, selectedEvent])

  React.useEffect(() => {
    selectedEvent && setEvent(selectedEvent)
  }, [selectedEvent])

  return (
    <Context.Provider value={{ event, setEvent }}>{children}</Context.Provider>
  )
}

export const useEdit = () => React.useContext(Context)
