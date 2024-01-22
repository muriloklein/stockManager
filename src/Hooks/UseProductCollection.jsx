import { useState } from "react";

export default function useProductCollection() {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    if (!storedProducts) return [];
    return JSON.parse(storedProducts);
  });

  const addProduct = ({
    name,
    inStock,
    category,
    price,
    description,
    date,
  }) => {
    const id = Math.floor(Math.random() * 10000000000);
    const product = { id, name, inStock, category, price, description, date };
    setProducts((state) => {
      const newState = [...state, product];
      localStorage.setItem("products", JSON.stringify(newState));
      return newState;
    });
  };

  const removeProduct = (id) => {
    setProducts((state) => {
      const newState = state.filter((p) => p.id !== id);
      localStorage.setItem("products", JSON.stringify(newState));
      return newState;
    });
  };

  const updateProduct = (id, newData) => {
    setProducts((state) => {
      const updatedProducts = state.map((product) => {
        if (product.id === id) {
          return { ...product, ...newData };
        }
        return product;
      });
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return { products, addProduct, removeProduct, updateProduct };
}
