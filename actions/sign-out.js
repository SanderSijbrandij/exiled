import firebase from 'firebase'

export const signOut = async () => {
  const response = firebase.auth().signOut()
  console.log(response)
}