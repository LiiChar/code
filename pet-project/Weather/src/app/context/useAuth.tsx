"use client"

import useLocalStorage from "@/hooks/useLocalStorage";
import { IUser } from "@/type/UserType";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

//describe your methods and state
interface IDefaultValueAuthContext {
  user: IUser | {};
  login: (user: IUser) => void;
  logout: () => void;
  verifyUserLogin: () => boolean;
};

const DefaultValueAuthContext: IDefaultValueAuthContext = {
  user: {},
  login: () => { },
  logout: () => { },
  verifyUserLogin: () => false,
};

const AuthContext = React.createContext<IDefaultValueAuthContext>(DefaultValueAuthContext);

export const useAuth = () => {
  return React.useContext(AuthContext)
}

interface IPropsProvider {
  children: React.ReactNode
}

const AuthProvider: FC<IPropsProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | {}>({});
  const { setItem, removeItem, getItem } = useLocalStorage();
  const router = useRouter();

  const login = (user: IUser) => {
    setItem("user", user)
    setUser(user);
  }

  const logout = () => {
    removeItem('user');
    setUser({});
  }

  useEffect(() => {
    const user = getItem('user');
    if (!!user && user !== '') {
      setUser(user);
    } else {
      router.push('/auth');
    }
  }, []);

  const verifyUserLogin = () => {
    return user && 'user_id 'in user || 'username' in user;
  }

  const value = {
    user,
    login,
    logout,
    verifyUserLogin
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider