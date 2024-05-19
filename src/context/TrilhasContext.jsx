import { createContext, useEffect, useState } from 'react'


export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
    const [trilhas, setTrilhas] = useState([]);

     //monitora o json de trilhas cadastrados
     useEffect(() => {
        getTrilhas()
    }, [])

    useEffect(() => {

    }, [trilhas]);

    //fetch para buscar trilhas no json
    function getTrilhas() {
        fetch("http://localhost:3000/trilhas")
            .then((response) => response.json())
            .then((data) => setTrilhas(data))
            .catch((error) => console.log(error));
    }

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

    // useEffect(() => {
    //     if (!!data && !!isLoading) {
    //         setTrilhas(data.trilhas);
    //     }
    // }, [data]);

    return (
        <TrilhasContext.Provider value={{ trilhas, setTrilhas, getTrilhas,  novaTrilha, addTrilha }}>
            {children}
        </TrilhasContext.Provider>
    )
}