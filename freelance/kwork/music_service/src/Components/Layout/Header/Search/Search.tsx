import {memo, useState, ChangeEvent, useCallback} from 'react'
import Input from '../../../ui/Input/Input';

const Search = memo(() => {
    const [search, setSearch] = useState('');

    const handleInputSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, [search])

  return (
      <Input placeholder='Поиск' handleInput={handleInputSearch} value={search}/>
    // <SearchS onChange={handleInputSearch} value={search} type='search'/>
  )
})

export default Search