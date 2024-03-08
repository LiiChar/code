import React from "react"
import { LOCALES } from "../i18n/locales"
import { IntlProvider } from 'react-intl';
import messages from '../i18n/messages';

interface ILocalsContextDefaultValue {
    local: string,
    changeLocal: (local: string) => void
}

const DefaultValueLocalsContext: ILocalsContextDefaultValue = {
    local: LOCALES.RUSSIAN,
    changeLocal: () => { }
}

const LocalContext = React.createContext<ILocalsContextDefaultValue>(DefaultValueLocalsContext);

export const useLocal = () => {
    return React.useContext(LocalContext)
}

type TypeLocalProvider = {
    children: React.ReactNode
}

const LocalProvider = ({ children }: TypeLocalProvider) => {
    const [local, setLocal] = React.useState<string>(LOCALES.RUSSIAN)

    const changeLocal = (local: string) => {
        setLocal(local)
    }

    const value = {
        local,
        changeLocal
    }

    return (
        <IntlProvider locale={local} messages={messages[local]}>
            <LocalContext.Provider value={value}>
                {children}
            </LocalContext.Provider>
        </IntlProvider>
    )
}

export default LocalProvider;

