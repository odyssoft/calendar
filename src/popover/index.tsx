import React from 'react'
import { Base } from './styles'

export const Popover = ({
  children,
  content,
}: {
  children: any
  content: any
}) => {
  const [anchor, setAnchor] = React.useState<any>()

  const handleClick = ({ currentTarget }: React.MouseEvent<any>) =>
    setAnchor(currentTarget)

  const handleClose = () => setAnchor(undefined)

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
      >
        {content}
      </Base>
    </div>
  )
}
