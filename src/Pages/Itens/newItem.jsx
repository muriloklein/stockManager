import { useState } from "react";
import useProductCollection from "../../Hooks/UseProductCollection";

export default function NewItem() {
  function handleSubmit(ev) {
    ev.preventDefault();
    const newProduct = {
      name: pName,
      price: pPrice,
      inStock: +pInStock,
      description: pDescription,
      category: pCategory,
      date: new Date(),
    };

    addProduct(newProduct);
    setPName("");
    setPCategory("");
    setPDescription("");
    setPInStock("");
    setPPrice("");

    console.log(products);
  }

  const { products, addProduct } = useProductCollection();
  const [pName, setPName] = useState("");
  const [pPrice, setPPrice] = useState("");
  const [pInStock, setPInStock] = useState("");
  const [pDescription, setPDescription] = useState("");
  const [pCategory, setPCategory] = useState("");

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
            onChange={(desc) => setPDescription(desc.target.value)}
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
