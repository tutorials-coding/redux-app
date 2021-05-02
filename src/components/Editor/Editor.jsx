import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Trash } from 'react-bootstrap-icons'

import './Editor.css'

export function Editor({ items }) {
  const handleChange = (event) => {
    console.log(event.target.value)
  }

  const handleRemove = (item) => {
    console.log(item)
  }

  return (
    <div className="editor__container">
      {items.map((item) => (
        <Form.Group key={item.id} className="editor__item">
          <Form.Control
            type="text"
            className="editor__input"
            defaultValue={item.text}
            onChange={handleChange}
          />
          <Button
            type="button"
            variant="danger"
            className="editor__button"
            onClick={() => handleRemove(item)}
          >
            <Trash />
          </Button>
        </Form.Group>
      ))}
    </div>
  )
}
