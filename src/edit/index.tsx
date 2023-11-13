import { Button } from '@mui/material'
import React from 'react'

import { Modal as Base } from '../modal'
import { Row } from '../styles'
import { EditProvider, useEdit } from './context'
import { Form } from './form'

export const EditModal = () => (
  <EditProvider>
    <Modal />
  </EditProvider>
)

const Modal = () => {
  const { disabled, event, handleClose, handleSave, setEvent } = useEdit()

  return (
    <Base
      closeButton
      footer={
        <Row justify='flex-end' style={{ gap: '.5rem' }}>
          <Button
            color='inherit'
            size='small'
            variant='outlined'
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            disabled={disabled}
            size='small'
            variant='contained'
            onClick={handleSave}
            sx={{ color: disabled ? 'grey !important' : undefined }}
          >
            Save
          </Button>
        </Row>
      }
      open={!!event}
      onClose={handleClose}
      title='Edit Event'
    >
      <Form />
    </Base>
  )
}
