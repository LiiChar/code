import React from 'react'
import Image from '../Main/Image/Image'
import LogoText from '../Main/LogoText/LogoText'
import s from './Main.module.css';
import Posts from '../Main/Posts/Posts';

function Main(props) {
    let Poste = props.post.dialogsDate.posts.post.map(e => 
        <Posts PostContents={e} act={props}/>
        )

    return (
        <div className={s.Main}>
            <Image ClassImg={'ImgBack'} img={'https://img1.akspic.ru/attachments/crops/2/2/4/0/50422/50422-senokosnoye_ugodye-pole-selskoe_hozyajstvo-zakat-risovoe_pole-2560x1440.jpg'}/>
            <LogoText act={props.post.dialogsDate.posts} act1={props.act}/>
            <div>{Poste}</div> 
        </div>
    )
}

export default Main