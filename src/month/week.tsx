import React from 'react'

import { useCalendar } from '../context'
import { CalendarDate } from '../types'
import { Month } from './styles'

export const Week = ({ date }: CalendarDate) => {
  const { selectWeek } = useCalendar()

  return (
    <Month.WeekColumn>
      <Month.Button
        isMonth
        onClick={() => selectWeek(date.format('ww'), date.format('YYYY'))}
        size='small'
      >
        {date.format('ww')}
      </Month.Button>
    </Month.WeekColumn>
  )
}
