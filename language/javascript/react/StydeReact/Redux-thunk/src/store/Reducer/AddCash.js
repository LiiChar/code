
const ADD_CASH = "ADD_CASH";
const GIVE_CASH = "GIVE_CASH";

const defaultState = {
    cash: 0,
}

export function CashReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.e}
        
        case GIVE_CASH:
            
            return{...state, cash: state.cash - action.e}
        
        default:
            return state;
    }
}