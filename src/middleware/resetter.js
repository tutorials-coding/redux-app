// Resets returned values from previous middleware fns
export const resetter = (store) => (next) => (action) => {
  next(action)
}
