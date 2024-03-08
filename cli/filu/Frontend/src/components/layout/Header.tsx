import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <Link to={'/'}>
          Filu
        </Link>
      </div>
      <div>
        <input type="text" placeholder='Search file' />
      </div>
      <div>Profile</div>
    </div>
  )
}

export default Header