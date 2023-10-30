import React from 'react'
import { Base } from './styles'
import { PopoverProps } from './types'
import { ModalProps } from '@mui/material'

export const Popover = ({
  children,
  content,
  onClose,
  ...rest
}: PopoverProps) => {
  const [anchor, setAnchor] = React.useState<any>()

  const handleClick = ({ currentTarget }: React.MouseEvent<any>) =>
    setAnchor(currentTarget)

  const handleClose: ModalProps['onClose'] = (...props) => {
    setAnchor(undefined)
    onClose?.(...props)
  }

  const open = Boolean(anchor)

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
        open={open}
        anchorEl={anchor!}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'center',
        }}
        {...rest}
      >
        {content}
      </Base>
    </div>
  )
}
