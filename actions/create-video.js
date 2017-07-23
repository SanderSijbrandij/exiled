import firebase from 'firebase'

export default async (title, url) => {
  const db = firebase.database()
  const videosRef = db.ref('videos')
  
  db.push({ 
    title: title,
    url: url
  })
  .then(res => {
    console.log('created!')
  })
  .catch(err => {
    console.error(err)
  })
}