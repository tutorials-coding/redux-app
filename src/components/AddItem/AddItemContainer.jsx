import React from 'react'

import { AddItem } from './AddItem'

export function AddItemContainer() {
  const handleAdd = (text) => {
    console.log(text)
  }

  return <AddItem onAdd={handleAdd} />
}
