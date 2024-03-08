import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import {CashReducer} from './Reducer/AddCash'
import {CostumerReducer} from './Reducer/GiveCash'

const reducers = combineReducers({
    CashReducer,
    CostumerReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))