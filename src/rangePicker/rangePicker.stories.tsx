import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { RangePicker } from '.'
import { ThemeProvider } from '../theme'

export default {
  title: 'Components/Range Picker',
  component: RangePicker,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof RangePicker>

type Story = StoryObj<typeof RangePicker>

export const _RangePicker: Story = {}
