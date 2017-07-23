import React, { Component } from 'react'
import Layout from '../layouts/default'

import createVideo from '../lib/create-video'

export default class VideoPage extends Component {
  async handleSubmit() {
    const { title, url } = this
    createVideo(title.value, url.value)
  }

  render() {
    return (
      <Layout path={this.props.url.pathname}>
        <div className="content-text">
          <h1>Videos</h1>
          Working on teh firebase!
        </div>
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
      </Layout>
    )
  }
}