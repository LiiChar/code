import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../../Main/Image/Image'
import s from './Friens.module.css'

function Friens({ names, address }) {
    return (

        <div className={s.dialogs}>
            <div>
                <Image ClassImg={'ImgLogoHeader'} img={'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'} />
            </div>
            <div className={s.item}><NavLink to={address}>{names}</NavLink></div>
        </div>
    )
}

export default Friens