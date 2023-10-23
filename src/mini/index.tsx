import { ButtonGroup } from '@mui/material'
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from '@mui/icons-material'
import moment from 'moment'
import React from 'react'

import { DAYS } from '../constants'
import { Column, Row } from '../styles'
import { DateType } from '../types'
import { Mini } from './styles'
import { MiniCalendarProps } from './types'
import { getMonth } from '../helper'

export const MiniCalendar = ({
  controls,
  date: initial,
  dayClick,
  monthClick,
  onChange,
  week,
  weekClick,
}: MiniCalendarProps) => {
  const [date, setDate] = React.useState<moment.Moment>(
    initial ? moment(initial, 'DD-MM-YYYY') : moment()
  )

  const items = React.useMemo(() => getMonth(date), [date])
  const title = React.useMemo(() => date.format('MMMM YYYY'), [date])

  const nextMonth = () => setDate(date.clone().add(1, 'month'))
  const nextYear = () => setDate(date.clone().add(1, 'year'))
  const previousMonth = () => setDate(date.clone().subtract(1, 'month'))
  const previousYear = () => setDate(date.clone().subtract(1, 'year'))

  React.useEffect(() => {
    onChange?.(date)
  }, [date])

  const Header = ({ children }: React.PropsWithChildren) => (
    <Mini.Header>
      {controls ? (
        <Column>
          <Mini.HeaderGroup size='small' variant='contained'>
            <Mini.Button onClick={previousYear}>
              <KeyboardDoubleArrowLeftRounded />
            </Mini.Button>
            <Mini.Button onClick={previousMonth}>
              <ChevronLeftRounded />
            </Mini.Button>
            {children}
            <Mini.Button onClick={nextMonth}>
              <ChevronRightRounded />
            </Mini.Button>
            <Mini.Button onClick={nextYear}>
              <KeyboardDoubleArrowRightRounded />
            </Mini.Button>
          </Mini.HeaderGroup>
        </Column>
      ) : (
        <Mini.Title controls={controls}>{children}</Mini.Title>
      )}
    </Mini.Header>
  )

  return (
    <Mini>
      <Header>
        <Mini.TitleButton
          controls={controls}
          onClick={() => monthClick?.(date.format('DD-MM-YYYY') as DateType)}
        >
          {title}
        </Mini.TitleButton>
      </Header>
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
          {week && (
            <Mini.Week>
              <Mini.Button
                onClick={() =>
                  weekClick?.(row[0].format('ww'), row[0].format('YYYY'))
                }
                size='small'
              >
                <Mini.WeekText>{row[0].format('ww')}</Mini.WeekText>
              </Mini.Button>
            </Mini.Week>
          )}
          {row.map((day) => (
            <Column style={{ width: `${220 / (week ? 8 : 7)}px` }}>
              <Mini.Button
                onClick={() => dayClick?.(day.format('DD-MM-YYYY') as DateType)}
                size='small'
              >
                <Mini.WeekText isMonth={day.isSame(date, 'month')}>
                  {day.date()}
                </Mini.WeekText>
              </Mini.Button>
            </Column>
          ))}
        </Row>
      ))}
    </Mini>
  )
}
