import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Plus } from 'react-bootstrap-icons'

import './AddItem.css'

export function AddItem({ onAdd }) {
  const [text, setText] = useState('')

  const handleChange = (value) => {
    setText(value)
  }

  const handleAdd = () => {
    onAdd(text)
    setText('')
  }

  return (
    <div className="add-item__container">
      <Form.Group className="add-item__item">
        <Form.Control
          type="text"
          className="add-item__input"
          value={text}
          onChange={(event) => handleChange(event.target.value)}
        />
        <Button
          type="button"
          variant="primary"
          className="add-item__button"
          onClick={handleAdd}
        >
          <Plus />
        </Button>
      </Form.Group>
    </div>
  )
}
