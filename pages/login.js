import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import store from '../store'
import signIn from '../actions/sign-in'

class SignIn extends Component {
  handleSubmit() {
    const email = this.email.value
    const password = this.password.value
    signIn(email, password)    
  }

  render() {
    if (this.props.user) { return <div>You are already logged in</div> }
    return (
      <div>
        <h1>Sign in</h1>
        <input type="text" ref={c => this.email = c} placeholder="email" />
        <br />
        <input type="password" ref={c => this.password = c} placeholder="password" />
        <br />
        <button onClick={() => this.handleSubmit()}>Click me</button>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = { signIn }
export default withRedux(store, mapStateToProps, mapDispatchToProps)(SignIn)