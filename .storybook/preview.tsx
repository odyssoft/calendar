import { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { appBg: '#19191E' },
      current: 'dark',
      stylePreview: true,
    },
    layout: 'fullscreen',
  },
}

export default preview
