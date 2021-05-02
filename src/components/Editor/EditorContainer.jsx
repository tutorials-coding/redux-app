import React from 'react'
import { Editor } from './Editor'
import { todoList } from '../../store/mock-items'

export function EditorContainer() {
  const handleTextChange = (item, value) => {
    console.log(item, value)
  }

  const handleToggle = (item, value) => {
    console.log(item, value)
  }

  const handleRemove = (item) => {
    console.log(item)
  }

  return (
    <Editor
      items={todoList}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  )
}
