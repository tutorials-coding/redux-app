export const makeActionCreator = (type, keys) => {
  return (...values) => {
    const payload = {}
    keys.forEach((_, index) => {
      payload[keys[index]] = values[index]
    })
    return {
      type,
      payload,
    }
  }
}
