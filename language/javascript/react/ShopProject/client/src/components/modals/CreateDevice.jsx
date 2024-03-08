import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { createDevice, fetchBrand, fetchType } from '../../http/deviceApi'
import { Context } from '../../index'


const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [name, setName] = useState([])
    const [price, setPrice] = useState([])
    let [file, setFile] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchType().then(data => {
          device.setType(data)
        })
        fetchBrand().then(data => {
          device.setBrands(data)
        })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const remodveInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number  === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        formData.append('img', file)
        createDevice(formData).then(data => {
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить девайс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={{ marginTop: '10px' }}>
                        <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item onClick={() => device.setselectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        style={{ marginTop: '10px' }}
                        placeholder='Выведите название устройства'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <Form.Control
                        style={{ marginTop: '10px' }}
                        placeholder='Выведите стоимость устройства'
                        onChange={e => setPrice(Number(e.target.value))}
                        value={price}
                        type='number'
                    />
                    <Form.Control
                        style={{ marginTop: '10px', marginBottom: '10px' }}
                        type='file'
                        onChange={selectFile}
                    />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                        style={{ marginBottom: '10px' }}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map((i) =>
                            <Row onC key={i.number} style={{ marginBottom: '10px' }}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title' , e.target.value, i.number)}
                                        placeholder='Введите название свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description' , e.target.value, i.number)}                                    
                                        placeholder='Введите название свойства'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button onClick={() => remodveInfo(i.number)} variant={'outline-danger'}>
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice