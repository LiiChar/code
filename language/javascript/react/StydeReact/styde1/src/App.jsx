import React from 'react'
import ProductTable from './components/ProductTable'
import SearchBar from './components/SearchBar'

function App({ store, Setget, state }) {


  return (
    <div>

      {/* <SearchBar state={state}/> */}
      
      <ProductTable state={state} store={store} Setget={Setget} />

    </div>
  )
}

export default App