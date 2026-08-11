
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import ReciclavelIcon from "../../assets/ReciclavelIcon.png";

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="brand-logo">
        <img src={ReciclavelIcon} alt="ColetaMigos" />
        ColetaMigos
      </Link>

      <nav className="header-nav">
        <ul className="header-list">
          <li><Link to="/">Início</Link></li>
          <li><a href="/#acervo">Acervo</a></li>
          <li><Link to="/rotas">Rotas</Link></li>
          <li><Link to="/comunidade">Comunidade</Link></li>
          <li><a href="/#sobre">Sobre Nós</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/comunidade" className="btn-contact">Participar</Link>
      </div>
    </header>
  );
}
