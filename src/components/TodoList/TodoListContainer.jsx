import React from 'react'
import { useSelector } from 'react-redux'

import { TodoList } from './TodoList'

export function TodoListContainer() {
  const doneItems = useSelector((state) =>
    state.todos.filter((item) => item.done)
  )
  const todoItems = useSelector((state) =>
    state.todos.filter((item) => !item.done)
  )

  return <TodoList doneItems={doneItems} todoItems={todoItems} />
}
