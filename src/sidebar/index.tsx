import React from 'react'
import { useCalendar } from '../context'
import { MiniCalendar } from '../mini'
import { Sidebar } from './styles'
import { FormControl, FormGroup, FormLabel } from '@mui/material'
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase'
import { DateType } from '../types'

export const CalendarSidebar = ({ children }: React.PropsWithChildren) => {
  const {
    calendars,
    date,
    excluded,
    selectDay,
    setDate,
    setExcluded,
    sidebar,
  } = useCalendar()

  const handleChange: SwitchBaseProps['onChange'] = ({
    target: { checked, value },
  }) =>
    setExcluded(
      checked ? excluded.filter((id) => id !== value) : [...excluded, value]
    )

  return (
    <Sidebar>
      <Sidebar.Nav visible={!!sidebar}>
        <MiniCalendar
          controls
          date={date.format('DD-MM-YYYY') as DateType}
          dayClick={selectDay}
          onChange={setDate}
        />
        {calendars.length > 0 && (
          <FormControl
            component='fieldset'
            variant='standard'
            sx={{ marginTop: '1rem' }}
          >
            <FormLabel component='legend'>Calendars</FormLabel>
            <FormGroup>
              {calendars.map(({ color, id, name }) => (
                <Sidebar.ControlLabel
                  background={color}
                  control={
                    <Sidebar.Checkbox
                      background={color}
                      defaultChecked
                      value={id}
                      onChange={handleChange}
                    />
                  }
                  key={id}
                  label={name}
                />
              ))}
            </FormGroup>
          </FormControl>
        )}
      </Sidebar.Nav>
      <Sidebar.Content>{children}</Sidebar.Content>
    </Sidebar>
  )
}
