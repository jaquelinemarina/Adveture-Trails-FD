import { createContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'


export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
    const [data, isLoading] = useFetch("/json/trilhas.json")
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {
        if (!!data && !!isLoading) {
            setTrilhas(data.trilhas);
        }
    }, [data]);

    return (
        <TrilhasContext.Provider value={{ trilhas, setTrilhas }}>
            {children}
        </TrilhasContext.Provider>
    )
}