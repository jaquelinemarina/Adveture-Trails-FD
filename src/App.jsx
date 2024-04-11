import CardTrilha from "./components/cardTrilhas/card.jsx"
import Header from "./components/header/header.jsx"
import useFetch from "./hooks/useFetch.js"
import "./App.css"

function App() {

  const [trilhas] = useFetch("/json/trilhas.json")

  return (
    <div className="container">
      <Header />
      <h1 className="titulo">Explore trilhas incríveis</h1>

      {trilhas &&
      trilhas.map((trilhas) => (
          <CardTrilha key={trilhas.nomeTrilha} />
        ))}
    </div>
  )
}

export default App
