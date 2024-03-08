import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../index'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const { device } = useContext(Context)

  return (
    <div style={{display: 'flex', flexDirection: 'div', flexWrap: 'wrap'}}>
        {device.device.map(device => 
            <DeviceItem key={device.id} device={device}></DeviceItem>    
        )}
    </div>
  )
})

export default DeviceList