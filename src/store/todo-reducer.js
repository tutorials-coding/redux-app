import { todoList } from './mock-items'
import { ADD_TODO, UPDATE_TODO_TEXT } from './todo-actions'

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
    default:
      return state
  }
}
