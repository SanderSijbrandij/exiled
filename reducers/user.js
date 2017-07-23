import types from '../actions/types'

export default (state = false, { type, payload } = {}) => {
  switch (type) {
    case types.USER_STATUS_CHANGED:
      return payload
  
    default: 
      return state
  }
}