import React, { Component } from 'react'
import Head from 'next/head'

import stylesheet from '../styles/index.scss'
import Navigation from '../components/Navigation'


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

export default class Layout extends Component {
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
