import React from 'react';
import './Image.module.css';

function Image({ClassImg, img}) {
  return (
    <div >
        <img className={`${ClassImg}`} src={`${img}`}  alt="" />
    </div>
  )
}

export default Image