import { IWeather } from '@/type/WeatherType'
import React, { FC } from 'react'

interface IProps {
    props: IWeather
}

const WeatherComponent: FC<IProps> = ({props}) => {
    const {current, location} = props
  return (
    <div>
        
    </div>
  )
}

export default WeatherComponent