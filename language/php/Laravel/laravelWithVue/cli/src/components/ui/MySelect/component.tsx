import { IComposer, IGenre } from '@/type/type'
import React, { FC, memo } from 'react'

interface SelectProps {
  list: any
  handleSelect: (select: number) => void
}

// type ObjectDictionary = {
//   [key: string]: string;
// };

// const dictionary: ObjectDictionary = {
//   IGenre: 'name',
//   IComposer: 'username',
// };

export const MySelect: FC<SelectProps> = memo(({ list, handleSelect }) => {


  return (
    <select onChange={(e: any) => handleSelect(e.target.value)} placeholder='Выберите'>
      <option  defaultChecked disabled>Выберите</option>
      {list &&
        list.map((el: any) => (
          <option
            key={el.id}
            value={el.id}>
              {el?.name && el.name}
              {el?.username && el.username}
            {/* {dictionary[el.constructor.name]} */}
          </option>
        ))
      }
      <option></option>
    </select>
  )
})
