import React from 'react'

import { useCalendar } from '../context'
import { CalendarDate, DateType } from '../types'
import { Month } from './styles'

export const Day = ({ date }: CalendarDate) => {
  const { selectDay } = useCalendar()

  const isDay = React.useMemo(() => date.isSame(new Date(), 'day'), [date])
  const isMonth = React.useMemo(() => date.isSame(new Date(), 'month'), [date])

  return (
    <Month.Day>
      <Month.Button
        isDay={isDay}
        isMonth={isMonth}
        color={isDay ? 'error' : 'inherit'}
        onClick={() => selectDay(date.format('DD-MM-YYYY') as DateType)}
        size='small'
      >
        {date.date()}
      </Month.Button>
    </Month.Day>
  )
}
