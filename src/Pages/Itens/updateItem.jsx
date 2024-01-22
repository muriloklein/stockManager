import { useParams } from "react-router-dom";
import useProductCollection from "../../Hooks/UseProductCollection";
import { useState } from "react";

export default function UpdateItem() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateProduct(+itemId, {
      name: pName,
      price: pPrice,
      inStock: +pInStock,
      description: pDescription,
      category: pCategory,
    });
  };

  const { products, updateProduct } = useProductCollection();

  const { itemId } = useParams();
  const product = products.find((p) => p.id === +itemId);
  if (!product) {
    return (
      <h2 style={{ textAlign: "center", color: "#fff", marginTop: "2rem" }}>
        Oops... Esse produto não foi encontrado =(
      </h2>
    );
  }

  const [pName, setPName] = useState(product.name);
  const [pPrice, setPPrice] = useState(product.price);
  const [pInStock, setPInStock] = useState(product.inStock);
  const [pDescription, setPDescription] = useState(product.description || "");
  const [pCategory, setPCategory] = useState(product.category);

  return (
    <section>
      <form className="newItemForm" onSubmit={handleSubmit}>
        <div>
          <div className="formItem">
            <label htmlFor="" className="formLabel">
              Nome
            </label>
            <input
              type="text"
              value={pName}
              onChange={(name) => setPName(name.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="" className="formLabel">
              Quantidade
            </label>
            <input
              type="number"
              value={pInStock}
              onChange={(inStock) => setPInStock(inStock.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="" className="formLabel">
              Preço
            </label>
            <input
              type="number"
              value={pPrice}
              onChange={(price) => setPPrice(price.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="" className="formLabel">
              Categoria
            </label>
            <select
              name=""
              id=""
              value={pCategory}
              onChange={(event) => setPCategory(event.target.value)}
              required
            >
              <option disabled defaultValue value="">
                Selecione uma categoria
              </option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Móveis">Móveis</option>
              <option value="Brinquedos">Brinquedos</option>
              <option value="Roupas">Roupas</option>
              <option value="Livros">Livros</option>
              <option value="Decoração">Decoração</option>
              <option value="Ferramentas">Ferramentas</option>
            </select>
          </div>
        </div>
        <div className="formItem">
          <label htmlFor="" className="formLabel">
            Descrição
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={pDescription}
            onChange={(descr) => setPDescription(descr.target.value)}
            required
          ></textarea>
          <button className="blueButton pdButton" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </section>
  );
}
