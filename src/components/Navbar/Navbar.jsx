import './Navbar.css';
import CartWidget from '../CartWidget/Cartwidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="barra">
        <Link to="/" className="logo-link">
          <p>Logo de la empresa</p>
        </Link>
        <ul className="nav-bar">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/categoria/tortas">Tortas</Link></li>
          <li><Link to="/categoria/galletitas">Galletitas</Link></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Navbar;