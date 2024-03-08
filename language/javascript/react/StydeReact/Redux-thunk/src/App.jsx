import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCostumers } from './asyncAction/costumers'
function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.CashReducer.cash)
  const costumers = useSelector(state => state.CostumerReducer.costumers)

  function AddCash(e) {
    dispatch({ type: "ADD_CASH", e })
  }
  function GiveCash(e) {
    dispatch({ type: "GIVE_CASH", e })
  }

  function AddCostumers(name) {
    const costumers = {
      name,
      id: Date.now()
    }
    dispatch({ type: "ADD_COSTUMERS", payload: costumers })
  }
  function GiveCostumers(e) {
    dispatch({ type: "GIVE_COSTUNERS", payload: e.id})
  }

  return (
    <div>
      <div >
        <div>{cash}</div>
        <div style={{ display: 'flex' }}>
          <button onClick={() => AddCash(Number(prompt()))}>Пополнить счёт</button>
          <button onClick={() => GiveCash(Number(prompt()))}>Обналичить счёт</button>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={() => AddCostumers((prompt()))}>Добавить покупателя</button>
          <button onClick={() => dispatch(fetchCostumers())}>Получить всех покупателей</button>
        </div>
        {costumers.length < 0 ?
          <div>
            Покупателей нет
          </div>
          :
          costumers.map((cos) => 
            <div onClick={() => GiveCostumers(cos)}>
              {cos.name}
            </div>
          )}
      </div>
    </div>
  )
}

export default App