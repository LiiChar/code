
const ADD_MANY_USERS = "ADD_MANY_USERS";
export const ASYNC_SET = "ASYNC_SET";

const defaultState = {
    users: [],
}

export function CostumerReducer(state = defaultState, action) {

    switch (action.type) {
        
        case ADD_MANY_USERS:
            
            return{...state, users: action.payload}
        
        default:
            return state;
    }
}

export const setUsers = (payload) => ({type: ADD_MANY_USERS, payload})
export const asyncSetUsersCreator = () => ({type: ASYNC_SET})
