import type { Meta, StoryObj } from '@storybook/react'

import { CalendarWeek } from './'
import { ThemeProvider } from '../theme'
import { Context } from '../context'
import moment from 'moment'
import { getMonthEvents, getWeek } from '../helper'
import { mockData } from '../mocks'
import { CalendarView } from '../types'

const meta: Meta<typeof CalendarWeek> = {
  component: CalendarWeek,
  title: 'Calendar/Week',
  decorators: [
    (Story, context) => (
      <ThemeProvider>
        <Story {...context} />
      </ThemeProvider>
    ),
    (Story, { parameters: { calendar } }) => (
      <Context.Provider value={calendar}>
        <Story />
      </Context.Provider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CalendarWeek>

const date = moment()

const params = (view: CalendarView) => ({
  calendar: {
    data: [],
    date,
    editable: true,
    week: getWeek({
      date,
      month: getMonthEvents({
        data: mockData,
        date,
      }),
    }),
    view,
  },
})

export const Day: Story = { parameters: params('day') }

export const Week: Story = { parameters: params('week') }
