import React, { FC } from 'react'

interface IPropsBut {
    text: string
}

export const Button: FC<IPropsBut> = ({text}) => {
  return (
    <button>{text}</button>
  )
}