import React from 'react'

export const metadata = {
  title: 'Auth',
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default layout