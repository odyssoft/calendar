import React from 'react'

import { useCalendar } from '../context'
import { empty, objectEquals } from '../helper'
import { CalendarEvent } from '../types'
import { EditContext } from './types'

const Context = React.createContext<EditContext>({
  disabled: false,
  handleClose: empty,
  handleSave: empty,
  setEvent: empty,
})

export const EditProvider = ({ children }: React.PropsWithChildren) => {
  const { onEventChange, selectEvent, selectedEvent } = useCalendar()
  const [event, setEvent] = React.useState<CalendarEvent>()

  const disabled = React.useMemo(() => {
    if (!event?.title || event?.title.trim().length === 0) return false
    if (!event?.calendar) return false
    if (!event?.start || event?.start.trim().length === 0) return false
    if (!event?.end || event?.end.trim().length === 0) return false
    if (event?.end <= event?.start) return false
    return !objectEquals(event, selectedEvent)
  }, [event, selectedEvent])

  const handleClose = () => selectEvent(undefined)

  const handleSave = () => {
    disabled && onEventChange?.(event as CalendarEvent)
    handleClose()
  }

  React.useEffect(() => {
    selectedEvent && setEvent(selectedEvent)
  }, [selectedEvent])

  return (
    <Context.Provider
      value={{ disabled, event, handleClose, handleSave, setEvent }}
    >
      {children}
    </Context.Provider>
  )
}

export const useEdit = () => React.useContext(Context)
