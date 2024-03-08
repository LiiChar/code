import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

function Admin() {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', width: '80%' }}>
        <Button onClick={() => setTypeVisible(true)} variant={'outline-dark'}>Добавить тип</Button>
        <Button onClick={() => setBrandVisible(true)} variant={'outline-dark'} style={{ marginTop: '20px'}}>Добавить бренд</Button>
        <Button onClick={() => setDeviceVisible(true)} variant={'outline-dark'} style={{ marginTop: '20px'}}>Добавить устройство</Button>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/> 
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      </div>
    </div>
  )
}

export default Admin