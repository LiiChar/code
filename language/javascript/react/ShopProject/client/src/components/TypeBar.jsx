import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup style={{maxWidth: '100px'}}>
            {device.types.map((type) => 
                <ListGroup.Item style={{cursor: 'pointer'}} active={type.id === device.selectedType.id} key={type.id} onClick={() => device.setSelectedType(type)}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar