import React from 'react'
import { useCalendar } from '../context'
import { MiniCalendar } from '../mini'
import { Flex } from '../styles'
import { Sidebar } from './styles'

export const CalendarSidebar = ({ children }: React.PropsWithChildren) => {
  const { date, selectDay, setDate, sidebar } = useCalendar()
  // if (!sidebar) return null

  return (
    <Sidebar>
      <Sidebar.Nav>
        <MiniCalendar
          controls
          date={date.format('DD-MM-YYYY')}
          dayClick={selectDay}
          onChange={setDate}
        />
      </Sidebar.Nav>
      <Sidebar.Content>{children}</Sidebar.Content>
    </Sidebar>
  )
}
