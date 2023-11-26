import type { Meta, StoryObj } from '@storybook/react'

import { CalendarBody } from './'
import { ThemeProvider } from '../theme'
import { Context } from '../context'
import moment from 'moment'
import { getMonthEvents, getWeek, getYear } from '../helper'
import { mockData } from '../mocks'
import { CalendarView } from '../types'

const meta: Meta<typeof CalendarBody> = {
  component: CalendarBody,
  title: 'Sections/Body',
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

type Story = StoryObj<typeof CalendarBody>

const date = moment()

const params = (view: CalendarView) => ({
  calendar: {
    data: [],
    date,
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
export const Month: Story = {
  parameters: {
    calendar: {
      data: [],
      date,
      month: getMonthEvents({
        data: mockData,
        date,
      }),
      view: 'month',
    },
  },
}

export const Year: Story = {
  parameters: {
    calendar: {
      data: [],
      date,
      view: 'year',
      year: getYear(date),
    },
  },
}
