import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="header">
          <Link to="/">
            <h3>Gestor de Estoque</h3>
          </Link>
          <div>
            <Link to="/">Início</Link>
            <Link to="/Itens">Items</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
