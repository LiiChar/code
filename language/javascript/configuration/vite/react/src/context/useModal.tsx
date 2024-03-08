import { IDishe } from '../types/types'
import React from 'react'

interface IDefaultValueModal {
    isVisible: boolean;
    dishe: IDishe | null;
    openModal: (dish: IDishe) => void,
    closeModal: () => void,
};

const defaultValueModal: IDefaultValueModal = {
    isVisible: false,
    dishe: null,
    openModal: () => { },
    closeModal: () => { },
};

const ModalContext = React.createContext<IDefaultValueModal>(defaultValueModal);

export const useModal = () => {
    return React.useContext(ModalContext);
};

interface IProps {
    children: React.ReactNode;
}

function ModalProvider({ children }: IProps) {
    const [isVisible, setIsVisible] = React.useState<boolean>(false)
    const [dishe, setDish] = React.useState<IDishe | null>(null)

    const openModal = (dish: IDishe) => {
        setIsVisible(true)
        setDish(dish);

    }
    const closeModal = () => {
        setIsVisible(false)
        setDish(null)
    }


    const value = {
        isVisible,
        dishe,
        openModal,
        closeModal,
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider >
    )
}

export default ModalProvider;