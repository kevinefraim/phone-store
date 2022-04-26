import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/phones`);
  const [products, setProducts] = useState([]); //estado de productos
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) ?? []
  ); //estado de carrito con LS
  const [compras, setCompras] = useState(
    JSON.parse(localStorage.getItem("compras")) ?? []
  );
  const [cartQty, setCartQty] = useState(
    JSON.parse(localStorage.getItem("cartQty")) ?? 0
  );

  useEffect(() => {
    setProducts(data.phones);
  }, [data.phones]);

  //seteando items de carrito en LS
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem("cartQty", JSON.stringify(cartQty));
  }, [cartQty]);

  useEffect(() => {
    localStorage.setItem("compras", JSON.stringify(compras));
  }, [compras]);

  //funcion para agregar al carrito/producto y cantidad como parametros
  const handleAdd = async (product) => {
    // //validacion para ver si existe el producto clickeado
    const exist = carrito.find((car) => car.id === product.id);
    //condicional que verifica si existe el producto agrega la cantidad seleccionada
    if (exist) {
      setCarrito(
        carrito.map((car) => (car.id === product.id ? { ...car } : car))
      );
    }
    // //si no exite el prod se setea carrito con estos datos
    else {
      setCarrito([...carrito, { ...product }]);
    }
    setCartQty(cartQty + 1);
  };

  //Funcion para restar cantidad con el boton
  const handleSub = (product) => {
    //validacion para ver si existe el prod en el carrito
    const prodInCar = carrito.find((car) => car.id === product.id);

    //condicional que verifica que si la cantidad = 1 elimina el producto
    if (prodInCar.qty === 1) {
      handleDelete(product.id);
    }
    //si no es = 1 resta 1 a la cantidad del producto
    else {
      setCarrito(
        carrito.map((car) => (car.id === product.id ? { ...car } : car))
      );
    }
  };

  //funcion para borrar item seleccionado por ID del carrito
  const handleDelete = (id) => {
    setCarrito(carrito.filter((car) => car._id !== id));
  };

  //funcion borrar todo el carrito
  const handleClear = () => {
    setCarrito([]);
  };

  //Mis compras
  const handleCompra = (compra) => {
    setCompras([...compras, compra]);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        carrito,
        compras,
        setProducts,
        setCarrito,
        handleAdd,
        handleSub,
        handleDelete,
        handleClear,
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
