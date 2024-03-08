import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup style={{maxWidth: '100px'}}>
            {device.brands.map((brand) => 
                <ListGroup.Item key={brand.id} style={{cursor: 'pointer'}} active={brand.id === device.selectedBrand.id} onClick={() => device.setselectedBrand(brand)}>
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default BrandBar