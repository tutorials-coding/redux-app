// Resets returned values from next middleware fns
export const resetter = (store) => (next) => (action) => {
  next(action)
}
