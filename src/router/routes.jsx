import App from '../App'
import { createBrowserRouter } from 'react-router-dom'

//importação das páginas
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'
import Lista from '../pages/Lista'


const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Erro 404</h1>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/cadastro',
                element: <Cadastro />,
            },
            {
                path: '/lista',
                element: <Lista />,
            }
        ]
    }
])

export default routers