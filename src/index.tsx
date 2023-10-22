import React from 'react'
import { CalendarProvider } from './context'
import { CalendarContainer } from './styles'
import { CalendarHeader } from './header'
import { CalendarSidebar } from './sidebar'

export const Calendar = () => {
  return (
    <CalendarProvider>
      <CalendarContainer>
        <CalendarHeader>
          <CalendarSidebar />
        </CalendarHeader>
      </CalendarContainer>
    </CalendarProvider>
  )
}

export default Calendar
