import React from 'react'
import MainMenu from '../navigations/MainMenu'
import Link from 'next/link'

const Header = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <Link href="/"><a><img className="main-logo" src="/logo.svg" /></a></Link>
      </div>
      <MainMenu />
    </div>
  </header>

)

export default Header
