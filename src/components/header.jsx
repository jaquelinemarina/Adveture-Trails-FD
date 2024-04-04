import "./header.css";

function Header() {
    return (
        <div className="header">
            <p className="name">Adventure Trails FD </p>
            <div className="more">
                <p>Explorar Trilhas</p>
                <p>Cadastrar Trilhas</p>
            </div>
        </div>
    );
}

export default Header;