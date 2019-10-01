import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import Nav from './Nav'
import Cart from './Cart'
import HeaderStyles from './styles/HeaderStyles'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const Header = () => {
  return (
    <HeaderStyles>
      <div className="bar">
        <h1>
          <Link href="/">
            <a>Diarybun</a>
          </Link>
        </h1>
        <Nav />
      </div>
      <Cart />
    </HeaderStyles>
  )
}

export default Header
