import React from 'react'
import { TodoList } from './TodoList'

import { todoList } from '../../store/mock-items'

export function TodoListContainer() {
  return <TodoList items={todoList} />
}
