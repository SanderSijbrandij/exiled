import firebase from 'firebase'
import types from './types'
import initFirebase from '../lib/firebase'

export default () => {
  return async dispatch => {
    initFirebase() // all firebase actions in getInitialProps need to init firebase
    const db = firebase.database()
    const videosRef = db.ref('videos')
    
    const videos = await videosRef.once('value')

    dispatch({
      type: types.VIDEOS_FETCHED,
      payload: videos.val()
    })
  }
}