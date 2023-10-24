import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'

import { Context } from '../context'
import { getMonthEvents } from '../helper'
import { mockData } from '../mocks'
import { ThemeProvider } from '../theme'
import { CalendarMonth } from './'

const meta: Meta<typeof CalendarMonth> = {
  component: CalendarMonth,
  title: 'Calendar/Month',
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

type Story = StoryObj<typeof CalendarMonth>

const date = moment()

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
