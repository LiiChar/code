import React, {useState} from 'react'

export enum CadVariant {
    outlined = 'outlined',
    promary = 'primary'
}

interface CadProps {
    width: string;
    height: string;
    variant: CadVariant;
    children?: React.ReactChild | React.ReactNode;
    onClick: (num: number) => void
}

const Cart: React.FC<CadProps> = ({ width, height, children, variant, onClick }) => {
    const [state, setstate] = useState(0)
    return (
        <div style={{
            width,
            height,
            border: variant === CadVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CadVariant.promary ? 'lightgray' : '',
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    )
}

export default Cart