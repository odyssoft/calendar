import React from 'react'

import { useMiniCalendar } from './context'
import { Week } from './styles'
import { MiniWeekProps } from './types'

export const MiniWeek = ({ date }: MiniWeekProps) => {
  const { weekClick } = useMiniCalendar()

  const handleClick = () => weekClick?.(date.format('ww'), date.format('YYYY'))

  return (
    <Week>
      <Week.Button onClick={handleClick} size='small'>
        <Week.Text>{date.format('ww')}</Week.Text>
      </Week.Button>
    </Week>
  )
}
