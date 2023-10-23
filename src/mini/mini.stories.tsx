import type { Meta, StoryObj } from '@storybook/react'

import { MiniCalendar } from './'
import { ThemeProvider } from '../theme'

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

type Story = StoryObj<typeof MiniCalendar>

export const Mini: Story = {}
