import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {CashReducer} from './Reducer/AddCash'
import {CostumerReducer} from './Reducer/GiveCash'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../asyncAction'


const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    CashReducer,
    CostumerReducer
})

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)