import { PropsWithChildren } from 'react'

import { createContext, useContext } from "react";
import FileStore from "./store/Store/FileStore";

const store = {
  FileStore: FileStore()
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export const ContextProvider = ({children} : PropsWithChildren) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};