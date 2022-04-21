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

  useEffect(() => {
    setProducts(data.phones);
  }, [data.phones]);

  //seteando items de carrito en LS
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem("compras", JSON.stringify(compras));
  }, [compras]);

  //funcion para agregar al carrito/producto y cantidad como parametros
  const handleAdd = (product, qtySetted) => {
    //validacion para ver si existe el producto clickeado
    const exist = carrito.find((car) => car._id === product._id);
    //condicional que verifica si existe el producto agrega la cantidad seleccionada
    if (exist) {
      setCarrito(
        carrito.map((car) =>
          car._id === product._id ? { ...car, qty: car.qty + qtySetted } : car
        )
      );
    }
    //si no exite el prod se setea carrito con estos datos
    else {
      setCarrito([...carrito, { ...product, qty: qtySetted }]);
    }
  };

  //funcion para agregar cantidad con boton
  const handleAddQty = (product) => {
    handleAdd(product, 1);
  };

  //Funcion para restar cantidad con el boton
  const handleSub = (product) => {
    //validacion para ver si existe el prod en el carrito
    const prodInCar = carrito.find((car) => car._id === product._id);

    //condicional que verifica que si la cantidad = 1 elimina el producto
    if (prodInCar.qty === 1) {
      handleDelete(product._id);
    }
    //si no es = 1 resta 1 a la cantidad del producto
    else {
      setCarrito(
        carrito.map((car) =>
          car._id === product._id ? { ...car, qty: car.qty - 1 } : car
        )
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
        handleAddQty,
        handleSub,
        handleDelete,
        handleClear,
        handleCompra,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
