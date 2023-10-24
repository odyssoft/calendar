import { Fade, Menu, MenuItem } from '@mui/material'
import React from 'react'

import { DropdownButton } from './styles'
import { DropdownProps } from './types'

export const Dropdown = ({ children, items, name, ...rest }: DropdownProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>()
  const open = Boolean(anchorEl)

  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(currentTarget)

  const handleClose = () => setAnchorEl(undefined)

  return (
    <>
      <DropdownButton
        id={`fade-${name}`}
        aria-controls={open ? `fade-${name}-menu` : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </DropdownButton>
      <Menu
        id={`fade-${name}-menu`}
        MenuListProps={{
          'aria-labelledby': `fade-${name}-button`,
          style: { width: 225 },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ marginLeft: '1rem' }}
        TransitionComponent={Fade}
      >
        {items.map((item) => (
          <MenuItem onClick={handleClose} {...item} />
        ))}
      </Menu>
    </>
  )
}
