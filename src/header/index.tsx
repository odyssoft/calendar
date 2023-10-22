import { useCalendar } from '../context'
import { Header } from './styles'
import React from 'react'

export const CalendarHeader = () => {
  const {} = useCalendar()
  return <Header></Header>
}
