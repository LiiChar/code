
const ADD_COSTUMERS = "ADD_COSTUMERS";
const GIVE_COSTUNERS = "GIVE_COSTUNERS";
const ADD_MANY_COSTUMERS = "ADD_MANY_COSTUMERS";

const defaultState = {
    costumers: [],
}

export function CostumerReducer(state = defaultState, action) {

    switch (action.type) {
        case ADD_COSTUMERS:
            return {...state, costumers: [...state.costumers, action.payload]}
        
        case GIVE_COSTUNERS:
            
            return{...state, costumers: state.costumers.filter((cos) => cos.id !== action.payload)}
        
        case ADD_MANY_COSTUMERS:
            
            return{...state, costumers: [...state.costumers, ...action.payload]}
        
        default:
            return state;
    }
}