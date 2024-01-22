import { Link, useParams } from "react-router-dom";
import useGameCollection from "../../Hooks/UseProductCollection";

export default function Product() {
  const { products, removeProduct } = useGameCollection();

  const { itemId } = useParams();
  const product = products.find((p) => p.id === +itemId);
  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "3rem", color: "#fff" }}>
        Oops... Esse produto não foi encontrado =(
      </h2>
    );
  }

  return (
    <section className="individualItemSection">
      <div className="individualItemSectionDiv">
        <h2>{product.name}</h2>
        <div>
          <Link to={`/Itens/update/${product.id}`}>
            <button className="blueButton">Atualizar</button>
          </Link>
          <button
            className="redButton"
            onClick={() => removeProduct(product.id)}
          >
            Excluir
          </button>
        </div>
      </div>
      <div className="individualItemSectionDiv">
        <p className="productCard">Categoria: {product.category}</p>
        <p className="productCard">Quantidade em estoque: {product.inStock}</p>
        <p className="productCard">Preço: {product.price}</p>
      </div>
      <p className="individualItemSectionDiv">{product.description}</p>
      <div className="individualItemSectionDiv">
        <p>Cadastrado em: {new Date(product.date).toLocaleString()}</p>
      </div>
    </section>
  );
}
