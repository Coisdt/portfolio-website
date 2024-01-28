import React from 'react'
import NavigationLinks from './NavigationLinks'

const Navbar = () => {
  return (
    <nav className='navigation-bar'>
      <div className='nav-center'>
        {/* <!-- nav-header --> */}
        <header className='nav-header'>
          <img src='./images/logo.jpg' alt='logo'></img>
          <i id='toggle-nav-btn' className='fa-solid fa-bars'></i>
        </header>
        {/* <!-- nav-links --> */}
        <ul className='nav-links'>
          <NavigationLinks key={NavigationLinks.id} {...NavigationLinks} />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
