import { IUser } from '../types/types'
import React from 'react'

interface IDefaultValueAuth {
    isAuth: boolean;
    user: IUser | null;
    toggleIsAuth: () => void;
    signIn: (user: IUser) => void;
};

const defaultValueAuth: IDefaultValueAuth = {
    isAuth: false,
    user: null,
    toggleIsAuth: () => { },
    signIn: () => { },
};

const AuthContext = React.createContext<IDefaultValueAuth>(defaultValueAuth);

export const useAuth = () => {
    return React.useContext(AuthContext);
};

interface IProps {
    children: React.ReactNode;
}

function AuthProvider({ children }: IProps) {
    const [isAuth, setIsAuth] = React.useState<boolean>(false)
    const [user, setUser] = React.useState<IUser | null>(null)

    const toggleIsAuth = () => {
        setIsAuth(prev => !prev)
    }

    const signIn = (user: IUser) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    React.useLayoutEffect(() => {
        const userJSON = localStorage.getItem('user')
        if (userJSON) {
            signIn(JSON.parse(userJSON));
        }
    }, [])

    const value = {
        isAuth,
        user,
        toggleIsAuth,
        signIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider;