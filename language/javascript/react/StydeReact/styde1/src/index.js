// Сделать по примеру https://ru.reactjs.org/docs/thinking-in-react.html

import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'

let store =  [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

let state = {
  state: {text: ''},

  OnchangeText(props) {
    
    this.state.text = props
    
  },
  
}





let Setget = {
  getState(category) {
    if (category) {
      return store.category
    } else {
      return store
    }
  },

  pushState(name) {
    store.push(name)
  }
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App state={state} store={Setget.getState()} Setget={Setget}/>);
  