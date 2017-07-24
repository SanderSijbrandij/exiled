import React, { Component } from 'react'
import Layout from '../layouts/default'

import withRedux from 'next-redux-wrapper'
import store from '../store'

import createVideo from '../actions/create-video'
import getVideos from '../actions/get-videos'

class VideoPage extends Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    const action = getVideos()
    
    await store.dispatch(action)
    
    const payload = await action.payload
    return { videos: payload }
  }

  async handleSubmit() {
    const title = this.title.value
    const url = this.url.value

    this.props.createVideo({ title, url })
  }

  renderPlayList() {
    const { videos } = this.props
    const keys = Object.keys(videos)
    const values = Object.values(videos)
    
    return (
      <ul>
        {keys.map((key, index) => this.renderVideo(key, values[index]))}
      </ul>
    )
  }

  renderVideo(id, video) {
    return <li key={id}>{video.title} - {video.url}</li>
  }

  render() {
    const { videos, user } = this.props

    return (
      <Layout path={this.props.url.pathname}>
        <div className="content-text">
          <h1>Videos</h1>
          {!videos && <strong>No videos found</strong>}
          {videos && this.renderPlayList()}
        </div>
        {user && 
        <div className="content-aside">
          <h3>add one</h3>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={c => this.title = c}/>
          <br />
          <label htmlFor="url">Youtube ID</label>
          <input type="text" name="url" ref={c => this.url = c}/>
          <br />
          <button onClick={() => this.handleSubmit()}>Create</button>
        </div>
        }
      </Layout>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = { getVideos, createVideo }
export default withRedux(store, mapStateToProps, mapDispatchToProps)(VideoPage)