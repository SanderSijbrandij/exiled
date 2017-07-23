import React, { Component } from 'react'
import Link from 'next/link'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'

class Navigation extends Component {
  routes() {
    return [
      { href: '/', text: 'Home' },
      { href: '/videos', text: 'Videos' }
    ]
  } 

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
        {user && 'You are logged in' }
      </nav>
    )
  }
}


const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = { }
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Navigation)