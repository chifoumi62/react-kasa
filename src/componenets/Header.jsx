import {NavLink } from "react-router-dom"
import '../styles/header.scss'

function Header () {
    return (
        <div className="header">
            <img src="src\assets\LOGO (1).png" alt="Logo Kasa" className="header_logo" />
                <nav className="header_nav">
                    <NavLink to="/" end className={({isActive})=>(isActive ? "linkactive" : "link")}>Accueil</NavLink>
                    <NavLink to="/a_propos" end className={({isActive})=>(isActive ? "linkactive":"link")}>A Propos</NavLink>
                </nav>
        </div>
    )
}
export default Header
