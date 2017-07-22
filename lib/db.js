export default async function loadDB() {
  const firebase = await import('firebase')

  try {
    firebase.initializeApp({
      apiKey: "AIzaSyBXU73rDy8qRUhgDjkSpWEdbs3yy_8WnCw",
      authDomain: "exiled-3966c.firebaseapp.com",
      databaseURL: "https://exiled-3966c.firebaseio.com",
      projectId: "exiled-3966c",
      storageBucket: "",
      messagingSenderId: "434917217496"
    })
  } catch (error) {
    if (!/already exists/.test(error.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase.database()
}