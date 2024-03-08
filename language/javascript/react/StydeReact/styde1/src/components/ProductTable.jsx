import React, { useState } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow '
import SearchBar from './SearchBar'

function FilterableProductTable({ Setget, store, state }) {

  let [value, setValue] = useState('')
  let [box, setBox] = useState(false)


  function handleChangeSearch(event) {
    setValue(event.target.value)
  }

  function handleChangeBox(event) {
    setBox(!box)
  }

  let people = []

  let lastCategoryes = null;

  store.forEach((product) => {

    if (product.category !== lastCategoryes) {

      people.push(

        <ProductCategoryRow

          category={product.category}
          key={product.category} />
      );

    }

    if (box && !product.stocked) {
      return;
    }

    if (!value) {
      people.push(
        <ProductRow
          product={product}
          key={product.name} />
      )
    } else {
        if (product.name.toLowerCase().indexOf(value.toLowerCase()) >= 0){
          people.push(
            <ProductRow
            product={product}
            key={product.name} />
          )
        }
    }
    lastCategoryes = product.category
  })



  return (
    <div>
      <SearchBar
        onGetSearch={value}
        onGetCheckBox={box}
        onChangeSearch={handleChangeSearch}
        onChangeCheckBox={handleChangeBox}
      />
      {people}
    </div>
  )
}

export default FilterableProductTable