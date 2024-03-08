import React from 'react'
import { useBusket } from '../../../context/useBusket'

const BusketBye = () => {
  const { dishes } = useBusket()


  const totalPrice = React.useMemo(() => {
    let acc = 0;
    dishes.map((dish) => acc += dish.price * (dish?.count ?? 1), 0);
    return acc;
  }, [dishes])

  return (
    <div>
      Общая цена {totalPrice}
    </div>
  )
}

export default BusketBye