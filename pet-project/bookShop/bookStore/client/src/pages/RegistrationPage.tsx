import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { useGetAllUser } from '../api/users/getAllUser'
import { useCreateUser } from '../api/users/createUser';
import { CREATE_BOOK } from '../api/book/createBook';
import { useGetAllBook } from '../api/book/getAllBook';
import { IUser } from '../model/model';


export const RegistrationPage = () => {
  const [userer, setUserer] = useState<string>()
  const [password, setPassword] = useState<string>()
  const { CreateUser } = useCreateUser()
  const users = useGetAllUser()

  function register() {
    CreateUser({
      variables: {
        CreateUserInput: {
          username: 'vlad',
          password: '124312',
        }
      }
    })
  }

  return (
    <div className='flex justify-center items-center bg-gray-500'>
      <div className='h-1/2 w-1/4'>

      </div>
    </div>
  )
}
