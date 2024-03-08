import { useQuery } from '@apollo/client'
import React, {useEffect, useState, FC} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAllBook } from '../api/book/getAllBook'
import { GET_ONE_BOOK } from '../api/book/getOneBook'
import { GetOneUser } from '../api/users/getOneUser'
import { IBook, IUser } from '../model/model'

export const BookPage: FC = () => {
  const navigate = useNavigate()
  // const [book, setBook] = useState<IBook | null>()
  const {data, error, loading} = useQuery(GET_ONE_BOOK, {
    variables: {
      id: window.location.pathname.slice(window.location.pathname.indexOf('book/') + 5, window.location.pathname.length)
    }
  })

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>{data.book?.name}</div>
  )
}
