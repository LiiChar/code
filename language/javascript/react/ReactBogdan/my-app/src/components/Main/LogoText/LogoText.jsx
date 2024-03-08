import React from 'react'
import Image from '../Image/Image'
import s from './LogoText.module.css';

import './../../../index.css'
import Form from '../Form/Form';


function LogoText(props) {
  console.log(props);
  return (
    <div >
      <div className={s.LogText}>
        <div>
          <Image ClassImg={'ImgLogo'} img={'https://images.says.com/uploads/story_source/source_image/358308/f77d.jpg'} />
        </div>
        <div className={s.description}>
          <p>Иванов Максим</p>
          <p>Родился 05.05.2005</p>
        </div>
      </div> 
      <div>
        <Form act={props} act1={props.act1}/>
      </div>
    </div>
  )
}

export default LogoText