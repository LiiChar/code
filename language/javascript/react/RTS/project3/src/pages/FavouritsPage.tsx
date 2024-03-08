import React from 'react'
import { useAppSelector } from '../hooks/redux'

export const FavouritsPage = () => {
  const { favourites } = useAppSelector(state => state.github)


  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screnn'>
      <ul className='list-none'>
        {favourites.map((f, i) => (
          <li key={f + i}>
            <a href={f} target='_blank' rel="noreferrer">{f}</a>
          </li>
        ))}
      </ul >
    </div>
  )
}
