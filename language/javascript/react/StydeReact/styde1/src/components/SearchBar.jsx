import React from 'react'


function SearchBar({ onGetSearch, onGetCheckBox, onChangeSearch, onChangeCheckBox}) {
    
    return (
        <form>
        <input
          type="text"
          placeholder="Search..."
          value={onGetSearch}
          onChange={onChangeSearch}
        />
        <p>
          <input
            type="checkbox"
            checked={onGetCheckBox}
            onChange={onChangeCheckBox}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
}

export default SearchBar