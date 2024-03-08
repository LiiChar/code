'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import cookie from 'cookie'
import { redirect } from 'next/navigation'


export default () => {

    const handleButton = () => {
        cookie.serialize('user', 'test')

        redirect('/')
    }

    return (
        <div>
            <Button onClick={handleButton}>Sign In</Button>
        </div>
    )
}