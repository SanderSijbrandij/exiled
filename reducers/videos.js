import types from '../actions/types'

export default (state = null, action = {}) => {
  switch(action.type) {
    case types.VIDEOS_FETCHED:
      return Object.assign({}, action.payload)

    case types.VIDEO_CREATED:
      return Object.assign({}, state, payload)

    case types.VIDEO_UPDATED:
      return Object.assign({}, state, payload)

    case types.VIDEO_DELETED:
      const { payload, ...rest } = state
      return Object.assign({}, rest)

    default:
    return state
  }
}