import moment from 'moment'
import React from 'react'

import { DAYS } from '../constants'
import { getMonth } from '../helper'
import { Column, Row } from '../styles'
import { DateType } from '../types'
import { MiniHeader } from './header'
import { Mini } from './styles'
import { MiniCalendarProps } from './types'
import { MiniWeek } from './week'
import { MiniDay } from './day'

export const MiniCalendar = ({
  controls,
  date: initial,
  dayClick,
  monthClick,
  onChange,
  selectedDates,
  week,
  weekClick,
}: MiniCalendarProps) => {
  const [date, setDate] = React.useState<moment.Moment>(
    initial ? moment(initial, 'DD-MM-YYYY') : moment()
  )

  const items = React.useMemo(() => getMonth(date), [date])
  const title = React.useMemo(() => date.format('MMMM YYYY'), [date])

  React.useEffect(() => {
    onChange?.(date)
  }, [date])

  return (
    <Mini week={!!week}>
      <MiniHeader controls={controls} date={date} setDate={setDate}>
        <Mini.TitleButton
          controls={controls}
          onClick={() => monthClick?.(date.format('DD-MM-YYYY') as DateType)}
        >
          {title}
        </Mini.TitleButton>
      </MiniHeader>
      <Row>
        {week && <Column />}
        {DAYS.map((day) => (
          <Column key={day}>
            <Mini.Text>{day[0]}</Mini.Text>
          </Column>
        ))}
      </Row>
      {items.map((row) => (
        <Row key={row[0].format('DDMMYYYY')}>
          {week && <MiniWeek date={row[0]} onClick={weekClick} />}
          {row.map((day, index) => (
            <MiniDay
              key={day.format('DDMMYYYY')}
              day={day}
              index={index}
              onClick={dayClick}
              selectedDates={selectedDates}
            />
          ))}
        </Row>
      ))}
    </Mini>
  )
}
