import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Trash } from 'react-bootstrap-icons'

import './Editor.css'

export function Editor({ items }) {
  const handleChange = (item, value) => {
    console.log(item, value)
  }

  const handleToggle = (item, value) => {
    console.log(item, value)
  }

  const handleRemove = (item) => {
    console.log(item)
  }

  return (
    <div className="editor__container">
      {items.map((item) => (
        <Form.Group key={item.id} className="editor__item">
          <Form.Check
            type="checkbox"
            className="editor__checkbox"
            defaultValue={item.done}
            onChange={(event) => handleToggle(item, event.target.checked)}
          />
          <Form.Control
            type="text"
            className="editor__input"
            defaultValue={item.text}
            onChange={(event) => handleChange(item, event.target.value)}
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
