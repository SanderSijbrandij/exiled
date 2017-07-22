import React, { Component } from 'react'
import Layout from '../layouts/default'

import createVideo from '../lib/create-video'

export default class VideoPage extends Component {
  createAVideo() {
    createVideo("hoi", "984789234")
  }

  render() {
    return (
      <Layout path={this.props.url.pathname}>
        <h1>Videos</h1>
        <button onClick={() => this.createAVideo()}>create a video :P</button>
      </Layout>
    )
  }
}