import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DateRangePicker } from './date'
import { ThemeProvider } from '../theme'

export default {
  title: 'Components/Date Range Picker',
  component: DateRangePicker,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof DateRangePicker>

type Story = StoryObj<typeof DateRangePicker>

export const _DateRangePicker: Story = {
  args: {
    onChange: console.log,
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: {
      end: '20-10-2021',
      start: '10-10-2021',
    },
    onChange: console.log,
  },
}
