import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncDecrementCreator, asyncIncrementCreator } from './store/Reducer/AddCash'
import { asyncSetUsersCreator } from './store/Reducer/GiveCash'
function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.CashReducer.cash)
  const users = useSelector(state => state.CostumerReducer.users)

  return (
    <div>
      <div >
        <div>{cash}</div>
        <div style={{ display: 'flex' }}>
          <button onClick={() => dispatch(asyncIncrementCreator())}>Пополнить счёт</button>
          <button onClick={() => dispatch(asyncDecrementCreator())}>Обналичить счёт</button>
        </div>
        <div style={{ display: 'flex' }}>
          <button onClick={() => dispatch(asyncSetUsersCreator())}>Получить всех пользователей</button>
        </div>
        {users.length < 0 ?
          <div>
            Пользователей нет
          </div>
          :
          users.map((cos) => 
            <div key={cos.id} >
              {cos.name}
            </div>
          )}
      </div>
    </div>
  )
}

export default App