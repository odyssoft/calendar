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

export const CalendarHeader = ({ children }: React.PropsWithChildren) => {
  const { sidebar, toggleSidebar } = useCalendar()

  return (
    <Header direction='column'>
      <Header.Nav>
        <Header.IconButton onClick={toggleSidebar}>
          {sidebar ? <WestRounded /> : <EastRounded />}
        </Header.IconButton>

        <Header.Button
          startIcon={<CalendarMonthRounded />}
          style={{ minWidth: 85, maxHeight: 32 }}
        >
          Today
        </Header.Button>

        <Header.IconButton>
          <ChevronLeftRounded />
        </Header.IconButton>

        <Header.IconButton>
          <ChevronRightRounded />
        </Header.IconButton>

        <Row justify='flex-end'>
          <ButtonGroup size='small' variant='outlined'>
            {VIEWS.map((item) => (
              <Header.Button key={item}>{item}</Header.Button>
            ))}
          </ButtonGroup>
        </Row>
      </Header.Nav>
      <Header.Content>{children}</Header.Content>
    </Header>
  )
}
