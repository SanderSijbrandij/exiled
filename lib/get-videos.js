import loadDB from './db'

export default async () => {
  const db = await loadDB()
  const videosRef = db.ref('videos')
  const videos = await videosRef.once('value')
  return videos.val()
}