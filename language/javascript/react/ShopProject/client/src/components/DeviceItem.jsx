import React from 'react'
import { Card, Image } from 'react-bootstrap'
import Star from '../assets/Vector.png'
import { useNavigate  } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/const';

function DeviceItem({ device }) {
    const navigate = useNavigate()
    return (
        <Card onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)} style={{border: '0', width: '150px', height: '200px', margin: '20px' }}>
            <Image widht={150} height={150} src={'http://localhost:5000/' + device.img}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{color: 'gray'}}>{device.name}</div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div>{device.rating}</div>
                    <Image width={16} height={16} src={Star}/>
                </div>
            </div>
            <div>{device.name}</div>
        </Card>
    )
}

export default DeviceItem