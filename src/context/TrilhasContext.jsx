import { createContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'


export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
    const [data, isLoading] = useFetch("/trilhas.json")
    const [trilhas, setTrilhas] = useState([]);

    //add nova trilha no contexto
    const [novaTrilha, setNovaTrilha] = useState([
        {
            "nameTrail": "Trilha da Costa da Lagoa",
            "city": "Florianópolis",
            "state": "SC",
            "duration": 90,
            "path": 4,
            "difficulty": "Fácil",
            "typeTrail": "Hiking",
            "nameUser": "Jaqueline",
            "urlImg": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
    ]);

    function addTrilha(novaTrilha) { 
        setNovaTrilha((t) => [...t, {...novaTrilha, id: t.length + 1}]); 
        console.log(novaTrilha); 
    }

    useEffect(() => {
        if (!!data && !!isLoading) {
            setTrilhas(data.trilhas);
        }
    }, [data]);

    return (
        <TrilhasContext.Provider value={{ trilhas, setTrilhas, data, isLoading, novaTrilha, addTrilha }}>
            {children}
        </TrilhasContext.Provider>
    )
}