import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Trash } from 'react-bootstrap-icons'

import { AddItemContainer } from '../AddItem'

import './Editor.css'

export function Editor({ items, onTextChange, onToggle, onRemove }) {
  const handleChange = (item, value) => {
    onTextChange(item, value)
  }

  const handleToggle = (item, value) => {
    onToggle(item, value)
  }

  const handleRemove = (item) => {
    onRemove(item)
  }

  return (
    <>
      <div className="editor__container">
        {items.map((item) => (
          <Form.Group key={item.id} className="editor__item">
            <Form.Check
              type="checkbox"
              className="editor__checkbox"
              checked={item.done}
              onChange={(event) => handleToggle(item, event.target.checked)}
            />
            <Form.Control
              type="text"
              className="editor__input"
              value={item.text}
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
        <AddItemContainer />
      </div>
    </>
  )
}
