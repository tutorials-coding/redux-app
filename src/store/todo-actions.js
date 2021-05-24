import { v4 as uuid } from 'uuid'
import { makeActionCreator } from '../utils/makeActionCreator'

export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'
export const UPDATE_TODO_DONE = 'UPDATE_TODO_DONE'
export const DELETE_TODO = 'DELETE_TODO'
export const INIT_TODOS = 'INIT_TODOS'

export const addTodo = makeActionCreator(ADD_TODO, ['text'], {
  id: () => uuid(),
  done: () => false,
})

export const updateTodoText = makeActionCreator(UPDATE_TODO_TEXT, [
  'id',
  'text',
])

export const updateTodoDone = makeActionCreator(UPDATE_TODO_DONE, [
  'id',
  'done',
])

export const deleteTodo = makeActionCreator(DELETE_TODO, ['id'])
