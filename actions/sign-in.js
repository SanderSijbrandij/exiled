import firebase from 'firebase'
import types from './types'

export const signIn = async (email, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        dispatch({
          type: types.USER_STATUS_CHANGED,
          payload: true
        })       
      })
      .catch(error => {
        console.log('error: ', error)
        dispatch({
          type: types.USER_STATUS_CHANGED,
          payload: false
        })
      })

    firebase.auth().onAuthStateChanged(user => {
      dispatch({
        type: types.USER_STATUS_CHANGED,
        payload: !!user
      })
    })
  }
}