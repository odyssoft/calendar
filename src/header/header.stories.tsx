import type { Meta, StoryObj } from '@storybook/react'

import { CalendarHeader } from './'
import { ThemeProvider } from '../theme'

const meta: Meta<typeof CalendarHeader> = {
  component: CalendarHeader,
  title: 'Calendar/Header',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CalendarHeader>

export const Header: Story = {}
