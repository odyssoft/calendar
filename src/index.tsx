import React from 'react'

import { CalendarBody } from './body'
import { CalendarProvider } from './context'
import { CalendarHeader } from './header'
import { CalendarSidebar } from './sidebar'
import { CalendarContainer } from './styles'
import { CalendarProps } from './types'

export const Calendar = (props: CalendarProps) => (
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

export default Calendar
