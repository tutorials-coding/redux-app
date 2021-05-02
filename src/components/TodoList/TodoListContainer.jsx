import React from 'react'
import { TodoList } from './TodoList'

import { todoList } from '../../store/mock-items'

export function TodoListContainer() {
  const doneItems = todoList.filter((item) => item.done)
  const todoItems = todoList.filter((item) => !item.done)

  return <TodoList doneItems={doneItems} todoItems={todoItems} />
}
