import {
  CalendarMonthRounded,
  ChevronLeftRounded,
  ChevronRightRounded,
  EastRounded,
  WestRounded,
} from '@mui/icons-material'
import { ButtonGroup } from '@mui/material'
import moment from 'moment'
import React from 'react'

import { useCalendar } from '../context'
import { Row } from '../styles'
import { DateType } from '../types'
import { Header } from './styles'

export const CalendarHeader = ({ children }: React.PropsWithChildren) => {
  const {
    navigation,
    next,
    previous,
    selectDay,
    setView,
    sidebar,
    title,
    toggleSidebar,
    view,
    views,
  } = useCalendar()

  return (
    <Header direction='column'>
      {navigation && (
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
              {views.map((item) => (
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
      )}
      <Header.Content>{children}</Header.Content>
    </Header>
  )
}
