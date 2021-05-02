import React from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../../store/todo-actions'
import { AddItem } from './AddItem'

export function AddItemContainer() {
  const dispatch = useDispatch()

  const handleAdd = (text) => {
    dispatch(addTodo(text))
  }

  return <AddItem onAdd={handleAdd} />
}
