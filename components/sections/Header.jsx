import React from 'react'
import MainMenu from '../navigations/MainMenu'

const Header = () => (
  <header>
    <div className="logo">
      <img src="/logo.svg" alt="EDLogo"/>
    </div>
    <MainMenu />
  </header>
)

export default Header
