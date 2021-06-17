import { getAllTodos } from '../api/todos'
import { INIT_TODOS } from './todo-actions'

export const getTodos = () => {
  return (dispatch) => {
    return getAllTodos()
      .then((todos) => {
        dispatch({
          type: INIT_TODOS,
          payload: todos,
        })
        return todos
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
