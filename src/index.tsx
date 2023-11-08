import React from 'react'
import { CalendarProvider } from './context'
import { CalendarContainer } from './styles'
import { CalendarHeader } from './header'
import { CalendarSidebar } from './sidebar'
import { CalendarBody } from './body'
import { CalendarProps } from './types'
import { EditModal } from './edit'

export const Calendar = (props: CalendarProps) => {
  return (
    <CalendarProvider {...props}>
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
