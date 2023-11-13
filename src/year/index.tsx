import React from 'react'

import { useCalendar } from '../context'
import { MiniCalendar } from '../mini'
import { Column } from '../styles'
import { DateType } from '../types'
import { Year } from './styles'

export const CalendarYear = () => {
  const { selectDay, selectMonth, selectWeek, year } = useCalendar()

  return (
    <Year>
      {year.map((third) =>
        third.map((month) => (
          <Column key={month.format('DD-MM-YYYY')}>
            <MiniCalendar
              date={month.format('DD-MM-YYYY') as DateType}
              dayClick={selectDay}
              monthClick={selectMonth}
              weekClick={selectWeek}
              week
            />
          </Column>
        ))
      )}
    </Year>
  )
}
