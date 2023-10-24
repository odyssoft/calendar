import React from 'react'
import { CalendarProvider } from './context'
import { CalendarContainer } from './styles'
import { CalendarHeader } from './header'
import { CalendarSidebar } from './sidebar'
import { CalendarBody } from './body'

export const Calendar = () => {
  return (
    <CalendarProvider>
      <CalendarContainer>
        <CalendarHeader>
          <CalendarSidebar>
            <CalendarBody />
          </CalendarSidebar>
        </CalendarHeader>
      </CalendarContainer>
    </CalendarProvider>
  )
}

export default Calendar
