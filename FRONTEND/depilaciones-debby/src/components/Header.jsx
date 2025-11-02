import { Link, NavLink } from "react-router-dom";

export default function Header(){
  return (
    <header className="topbar">
      <div className="container inner">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Depilaciones Debby" />
        </Link>
        <nav className="nav">
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/reserva">Reserva</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contacto" className="btn">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
