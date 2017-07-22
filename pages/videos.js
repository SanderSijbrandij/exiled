import Layout from '../layouts/default'

export default (props) => {
  return (
    <Layout path={props.url.pathname}>
      <h1>Videos</h1>
    </Layout>
  )
}