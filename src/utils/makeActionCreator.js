export const makeActionCreator = (type, keys, valueProviders = {}) => {
  return (...values) => {
    const payload = {}
    keys.forEach((_, index) => {
      payload[keys[index]] = values[index]
    })
    Object.entries(valueProviders).forEach(([key, provideFn]) => {
      payload[key] = provideFn()
    })
    return {
      type,
      payload,
    }
  }
}
