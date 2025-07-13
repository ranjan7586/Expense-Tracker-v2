import React, { createContext } from 'react'
import GlobalLoader from '../Components/GlobalLoader'

type Props = {
    children: React.ReactNode
}

const LoaderContext = createContext({
    loading: false,
    setLoading: (_: boolean) => { }
})

export const LoaderProvider: React.FC<Props> = ({ children }) => {
    const [loading, setLoading] = React.useState(false);
    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
            {loading && <GlobalLoader />}
        </LoaderContext.Provider>
    )
}


export const useLoader = () => React.useContext(LoaderContext);