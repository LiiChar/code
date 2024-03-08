
import React, { useEffect, useState } from 'react'
import { MyButton } from '../MyButton/component'
import { useEvent } from '@/hooks/useEvent'

interface TextProps {
    text: string;
    handleFunc: (textProp: string) => void
}

export const MyText: React.FC<TextProps> = React.memo(({ handleFunc, text }) => {
    const refTextAria = React.useRef<HTMLTextAreaElement>(null)
    const refDiv = React.useRef<HTMLPreElement>(null)

    const handleTypeElement = useEvent((type: string) => {

        if (refTextAria.current) {
            refTextAria.current.value = refTextAria.current.value +`<${type}>`
            refTextAria.current.value = refTextAria.current.value +`</${type}>` 
        }
    })

    const handleChangeText = (e: any) => {
            handleFunc(e.target.value)
            // refDiv.current.style.width = String(refTextAria.current.clientWidth) + 'px'
            // refDiv.current.style.height = String(refTextAria.current.clientHeight) + 'px'

    }

    useEffect(() => {
        if (refTextAria.current && refDiv.current) {

            refDiv.current.innerHTML = text
            refTextAria.current.value = refDiv.current.innerHTML

            // refDiv.current.style.width = String(refTextAria.current.clientWidth) + 'px'
            // refDiv.current.style.height = String(refTextAria.current.clientHeight) + 'px'
        }
    }, [text])

    return (
        <div className='w-full h-full'>
            <div className='flex flex-row w-full h-8 gap-2'>
                <MyButton handleFunc={() => handleTypeElement('b')} placeholder='b' />
                <MyButton handleFunc={() => handleTypeElement('i')} placeholder='i' />
                <MyButton handleFunc={() => handleTypeElement('h1')} placeholder='h1' />
                <MyButton handleFunc={() => handleTypeElement('h2')} placeholder='h2' />
                <MyButton handleFunc={() => handleTypeElement('u')} placeholder='u' />
            </div>
            <textarea className='w-full h-3/5' ref={refTextAria} onChange={handleChangeText} inputMode='text' ></textarea>
            <pre className='w-full h-2/5 overflow-auto' ref={refDiv}></pre>
        </div>
    )
})
