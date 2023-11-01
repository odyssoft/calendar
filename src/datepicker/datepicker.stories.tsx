import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DatePicker } from '.'
import { ThemeProvider } from '../theme'
import moment from 'moment'
import { DateType } from '../types'

export default {
  title: 'Components/Date Picker',
  component: DatePicker,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof DatePicker>

type Story = StoryObj<typeof DatePicker>

export const _DatePicker: Story = {}

export const WithDefaultDate: Story = {
  args: {
    label: 'Date',
    defaultValue: moment().format('DD-MM-YYYY') as DateType,
    onChange: console.log,
  },
}
