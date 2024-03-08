import React, { FC } from 'react'

import style from './button.module.css'

interface ButtonProps {
    handleFunc: () => void,
    placeholder: string
}

export const MyButton: FC<ButtonProps> = React.memo(({ handleFunc, placeholder }) => {
    return (
        <div onClick={handleFunc} className={style.wrapperButton}>
            <button className='text-sm'>
                {placeholder}
            </button>
        </div>
    )
})
