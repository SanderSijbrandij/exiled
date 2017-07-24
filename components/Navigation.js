import React, { Component } from 'react'
import Link from 'next/link'
import withRedux from 'next-redux-wrapper'
import store from '../store'

import signOut from '../actions/sign-out'

class Navigation extends Component {
  routes() {
    return [
      { href: '/', text: 'Home' },
      { href: '/videos', text: 'Videos' }
    ]
  } 

  signOut() { this.props.signOut() }

  render() {
    const { path, user } = this.props
    return (
      <nav>
        <Link href="/"><strong>Exiled</strong></Link>
        { this.routes().map(route => {
            const classes = route.href === path ? 'current-path' : ''
            return (
              <Link key={route.href} href={route.href}>
                <li className={classes}>{route.text}</li>
              </Link>
            )
          })
        }
        {user && <button onClick={() => this.signOut()}>sign out</button> }
      </nav>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = { signOut }
export default withRedux(store, mapStateToProps, mapDispatchToProps)(Navigation)