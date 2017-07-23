import firebase from 'firebase'

export const signIn = async (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response.refreshToken)
    })
    .catch(error => {
      console.log('error: ', error)
    })

  firebase.auth().onAuthStateChanged(user => {
    console.log('user: ', user )
  })
}