import React from 'react'

import { Row } from '../styles'
import { useMiniCalendar } from './context'
import { MiniDay } from './day'
import { MiniWeek } from './week'

export const Body = () => {
  const { items, week } = useMiniCalendar()

  return (
    <>
      {items.map((item) => (
        <Row key={item[0].format('DDMMYYYY')}>
          {week && <MiniWeek date={item[0]} />}
          {item.map((day, index) => (
            <MiniDay key={day.format('DDMMYYYY')} day={day} index={index} />
          ))}
        </Row>
      ))}
    </>
  )
}
