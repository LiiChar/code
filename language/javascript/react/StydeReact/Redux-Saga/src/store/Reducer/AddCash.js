
const ADD_CASH = "ADD_CASH";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";
const GIVE_CASH = "GIVE_CASH";

const defaultState = {
    cash: 0,
}

export function CashReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + 1}
        
        case GIVE_CASH:
            
            return {...state, cash: state.cash - 1}
        
        default:
            return state;
    }
}

export const incrementCreator = () => ({type: ADD_CASH})
export const decrementCreator = () => ({type: GIVE_CASH})
export const asyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const asyncDecrementCreator = () => ({type: ASYNC_DECREMENT})