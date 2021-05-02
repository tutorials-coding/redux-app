import { v4 as uuid } from 'uuid'

export const todoList = [
  {
    id: uuid(),
    text: 'Learn JS',
    done: true,
  },
  {
    id: uuid(),
    text: 'Learn React',
    done: true,
  },
  {
    id: uuid(),
    text: 'Learn Redux',
    done: true,
  },
  {
    id: uuid(),
    text: 'Learn pure functions',
    done: false,
  },
  {
    id: uuid(),
    text: 'Create todo app',
    done: false,
  },
]
