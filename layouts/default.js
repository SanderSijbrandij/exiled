import React, { Component } from 'react'
import Head from 'next/head'
import stylesheet from '../styles/index.scss'
import withRedux from 'next-redux-wrapper'
import firebase from 'firebase'
import initFirebase from '../lib/firebase'
import store from '../store'

import Navigation from '../components/Navigation'
import setUser from '../actions/set-user'

const Header = ({ path }) => (
  <header>
    <Head>
      <style type="text/css" dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />  
    </Head>
    <Navigation path={path} />
  </header>
)

const Footer = () => (
  <footer>
    <span>Created using nextJS & Firebase</span>
  </footer>
)

class Layout extends Component {
  constructor() {
    super()
    initFirebase()
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user && !this.props.user) {
        this.props.setUser(true)
      } else if (!user && this.props.user) {
        this.props.setUser(false)
      }
    })
  }

  render() {
    const { path, children } = this.props
    return (
      <div className='content'>
        <Header path={path} />
        <main>
          { children }
        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = { setUser }
export default withRedux(store, mapStateToProps, mapDispatchToProps)(Layout)