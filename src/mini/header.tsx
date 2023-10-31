import {
  ChevronLeftRounded,
  ChevronRightRounded,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from '@mui/icons-material'
import React from 'react'

import { Column } from '../styles'
import { Header } from './styles'
import { MiniHeaderProps } from './types'

export const MiniHeader = ({
  children,
  controls,
  date,
  setDate,
}: MiniHeaderProps) => {
  const nextMonth = () => setDate(date.clone().add(1, 'month'))
  const nextYear = () => setDate(date.clone().add(1, 'year'))
  const previousMonth = () => setDate(date.clone().subtract(1, 'month'))
  const previousYear = () => setDate(date.clone().subtract(1, 'year'))

  return (
    <Header>
      {controls ? (
        <Column>
          <Header.Group size='small' variant='contained'>
            <Header.Button onClick={previousYear}>
              <KeyboardDoubleArrowLeftRounded />
            </Header.Button>
            <Header.Button onClick={previousMonth}>
              <ChevronLeftRounded />
            </Header.Button>
            {children}
            <Header.Button onClick={nextMonth}>
              <ChevronRightRounded />
            </Header.Button>
            <Header.Button onClick={nextYear}>
              <KeyboardDoubleArrowRightRounded />
            </Header.Button>
          </Header.Group>
        </Column>
      ) : (
        <Header.Title controls={controls}>{children}</Header.Title>
      )}
    </Header>
  )
}
