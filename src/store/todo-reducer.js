import { todoList } from './mock-items'
import {
  ADD_TODO,
  UPDATE_TODO_TEXT,
  UPDATE_TODO_DONE,
  DELETE_TODO,
} from './todo-actions'

export const todoReducer = (state = todoList, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const item = action.payload
      return [...state, item]
    }
    case UPDATE_TODO_TEXT: {
      const { id, text } = action.payload
      return [
        ...state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              text,
            }
          }
          return item
        }),
      ]
    }
    case UPDATE_TODO_DONE: {
      const { id, done } = action.payload
      return [
        ...state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              done,
            }
          }
          return item
        }),
      ]
    }
    case DELETE_TODO: {
      const { id } = action.payload
      return [...state.filter((item) => item.id !== id)]
    }
    default:
      return state
  }
}
