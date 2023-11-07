import { IconButton } from '@mui/material'
import { Base } from './styles'
import { ModalProps } from './types'
import { Close } from '@mui/icons-material'

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
