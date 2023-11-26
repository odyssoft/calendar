import type { Meta, StoryObj } from '@storybook/react'

import moment from 'moment'
import { MiniCalendar } from '.'
import { ThemeProvider } from '../theme'
import { DateType } from '../types'

const meta: Meta<typeof MiniCalendar> = {
  component: MiniCalendar,
  title: 'Components/Mini',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
const now = moment()

type Story = StoryObj<typeof MiniCalendar>

export const Mini: Story = {}

export const selectedDate: Story = {
  args: {
    selectedDate: now.format('DD-MM-YYYY') as DateType,
  },
}
