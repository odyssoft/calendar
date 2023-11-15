import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from './'
import { mockData } from './mocks'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar',
}

export default meta

type Story = StoryObj<typeof Calendar>

export const _Calendar: Story = {
  args: { data: mockData },
  argTypes: {
    views: {
      options: ['day', 'week', 'month', 'year'],
      control: { type: 'inline-check' },
    },
  },
}
