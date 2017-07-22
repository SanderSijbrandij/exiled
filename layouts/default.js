import Head from 'next/head'
import Link from 'next/link'
import stylesheet from '../styles/index.scss'



const Navigation = ({ path }) => {
  const routes = [
    { href: '/', text: 'Home' },
    { href: '/videos', text: 'Videos' }
  ]

  return (
    <nav>
      <Link href="/"><strong>Exiled</strong></Link>
      { routes.map(route => {
          const classes = route.href === path ? 'current-path' : ''
          return (
            <Link key={route.href} href={route.href}>
              <li className={classes}>{route.text}</li>
            </Link>
          )
        })
      }
    </nav>
  )
}

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
    <span>Created using nextJS</span>
  </footer>
)

export default ({ path, children }) => (
  <div className='content'>
    <Header path={path} />
    <main>
      { children }
    </main>
    <Footer />
  </div>
)