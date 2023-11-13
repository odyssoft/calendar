import { TextField } from '@mui/material'
import React from 'react'

import { Flex } from '../styles'
import { CalendarEvent } from '../types'
import { AlldayCheckbox } from './alldayCheckbox'
import { CalendarSelect } from './calendarSelect'
import { useEdit } from './context'
import { Dates } from './dates'

export const Form = () => {
  const { event, setEvent } = useEdit()

  return (
    <Flex direction='column' style={{ gap: '.5rem' }}>
      {[{ key: 'title', required: true }, { key: 'description' }].map(
        ({ key, ...rest }) => (
          <TextField
            key={key}
            defaultValue={event?.[key as keyof CalendarEvent]}
            label={`Event ${key}`}
            onChange={({ target: { value } }) =>
              setEvent({ ...event!, [key]: value })
            }
            placeholder={`Enter event ${key}.`}
            type='text'
            variant='standard'
            {...rest}
          />
        )
      )}
      <CalendarSelect />
      <AlldayCheckbox />
      <Dates />
    </Flex>
  )
}
