import kasa_logo from '../../Assets/kasa_logo.svg';
import { Link, NavLink } from "react-router-dom";
import './Header.css';

// Component Header
function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="logo_header" src={kasa_logo} alt="Logo de l'agence Kasa"/>
            </Link>
            <nav>
                <ul className="navbar_list">
                    <li>
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? "navbar_link_active" : "navbar_link"; }}
                            >Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => {
                            return isActive ? "navbar_link_active" : "navbar_link"; }}
                            >A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 

export default Header;