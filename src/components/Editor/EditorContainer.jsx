import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  updateTodoDone,
  updateTodoText,
  deleteTodo,
} from '../../store/todo-actions'
import { Editor } from './Editor'

export function EditorContainer() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.todos)

  const handleTextChange = (item, text) => {
    dispatch(updateTodoText(item.id, text))
  }

  const handleToggle = (item, done) => {
    dispatch(updateTodoDone(item.id, done))
  }

  const handleRemove = (item) => {
    dispatch(deleteTodo(item.id))
  }

  return (
    <Editor
      items={items}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  )
}
