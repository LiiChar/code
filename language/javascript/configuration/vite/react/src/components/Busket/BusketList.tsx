import React from 'react'
import {useBusket} from '../../context/useBusket'
import BusketCard from './BusketCard/BusketCard'
import style from './busketList.module.css'

const BusketList = () => {
  const { dishes } = useBusket()

  return (
    <div style={{width: '100%'}} className={style.busket}>
    {
      dishes.length != 0
        ?
        dishes.map((dishe) => (
          <BusketCard key={dishe.id} dishe={dishe}/>
        ))
        :
        'Корзина пуста'
    }
  </div>
  )
}

export default BusketList