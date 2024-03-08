import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';



function Navigation() {
    return (
        <div className={s.Nav}>
            <div className={s.NavContent}>
                <div className={s.navLink}><NavLink to="/Profile">Профиль</NavLink> </div>
                <div className={s.navLink}><NavLink to="/Message">Сообщение</NavLink></div>
                <div className={s.navLink}><NavLink to="/News">Новости</NavLink></div>
                <div className={s.navLink}><NavLink to="/Music">Музыка</NavLink></div>
                <div className={s.navLink}><NavLink to="/Setting">Настройки</NavLink></div>
            </div>
        </div>
    )
}

export default Navigation