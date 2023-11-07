import { ModalProps as OldModalProps } from '@mui/material'

export interface ModalProps extends OldModalProps {
  closeButton?: boolean
  title?: string
  footer?: React.ReactNode
}
