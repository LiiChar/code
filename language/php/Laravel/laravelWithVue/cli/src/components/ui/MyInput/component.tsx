import React, { FC } from 'react'

interface InputProps {
    left?: boolean,
    right?: boolean,
    line?: boolean,
    placholder: string,
    handleFunc: (str: string) => void,
    input: string,
    lable?: string
    idef?: string;
    autoFocuced?: boolean;
    type?: typeInput;
    error?: errorBounder;
    id?: string;
}

export interface errorBounder {
    message: string;
    id: string
}

export enum typeInput {
    text = 'text',
    password = 'password',
    email = 'email',
    color = 'color'
}

export const MyInput: FC<InputProps> = React.memo(({ id, handleFunc, error, type = typeInput.text, input, autoFocuced, placholder, left, line, right, lable, idef }) => {
    const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false)
    const placeholder: string = React.useMemo(() => {
        const b = left ? '|' : '';
        const a = right ? '|' : '';
        return b + placholder + a
    }, [left, right, line, placholder])

    const { errorBounder, indetificator, lableText } = React.useMemo(() => {
        return {
            indetificator: id,
            lableText: lable,
            errorBounder: error
        }
    }, [id, lable, error])

    return (
        <div className='w-full h-full'>

            <label htmlFor={indetificator} style={{ fontSize: '14px', transform: 'translateY("-10px")' }} >{lableText}</label>
            <input
                id={indetificator}

                type={visiblePassword ? 'text' : type}
                value={input}
                onChange={(e) => handleFunc(e.target.value)}
                placeholder={placeholder}
                autoFocus={autoFocuced}
            />
            {type === typeInput.password
                && input.length > 0
                &&
                <span
                    className='absolute'
                    style={{ userSelect: 'none', transform: 'translateX(-30px) translateY(2px)' }}
                    onMouseDown={() => setVisiblePassword(true)}
                    onMouseUp={() => setVisiblePassword(false)}
                >
                    {visiblePassword ? 'O.O' : '-_-'}
                </span>}
            {errorBounder && indetificator === errorBounder.id && <div className='text-red-500 text-xs h-4 mb-2'>{errorBounder.message}</div>}
        </div>
    )
})
