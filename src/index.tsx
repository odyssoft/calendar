import React from 'react'
import { CalendarProvider } from './context'
import { CalendarContainer } from './styles'

export const Calendar = () => {
  return (
    <CalendarProvider>
      <CalendarContainer></CalendarContainer>
    </CalendarProvider>
  )
}

export default Calendar
