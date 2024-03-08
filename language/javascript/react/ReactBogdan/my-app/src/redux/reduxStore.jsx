import { combineReducers, createStore } from "redux";
import MessageReducer from '../message'
import ProfileReducer from '../profile' 

let reducer = combineReducers({
    dialogsDate: ProfileReducer, 
    messages: MessageReducer,
})

export let store = createStore(reducer)