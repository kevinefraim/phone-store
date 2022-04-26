import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/phones`);
  const [products, setProducts] = useState([]); //estado de productos

  const [compras, setCompras] = useState(
    JSON.parse(localStorage.getItem("compras")) ?? []
  );
  const [cartQty, setCartQty] = useState(
    JSON.parse(localStorage.getItem("cartQty")) ?? 0
  );

  useEffect(() => {
    setProducts(data.phones);
  }, [data.phones]);

  useEffect(() => {
    localStorage.setItem("cartQty", JSON.stringify(cartQty));
  }, [cartQty]);

  useEffect(() => {
    localStorage.setItem("compras", JSON.stringify(compras));
  }, [compras]);

  //Mis compras
  const handleCompra = (compra) => {
    setCompras([...compras, compra]);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        compras,
        setProducts,
        handleCompra,
        cartQty,
        setCartQty,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
