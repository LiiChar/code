import React from 'react'
import { Header as Heade } from '../Header/component'
import { Aside as Side } from '../aside/component'

export const Wrapper = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Heade />
            <div style={{ padding: '0 10% 0 10%' }} className='flex w-full h-max'>
                <Side />
                {children}
            </div>

        </>
    )
}
