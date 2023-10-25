import {
  CalendarMonthRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  EastRounded,
  WestRounded,
} from '@mui/icons-material'
import { ButtonGroup } from '@mui/material'
import React from 'react'

import { VIEWS } from '../constants'
import { useCalendar } from '../context'
import { Row } from '../styles'
import { Header } from './styles'
import moment from 'moment'
import { DateType } from '../types'

export const CalendarHeader = ({ children }: React.PropsWithChildren) => {
  const {
    next,
    previous,
    selectDay,
    setView,
    sidebar,
    title,
    toggleSidebar,
    view,
  } = useCalendar()

  return (
    <Header direction='column'>
      <Header.Nav>
        <Header.IconButton onClick={toggleSidebar}>
          {sidebar ? <WestRounded /> : <EastRounded />}
        </Header.IconButton>

        <Header.Button
          active={false}
          onClick={() => selectDay(moment().format('DD-MM-YYYY') as DateType)}
          startIcon={<CalendarMonthRounded />}
          style={{ minWidth: 85, maxHeight: 32 }}
        >
          Today
        </Header.Button>

        <Header.IconButton onClick={previous}>
          <ChevronLeftRounded />
        </Header.IconButton>

        <Header.IconButton onClick={next}>
          <ChevronRightRounded />
        </Header.IconButton>

        <Header.Text>{title.replace('(', '(Week ')}</Header.Text>

        <Row justify='flex-end'>
          <ButtonGroup size='small' variant='outlined'>
            {VIEWS.map((item) => (
              <Header.Button
                active={view === item}
                key={item}
                onClick={() => setView(item)}
              >
                {item}
              </Header.Button>
            ))}
          </ButtonGroup>
        </Row>
      </Header.Nav>
      <Header.Content>{children}</Header.Content>
    </Header>
  )
}
