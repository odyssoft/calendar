import React from 'react'

import { DateType } from '../types'
import { useMiniCalendar } from './context'
import { Day } from './styles'
import { MiniDayProps } from './types'

export const MiniDay = ({ day, index }: MiniDayProps) => {
  const { date, dayClick, disabledDates, selectedDate } = useMiniCalendar()

  const disabled = disabledDates?.(day)

  const handleClick = () => dayClick?.(day.format('DD-MM-YYYY') as DateType)

  return (
    <Day>
      <Day.Button
        onClick={handleClick}
        disabled={disabledDates?.(day)}
        index={index}
        size='small'
        selected={selectedDate === day.format('DD-MM-YYYY')}
      >
        <Day.Text disabled={!!disabled} month={day.isSame(date, 'month')}>
          {day.date()}
        </Day.Text>
      </Day.Button>
    </Day>
  )
}
