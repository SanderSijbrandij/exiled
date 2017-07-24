import firebase from 'firebase'
import types from './types'

export default async values => {
  return async dispatch => {
    const db = firebase.database()
    const videosRef = db.ref('videos')
    
    db.push(values)
    .then(async res => {
      const data = await res.json()

      dispatch({
        type: types.VIDEO_CREATED,
        payload: data
      })
    })
    .catch(err => {
      console.error(err)
    })
  }
}