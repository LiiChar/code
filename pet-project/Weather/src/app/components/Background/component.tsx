import Image, { StaticImageData } from 'next/image';
import React from 'react'
import SummerBackground from '../../assets/image/summer.jpg'
import AutumBackground from '../../assets/image/autum.jpg'
import VesnaBackground from '../../assets/image/vesna.jpg'
import ZimaBackground from '../../assets/image/zima.jpg'

const Background = () => {
    const dateSeason = new Date().getMonth()
    const seasons = [
        ZimaBackground,
        ZimaBackground,
        VesnaBackground,
        VesnaBackground,
        VesnaBackground,
        SummerBackground,
        SummerBackground,
        SummerBackground,
        AutumBackground,
        AutumBackground,
        AutumBackground,
        ZimaBackground,
    ]
  return (
    <div className='absolute w-full h-full -z-10'>
        <Image fill alt='absolute image season year' src={seasons[dateSeason]}/>
    </div>
  )
}

export default Background