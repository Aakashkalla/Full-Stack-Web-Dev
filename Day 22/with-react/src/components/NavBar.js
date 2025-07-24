import React from 'react'

const NavBar = (props) => {
  return (
    <div>
      <div className='logo'>{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
