import "./App.css"
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import { Outlet } from "react-router-dom"
import { TrilhasContextProvider } from "./context/TrilhasContext.jsx"

function App() {

  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </TrilhasContextProvider>
  )
}

export default App
