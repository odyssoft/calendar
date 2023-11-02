import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TimePicker } from '.'
import { ThemeProvider } from '../theme'

export default {
  title: 'Components/Time Picker',
  component: TimePicker,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof TimePicker>

type Story = StoryObj<typeof TimePicker>

export const _TimePicker: Story = {
  args: {
    onChange: console.log,
  },
}
