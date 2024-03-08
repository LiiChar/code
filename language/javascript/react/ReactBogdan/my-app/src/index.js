import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base';
import './index.css';
import {store} from "./redux/reduxStore";

function rerenderEntireTree(state) {
    ReactDOM.render(
        <div><Base store={store} /></div>, document.getElementById('root')
    )}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)