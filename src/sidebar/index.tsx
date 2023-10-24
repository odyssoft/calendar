import React from 'react'
import { useCalendar } from '../context'
import { MiniCalendar } from '../mini'
import { Sidebar } from './styles'

export const CalendarSidebar = ({ children }: React.PropsWithChildren) => {
  const { calendars, date, selectDay, setDate, sidebar } = useCalendar()

  return (
    <Sidebar>
      <Sidebar.Nav visible={!!sidebar}>
        <MiniCalendar
          controls
          date={date.format('DD-MM-YYYY')}
          dayClick={selectDay}
          onChange={setDate}
        />
        {calendars.map(({ color, id, name }) => (
          <Sidebar.ControlLabel
            background={color}
            control={
              <Sidebar.Checkbox background={color} defaultChecked value={id} />
            }
            key={id}
            label={name}
          />
        ))}
      </Sidebar.Nav>
      <Sidebar.Content>{children}</Sidebar.Content>
    </Sidebar>
  )
}
