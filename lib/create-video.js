import loadDB from './db'

export default async (title, url) => {
  const db = await loadDB()
  
  db.ref('videos')
    .push({ 
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