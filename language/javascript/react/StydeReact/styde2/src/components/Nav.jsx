import React from 'react'
import { Link } from 'react-router-dom';
import navcss from './Nav.module.css'

//  Компонент высшего порядка, является обёрткой для уменьшения 
// количества использования, например если нужно добавить один и тот же класс
function AppLink(props) {
    return (
        <Link {...props} className={navcss.active}/>
    )
}

function Nav() {
  return (
    <nav>
        <AppLink to='/'>Home</AppLink>
        <AppLink to='/Portfolio'>Portfolio</AppLink>
        <AppLink to='/Contacts'>Contacts</AppLink>
    </nav>
  )
}

export default Nav