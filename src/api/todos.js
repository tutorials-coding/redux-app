export const getAllTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'id-1',
          text: 'Learn JS',
          done: true,
        },
        {
          id: 'id-2',
          text: 'Learn React',
          done: true,
        },
        {
          id: 'id-3',
          text: 'Learn Redux',
          done: true,
        },
        {
          id: 'id-4',
          text: 'Learn pure functions',
          done: false,
        },
        {
          id: 'id-5',
          text: 'Create todo app',
          done: false,
        },
      ])
    }, 500)
  })
}
