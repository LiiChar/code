'use client'
import { IUser } from "@/type/type";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useEffect, useLayoutEffect, useState } from "react";


interface authContextType  {
    user?: IUser;
    login: (user: IUser) => void;
    logout: () => void;
    isAuth: boolean;
};

const authContextDefaultValues:authContextType = {
    login: () => {},
    logout: () => {},
    isAuth: false
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const route = useRouter()

    const login = (user: IUser) => {
        setIsAuth(true)
        setUser(user);
    };


    const logout = () => {
        setIsAuth(false)
    };

    useLayoutEffect(() => {
        if(!isAuth) {
            route.push('Login')
        }
    }, [])
    

    const value = {
        user,
        login,
        logout,
        isAuth
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}