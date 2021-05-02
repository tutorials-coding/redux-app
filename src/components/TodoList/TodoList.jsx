import React from 'react'
import Card from 'react-bootstrap/Card'

import './TodoList.css'

export function TodoList({ items }) {
  return (
    <div className="todo-list__container">
      {items.map((item) => (
        <Card key={item.id} className="todo-list__item">
          <Card.Header>
            <span className="todo-list__item-title">{item.title}</span>
          </Card.Header>
          <Card.Body>
            <Card.Text>{item.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
