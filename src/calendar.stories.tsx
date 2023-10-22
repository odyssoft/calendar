import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from './'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar',
}

export default meta

type Story = StoryObj<typeof Calendar>

export const _Calendar: Story = { args: { data: [] } }
