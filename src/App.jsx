import CardTrilha from "./components/card.jsx"
import Header from "./components/header.jsx"
import "./App.css"

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 90,
      trajeto: 4,
      dificuldade: "Iniciante",
      tipo: "Hiking",
      nomeUsuario: "Jaqueline",
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
    ,
    {
      nomeTrilha: "Trilha do Gravatá",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 40,
      trajeto: 1.4,
      dificuldade: "Fácil",
      tipo: "Hiking",
      nomeUsuario: "Jaqueline",
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
    ,
    {
      nomeTrilha: "Trilha de Naufragados",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 7,
      dificuldade: "Moderada",
      tipo: "Treking",
      nomeUsuario: "Jaqueline",
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
    ,
    {
      nomeTrilha: "Trilha do Vale da Utopia",
      cidade: "Pinheira",
      estado: "SC",
      duracao: 210,
      trajeto: 5.5,
      dificuldade: "Moderada",
      tipo: "Treking",
      nomeUsuario: "Jaqueline",
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
  ]

  return (
    <div className="container">
      <Header />
      <h1 className="titulo">Explore trilhas incríveis</h1>
      {
        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))
      }
    </div>
  )
}

export default App
