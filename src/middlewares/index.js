const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action)
}

const feacturing = (store) => (next) => (actionInfo) => {
  const feactured = [ { name: 'chucho' }, ...actionInfo.action.payload ]
  const updateFeactured = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: feactured }
  }
  next(updateFeactured)
}

export { logger, feacturing }