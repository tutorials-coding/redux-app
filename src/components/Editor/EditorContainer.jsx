import React from 'react'
import { useSelector } from 'react-redux'

import { Editor } from './Editor'

export function EditorContainer() {
  const items = useSelector((state) => state.todos)

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
      items={items}
      onTextChange={handleTextChange}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  )
}
