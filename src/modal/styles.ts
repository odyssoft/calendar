import { Modal, styled } from '@mui/material'
import { Box, Column, Flex, Row } from '../styles'

export const Base = Object.assign(
  styled(Modal)({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  }),
  {
    Body: styled(Flex)(({ theme }) => ({
      flexDirection: 'column',
      padding: theme.space.md,
    })),

    Close: styled(Column)(({ theme }) => ({
      alignItems: 'flex-end',
      flex: 1,
      '& > button': {
        borderRadius: '33%',
        color: theme.palette.text.primary,
        marginRight: '.25rem',
        padding: '.25rem',
      },
    })),

    Content: styled(Box)(({ theme }) => ({
      backdropFilter: 'blur(21px) saturate(2.5)',
      border: `1px solid ${theme.colors.border}`,
      borderRadius: 12,
      boxShadow: theme.boxShadows.md,
      minWidth: 400,
      outline: 0,
      outlineWidth: 0,
    })),

    Footer: styled(Row)(({ theme }) => ({ padding: theme.space.md })),

    Header: styled(Row)(({ theme }) => ({
      borderBottom: `1px solid ${theme.colors.border}`,
    })),

    Title: styled(Column)(({ theme }) => ({
      alignItems: 'flex-start',
      flex: 1,
      fontWeight: theme.fontWeights.bold,
      padding: theme.space.xs,
    })),
  }
)
