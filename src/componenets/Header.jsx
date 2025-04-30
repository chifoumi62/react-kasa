import { Link } from "react-router-dom"
import '../styles/header.scss'

function Header () {
    return (
        <div className="header">
            <img src="src\assets\LOGO (1).png" alt="Logo Kasa" className="header_logo" />
                <nav className="header_nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/a_propos">A Propos</Link>
                </nav>
        </div>
    )
}
export default Header
