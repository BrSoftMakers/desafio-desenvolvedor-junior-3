import { Link, useLocation, useNavigate } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    const navegate = useNavigate()
    function loggout() {
        localStorage.clear()
        navegate('/')
    }

    return (
        <nav className="navbar">
            <h2>
                <Link to={'/blog'}>Blog</Link>
                <span>Luís Araújo - Desafio SoftMakers</span>
            </h2>
            <ul>
                {localStorage.getItem('token') === null ?
                    (<>
                        <li>
                            <Link to={'/'} className="btn-new">Login</Link>
                        </li>
                        <li>
                            <Link to={'/register'} className="btn-new">Criar conta</Link>
                        </li>
                    </>) : (<>
                        {(useLocation().pathname.search(/edit/) > 0 || useLocation().pathname.search(/new/) > 0) ? (
                            <></>
                        ) : (
                            <li>
                                <Link to={'/newpost'} className="btn-new">Nova Postagem</Link>
                            </li>
                        )}
                        <li>
                            <button className="btn btn-danger" onClick={() => loggout()}>Sair</button>
                        </li>
                    </>)}
            </ul>
        </nav>
    )
}

export default Navbar