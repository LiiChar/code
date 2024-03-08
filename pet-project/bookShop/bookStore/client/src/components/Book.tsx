import { useQuery } from '@apollo/client';
import React, { FC } from 'react'
import { useNavigate } from "react-router-dom";
import { IBook } from '../model/model'
const image = require('../static/123.png') 


export const Book: FC<IBook> = ({id, description, name, rate, image }) => {
  
  let navigate = useNavigate()

  function handlerBook() {
    navigate(`/book/${id}`)
  }

  return (
    <div onClick={handlerBook} className='flex h-24 w-6/12 mb-2 cursor-pointer flex-row'>
      <div>
        <img width={80} height={80} src={image} alt="Картинка" />
      </div>
      <div>
        <div>{name} <span>{rate}</span></div>
        <div>{description}</div>
      </div>
    </div>
  )
}
