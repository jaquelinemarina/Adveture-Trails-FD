import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" underline="none">Adventure Trails FD </Link>
            <Link to="/lista-trilhas" underline="none">Explorar Trilhas</Link>
            <Link to="/cadastro" underline="none">Cadastrar Trilhas</Link>
        </header>
    );
}

export default Header;