import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { ADD_TODO } from '../../store/todo-actions'
import { AddItem } from './AddItem'

export function AddItemContainer() {
  const dispatch = useDispatch()

  const handleAdd = (text) => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: uuid(),
        text,
        done: false,
      },
    })
  }

  return <AddItem onAdd={handleAdd} />
}
