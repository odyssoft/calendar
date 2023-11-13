import { ModalProps } from '@mui/material'
import React from 'react'

import { Base } from './styles'
import { PopoverProps } from './types'

export const Popover = ({
  children,
  content,
  onClick,
  onClose,
  open: isOpen,
  ...rest
}: PopoverProps) => {
  const [anchor, setAnchor] = React.useState<any>()

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchor(event.currentTarget)
    onClick?.(event)
  }

  const handleClose: ModalProps['onClose'] = (...props) => {
    setAnchor(undefined)
    onClose?.(...props)
  }

  const open = React.useMemo(() => isOpen || !!anchor, [isOpen, anchor])

  React.useEffect(() => {
    isOpen === false && !!anchor && setAnchor(undefined)
  }, [isOpen])

  return (
    <div>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child as React.ReactElement, {
          'aria-describedby': open ? 'popover' : undefined,
          onClick: handleClick,
        })
      )}
      <Base
        id='popover'
        open={!!open}
        anchorEl={anchor!}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        {...rest}
      >
        {content}
      </Base>
    </div>
  )
}
