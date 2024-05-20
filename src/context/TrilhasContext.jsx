import { createContext, useEffect, useState } from 'react'


export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({ children }) => {
    const [trilhas, setTrilhas] = useState([])

    //monitora o json de trilhas cadastrados
    useEffect(() => {
        getTrilhas()
    }, [])

    useEffect(() => {

    }, [trilhas])

    //fetch para buscar trilhas no json
    function getTrilhas() {
        fetch("http://localhost:3000/trilhas")
            .then((response) => response.json())
            .then((data) => setTrilhas(data))
            .catch((error) => console.log(error))
    }

    //cadastrar nova trilha no json
    function addTrilha(novaTrilha) {
        if (novaTrilha.nameTrail === "" || novaTrilha.city === "" || novaTrilha.state === "" || novaTrilha.duration === "" ||
            novaTrilha.path === "" || novaTrilha.difficulty === "" || novaTrilha.typeTrail === "" || novaTrilha.nameUser === "") {

            console.log('Dados incompletos. Por favor, preencha todos os campos obrigatórios.')
            return //retorna para evitar o envio de dados vazios
        }

        fetch('http://localhost:3000/trilhas', {
            method: 'POST',
            body: JSON.stringify(novaTrilha),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                console.log('Trilha cadastrada com sucesso!')
                getTrilhas()
            })
            .catch(() => console.log('Erro ao cadastrar trilha!'))

    }

    //deletar trilha do json
    function deleteTrilha(id) {
        fetch(`http://localhost:3000/trilhas/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                console.log('Trilha deletada com sucesso!')
                getTrilhas()
            })
            .catch(() => console.log('Erro ao deletar trilha!'))
    }

    return (
        <TrilhasContext.Provider value={{ trilhas, setTrilhas, getTrilhas, addTrilha, deleteTrilha }}>
            {children}
        </TrilhasContext.Provider>
    )
}