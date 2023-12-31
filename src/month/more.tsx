import React from 'react'

import { Row, Text } from '../styles'
import { MonthEvents, MoreDropdown } from './styles'
import { MoreProps } from './types'

export const More = ({
  allDay,
  diff,
  editable,
  hourly,
  isHourly,
}: MoreProps) => (
  <Row>
    <MoreDropdown
      items={[
        ...allDay.map(({ calendar, id, isEnd, isStart, span, title }) => ({
          children: (
            <MonthEvents.Daily
              background={calendar.color}
              editable={editable}
              isEnd={isEnd}
              isHourly={isHourly}
              isStart={isStart}
              span={span}
            >
              <Text>{title}</Text>
            </MonthEvents.Daily>
          ),
          key: id,
        })),
        ...hourly.map(({ calendar, id, title }) => ({
          children: (
            <MonthEvents.Hourly background={calendar.color} editable={editable}>
              <Text>{title}</Text>
            </MonthEvents.Hourly>
          ),
          key: id,
        })),
      ]}
      name='more'
    >
      +{diff} More
    </MoreDropdown>
  </Row>
)
