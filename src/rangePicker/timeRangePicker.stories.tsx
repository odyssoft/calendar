import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TimeRangePicker } from './time'
import { ThemeProvider } from '../theme'

export default {
  title: 'Components/Time Range Picker',
  component: TimeRangePicker,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof TimeRangePicker>

type Story = StoryObj<typeof TimeRangePicker>

export const _TimeRangePicker: Story = {
  args: {
    onChange: console.log,
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: {
      end: '13:15',
      start: '11:00',
    },
    onChange: console.log,
  },
}
