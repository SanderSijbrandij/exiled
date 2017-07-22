import Layout from '../layouts/default'

export default (props) => {
  const styles = {
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      maxWidth: '900px',
      margin: '0 auto',
    },
    player: {
      width: '400px',
    },
    playlist: {
      width: '200px'
    }
  }

  return (
    <Layout path={props.url.pathname}>
      <h1>Videos</h1>
      <div style={styles.content}>
        <div style={styles.player}>
          video goes here
        </div>
        <div style={styles.playlist}>
          playlist goes here.
        </div>
      </div>
    </Layout>
  )
}