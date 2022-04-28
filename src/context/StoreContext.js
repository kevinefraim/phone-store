import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/phones`);
  const [products, setProducts] = useState([]); //estado de productos
  const [cartCounter, setCartCounter] = useState(0);
  const token = localStorage.getItem("token");
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState(null);

  const [compras, setCompras] = useState(
    JSON.parse(localStorage.getItem("compras")) ?? []
  );

  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) ?? []
  );

  useEffect(() => {
    setProducts(data.phones);
  }, [data.phones]);

  useEffect(() => {
    localStorage.setItem("compras", JSON.stringify(compras));
  }, [compras]);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const handleGetCart = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/cart`,
        {
          headers: { "x-token": token },
        }
      );
      setCart(data.cart);
      setCartItems(data.cart.item);
      setCartCounter(data.cart.quantity);
    } catch (error) {
      setCartCounter(0);
    }
  };

  useEffect(() => {
    handleGetCart();
  }, [cartCounter, token]);

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
        carrito,
        setCarrito,
        cartCounter,
        setCartCounter,
        cart,
        setCart,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
