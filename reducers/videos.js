import types from '../actions/types'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case types.VIDEOS_FETCHED:
      return [].concat(payload)

    case types.VIDEO_CREATED:
      return [].concat(payload).concat(state)

    case types.VIDEO_UPDATED:
      return state.map(video => {
        return video.id === payload.id ? payload : video
      })

    case types.VIDEO_DELETED:
      return state.filter(video => {
        return video.id !== payload.id
      })

    default:
    return state
  }
}