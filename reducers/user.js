import types from '../actions/types'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case types.USER_SIGNED_IN:
      return Object.assign({}, payload)
  
    case types.USER_SIGNED_OUT:
      return null
  
    default: 
      return state
  }
}