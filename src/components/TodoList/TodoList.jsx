import React from 'react'
import Card from 'react-bootstrap/Card'

import './TodoList.css'

export function TodoList({ items }) {
  const doneItems = items.filter((item) => item.done)
  const todoItems = items.filter((item) => !item.done)

  return (
    <div className="todo-list__container">
      <div className="todo-list__items-container">
        <h2>Todo:</h2>
        <ul>
          {todoItems.map((item) => (
            <li key={item.id} className="todo-list__item">
              <span className="todo-list__item-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="todo-list__items-container">
        <h2>Done:</h2>
        <ul>
          {doneItems.map((item) => (
            <li key={item.id} className="todo-list__item">
              <span className="todo-list__item-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
