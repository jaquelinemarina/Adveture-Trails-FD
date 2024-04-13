import style from "./header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={style.container}>
            <Link to="/" className={style.home}>Adventure Trails FD </Link>
            <Link to="/Lista" className={style.list}>Explorar Trilhas</Link>
            <Link to="/Cadastro" className={style.register}>Cadastrar Trilhas</Link>
        </header>
    )
}

export default Header