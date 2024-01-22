import Displays from "../../Components/Displays";
import ListHeaders from "../../Components/ListHeaders";
import ListItens from "../../Components/ListItens";
import Button from "../../Components/Buttons";
import useProductCollection from "../../Hooks/UseProductCollection";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const recentItensListFunction = (products) =>
  products.filter((product) => {
    const currentData = new Date();
    const productDate = new Date(product.date);
    const differenceInDays = Math.floor(
      (currentData - productDate) / (1000 * 60 * 60 * 24)
    );
    return differenceInDays <= 10;
  });

const smallStockItensListFunction = (products) => {
  return products.filter((products) => products.inStock <= 10);
};

export default function Home() {
  const { products } = useProductCollection();

  const [totalItens, setTotalItens] = useState(0);
  const [typeItens, setTypeItens] = useState(0);
  const [recentItens, setRecentItens] = useState(0);
  const [smallStockItens, setSmallStockItens] = useState(0);
  const [recentItensList, setRecentItensList] = useState([]);
  const [smallStockItensList, setSmallStockList] = useState([]);

  useEffect(() => {
    setTotalItens(
      products.reduce((accum, product) => {
        return accum + product.inStock;
      }, 0)
    );

    setTypeItens(
      products.reduce((types, product) => {
        types.add(product.category);
        return types;
      }, new Set()).size
    );
    setSmallStockItens(smallStockItensListFunction(products).length);
    setSmallStockList(smallStockItensListFunction(products));
    setRecentItens(() => recentItensListFunction(products).length);
    setRecentItensList(() => recentItensListFunction(products));
  }, []);

  return (
    <>
      <h1 className="title">Dashboard</h1>
      <section className="displaySection">
        <Displays
          textTitle={"Diversidade de Itens"}
          value={typeItens}
        ></Displays>
        <Displays textTitle={"Inventário Total"} value={totalItens}></Displays>
        <Displays textTitle={"Itens Recentes"} value={recentItens}></Displays>
        <Displays
          textTitle={"Itens acabando"}
          value={smallStockItens}
        ></Displays>
      </section>
      <section className="listsSection">
        <div className="listsSectionDiv">
          <ul>
            <li>
              <ListHeaders className="listHeader">
                <p>Itens Recentes</p>
                <p>Ações</p>
              </ListHeaders>
            </li>
            {recentItensList.length > 0 ? (
              recentItensList.map((product) => {
                return (
                  <li key={product.id}>
                    <ListItens className="listItens">
                      <p>{product.name}</p>
                      <p>
                        <Link to={`/Itens/${product.id}`}>
                          <Button className="whiteButton">Ver</Button>
                        </Link>
                      </p>
                    </ListItens>
                  </li>
                );
              })
            ) : (
              <li>
                <p style={{ textAlign: "center", margin: "2rem" }}>
                  Nenhum Item Adicionado recentemente!
                </p>
              </li>
            )}
          </ul>
        </div>
        <div className="listsSectionDiv">
          <ul>
            <li>
              <ListHeaders className="listHeader">
                <p>Nome</p>
                <p>Quantidade</p>
                <p>Ações</p>
              </ListHeaders>
            </li>
            {smallStockItensList.length > 0 ? (
              smallStockItensList.map((product) => {
                return (
                  <li key={product.id}>
                    <ListItens className="listItens">
                      <p>{product.name}</p>
                      <p>{product.inStock} Produtos</p>
                      <p>
                        <Link to={`Itens/${product.id}`}>
                          <Button className="whiteButton">Ver</Button>
                        </Link>
                      </p>
                    </ListItens>
                  </li>
                );
              })
            ) : (
              <li>
                <p style={{ textAlign: "center", margin: "2rem" }}>
                  Nenhum Item acabando!
                </p>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
