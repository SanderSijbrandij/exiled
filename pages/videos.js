import React, { Component } from 'react'
import Layout from '../layouts/default'

import createVideo from '../lib/create-video'
import getVideos from '../lib/get-videos'

export default class VideoPage extends Component {
  static async getInitialProps() {
    const videos = await getVideos()
    return { videos }
  }

  async handleSubmit() {
    const { title, url } = this
    createVideo(title.value, url.value)
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
    const { videos } = this.props

    return (
      <Layout path={this.props.url.pathname}>
        <div className="content-text">
          <h1>Videos</h1>
          {!videos && <strong>No videos found</strong>}
          {videos && this.renderPlayList()}
        </div>
        { this.props.user && 
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