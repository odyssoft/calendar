import type { Meta, StoryObj } from '@storybook/react'

import { CalendarSidebar } from './'
import { ThemeProvider } from '../theme'

const meta: Meta<typeof CalendarSidebar> = {
  component: CalendarSidebar,
  title: 'Calendar/Sidebar',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CalendarSidebar>

export const Sidebar: Story = {}
