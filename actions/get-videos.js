import firebase from 'firebase'
import types from './types'
import initFirebase from '../lib/firebase'

export default () => {
  return async dispatch => {
    initFirebase() // all firebase actions in getInitialProps need to init firebase
    const db = firebase.database()
    const videosRef = db.ref('videos')
    
    const videos = await videosRef.once('value')
    const keys = Object.keys(videos.val())
    const values = Object.values(videos.val())
    
    const payload = {}

    keys.map((key, index) => {
      payload[key] = values[index]
    })

    dispatch({
      type: types.VIDEOS_FETCHED,
      payload
    })
  }
}