import React from 'react'
import { TodoList } from './TodoList'

const todoList = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((id) => ({
  id,
  title: 'title',
  text: 'text',
}))

export function TodoListContainer() {
  return <TodoList items={todoList} />
}
