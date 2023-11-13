import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

import { Base } from './styles'
import { ModalProps } from './types'

export const Modal = ({
  children,
  closeButton,
  footer,
  title,
  ...rest
}: ModalProps) => (
  <Base {...rest}>
    <Base.Content>
      {(closeButton || title) && (
        <Base.Header>
          {title && <Base.Title>{title}</Base.Title>}
          {closeButton && (
            <Base.Close>
              <IconButton
                aria-label='close-modal'
                onClick={() => (rest.onClose as any)?.()}
              >
                <Close />
              </IconButton>
            </Base.Close>
          )}
        </Base.Header>
      )}
      <Base.Body>{children}</Base.Body>
      {footer && <Base.Footer>{footer}</Base.Footer>}
    </Base.Content>
  </Base>
)
