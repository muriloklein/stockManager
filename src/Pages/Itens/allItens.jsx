import Button from "../../Components/Buttons";
import ListHeaders from "../../Components/ListHeaders";
import ListItens from "../../Components/ListItens";
import { Link } from "react-router-dom";
import useProductCollection from "../../Hooks/UseProductCollection";

export default function AllItens() {
  const { products, removeProduct } = useProductCollection();

  return (
    <div className="allItensList">
      <ul>
        <li>
          <ListHeaders className="listHeader">
            <p>ID</p>
            <p>Nome</p>
            <p>Em Estoque</p>
            <p>Categoria</p>
            <p>Ações</p>
          </ListHeaders>
        </li>
        {products.length > 0 ? (
          products.map((item) => (
            <li key={item.id}>
              <ListItens className="listItens">
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.inStock}</p>
                <p>{item.category}</p>
                <p>
                  <Link to={`/Itens/${item.id}`}>
                    <Button className="blueButton">Ver</Button>
                  </Link>
                  <Link to={`/Itens/update/${item.id}`}>
                    <Button className="whiteButton">Atualizar</Button>
                  </Link>
                  <Button
                    className="redButton"
                    onClick={() => removeProduct(item.id)}
                  >
                    Excluir
                  </Button>
                </p>
              </ListItens>
            </li>
          ))
        ) : (
          <li>
            <p style={{ textAlign: "center", margin: "2rem" }}>
              Nenhum Item adicionado!
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
