import { v4 as uuid } from 'uuid'

export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'
export const UPDATE_TODO_DONE = 'UPDATE_TODO_DONE'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      text,
      done: false,
    },
  }
}

export const updateTodoText = (id, text) => {
  return {
    type: UPDATE_TODO_TEXT,
    payload: {
      id,
      text,
    },
  }
}

export const updateTodoDone = (id, done) => {
  return {
    type: UPDATE_TODO_DONE,
    payload: {
      id,
      done,
    },
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  }
}
