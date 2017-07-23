import types from './types'

export default (status) => {
  return {
    type: types.USER_STATUS_CHANGED,
    payload: status
  }
}