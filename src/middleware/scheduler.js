export const scheduler = (store) => (next) => (action) => {
  const delayMs = action?.meta?.delayMs
  if (!delayMs) {
    return next(action)
  }

  const timeoutId = setTimeout(() => next(action), delayMs)
  return () => {
    console.log('===> cancelled')
    clearTimeout(timeoutId)
  }
}
