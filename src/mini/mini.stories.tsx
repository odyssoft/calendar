import type { Meta, StoryObj } from '@storybook/react'

import { MiniCalendar } from './'
import { ThemeProvider } from '../theme'
import moment from 'moment'

const meta: Meta<typeof MiniCalendar> = {
  component: MiniCalendar,
  title: 'Calendar/Mini',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
const now = moment().subtract(14, 'days')

type Story = StoryObj<typeof MiniCalendar>

export const Mini: Story = {}

export const selectedDates: Story = {
  args: {
    selectedDates: [now],
  },
}

export const selectedDatess: Story = {
  args: {
    selectedDates: [now, now.clone().add(9, 'days')],
  },
}
