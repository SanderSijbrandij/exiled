import firebase from 'firebase'

export default async () => {
  const db = firebase.database()
  const videosRef = db.ref('videos')
  
  const videos = await videosRef.once('value')
  return videos.val()
}