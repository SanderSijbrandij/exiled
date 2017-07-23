import React, { Component } from 'react'

export default class SignIn extends Component {
  render() {
    if (this.props.user) { return null }
    else {
      return <div>I will be some modal.</div>
    }
  }
}