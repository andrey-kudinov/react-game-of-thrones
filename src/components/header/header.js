import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <h3><Link to='/'>Game of Thrones</Link></h3>
      <ul className='links'>
        <li><Link to='/characters/'>Characters</Link></li>
        <li><Link to='/books/'>Books</Link></li>
        <li><Link to='/houses/'>Houses</Link></li>
      </ul>
    </div>
  )
}

export default Header