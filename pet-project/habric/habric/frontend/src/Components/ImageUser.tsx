import React from 'react'
import { useGetImageByNameQuery } from '../Store/Slices/userSlice'

interface IProps {
  user: string,
  width: string,
  heigth: string
}

export const ImageUser = async function (props: IProps) {
  const image = await useGetImageByNameQuery(props.user)
  
  return (
    <div>
      {image && <div className='flex justify-center'>{<img alt='userPhoto' className='w-max h-max' src={`http://localhost:5000/images/${image}`} />}</div>}
    </div>
  )
}
