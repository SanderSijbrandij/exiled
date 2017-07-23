import firebase from 'firebase'

export const signIn = async (email, password) => {
  const response = firebase.auth().signInWithEmailAndPassword(email, password)
  console.log(response)
}

export const signOut = async () => {
  const response = firebase.auth().signOut()
  console.log(response)
}