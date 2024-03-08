import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { fetchBrand, fetchDevice, fetchType } from '../http/deviceApi';
import { useContext } from 'react';
import { Context } from '../index';
import Pages from '../components/Pages';

const Shop = observer(() => {
  const { device } = useContext(Context)

  useEffect(() => {
    fetchType().then(data => {
      device.setType(data)
    })
    fetchBrand().then(data => {
      device.setBrands(data)
    })
    fetchDevice(null, null, 1, 2).then(data => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
      
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [device.selectedType, device.selectedrand, device.page])

  return (
    <Container>
      <Row style={{ marginTop: '3px' }}>

        <Col md={3}>
          <div style={{ width: '100px', paddingLeft: '30px', marginBottom: '10px', marginTop: '10px' }}>Типы</div>
          <TypeBar />
          <div style={{ width: '100px', paddingLeft: '25px', marginBottom: '10px', marginTop: '10px' }}>Брэнды</div>
          <BrandBar />

        </Col>
        <Col md={9}>
          <DeviceList />
          <Pages />

        </Col>
      </Row>
    </Container>
  )
})

export default Shop