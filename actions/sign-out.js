import firebase from 'firebase'
import types from './types'

export default () => {
  firebase.auth().signOut()
  return {
    type: types.USER_STATUS_CHANGED,
    payload: false
  }
}