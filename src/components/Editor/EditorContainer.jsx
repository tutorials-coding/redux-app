import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  UPDATE_TODO_TEXT,
  UPDATE_TODO_DONE,
  DELETE_TODO,
} from '../../store/todo-actions'
import { Editor } from './Editor'

export function EditorContainer() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.todos)

  const handleTextChange = (item, text) => {
    dispatch({
      type: UPDATE_TODO_TEXT,
      payload: {
        id: item.id,
        text,
      },
    })
  }

  const handleToggle = (item, done) => {
    dispatch({
      type: UPDATE_TODO_DONE,
      payload: {
        id: item.id,
        done,
      },
    })
  }

  const handleRemove = (item) => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id: item.id,
      },
    })
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
