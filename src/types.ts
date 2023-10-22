import { Property } from 'csstype'
import React from 'react'

export type CalendarContext = {
  sidebar?: boolean
  toggleSidebar: () => void
}

export type CalendarView = 'day' | 'week' | 'month' | 'year'

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Property.AlignItems
  direction?: Property.FlexDirection
  justify?: Property.JustifyContent
  wrap?: Property.FlexWrap
}
