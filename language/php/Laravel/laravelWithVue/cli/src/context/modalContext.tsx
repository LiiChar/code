'use client'
import { IUser } from "@/type/type";
import { ReactNode, createContext, useContext, useState } from "react";


interface modalContextType {
    vision: boolean;
    toggleVison: (vision: boolean) => void
};

const modalContextDefaultValues: modalContextType = {
    vision: false,
    toggleVison: () => { },
};

const modalContext = createContext<modalContextType>(modalContextDefaultValues);

export function useModal() {
    return useContext(modalContext);
}

type Props = {
    children: ReactNode;
};

export function ModalProvider({ children }: Props) {
    const [vision, setVision] = useState<boolean>(false);

    const toggleVison = (vision: boolean) => {
        setVision(vision)

    };
    const value = {
        vision,
        toggleVison,
    };

    return (
        <>
            <modalContext.Provider value={value}>
                {children}
            </modalContext.Provider>
        </>
    );
}