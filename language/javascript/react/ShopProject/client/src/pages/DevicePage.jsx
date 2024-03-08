import React, { useEffect, useState } from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import star1 from '../assets/Star 1.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceApi'

function DevicePage() {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()

  useEffect(() => {
    fetchOneDevice(id).then(data => {
      setDevice(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', width: '80%' }}>
          <div style={{ width: '300px', border: '0' }}>
            <Image width={300} height={300} src={'http://localhost:5000/' + device.img} />
          </div>
          <div style={{ width: '240px', justifySelf: 'center' }}>
            <div>
              <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
              <div style={{ width: '240px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `url(${star1}) no-repeat center center`, backgroundSize: 'cover' }}>
                <h1>{device.rating}</h1>
              </div>
            </div>
          </div>
          <Card style={{ width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '32px', border: '5px solid light' }}>
            <h3 style={{ marginBottom: '50px' }}>От {device.price} руб.</h3>
            <Button style={{ width: '250px' }} variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <div style={{ marginTop: '15px', width: '80%' }}>
          <h1>Характеристики</h1>

          {device.info.map((info, index) =>
            <div key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px' }}>
              {info.title}: {info.description}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DevicePage