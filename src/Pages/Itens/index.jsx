import { Link, Outlet, useLocation } from "react-router-dom";

export default function Itens() {
  const { pathname } = useLocation();

  return (
    <>
      <h1 className="title">Stock Itens</h1>
      <nav className="nav">
        <Link
          to="/Itens/"
          className={`${pathname == "/Itens/" ? "active" : ""}`}
        >
          Todos os itens
        </Link>
        <Link
          to="newItem"
          className={`${pathname == "/Itens/newItem" ? "active" : ""}`}
        >
          Novo item
        </Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
