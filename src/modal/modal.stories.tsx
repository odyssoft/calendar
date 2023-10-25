import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'
import { Typography } from '@mui/material'
import { ThemeProvider } from '../theme'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Modal',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Modal>

export const _Modal: Story = {
  args: {
    children: <Typography variant='h4'>Storybook Modal</Typography>,
    closeButton: true,
    open: true,
    title: 'Storybook Modal',
  },
}
