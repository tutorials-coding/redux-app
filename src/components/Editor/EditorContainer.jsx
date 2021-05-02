import React from 'react'
import { Editor } from './Editor'
import { todoList } from '../../store/mock-items'

export function EditorContainer() {
  return <Editor items={todoList} />
}
