// safe handling of the results in the middleware chain
export const extractor = (middleware, name = null) => (store) => (next) => (
  action
) => {
  let prevResults
  const _next = (action) => {
    prevResults = next(action)
    return prevResults
  }

  // add result of the current middleware to the results object
  const currentResult = middleware(store)(_next)(action)
  const results = {
    ...prevResults,
  }
  name && (results[name] = currentResult)
  return results
}
