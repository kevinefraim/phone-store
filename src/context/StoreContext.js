import { createContext, useEffect, useState } from "react";
import { initialOfertas, initialProducts } from "../data/data";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts); //estado de productos
  const [ofertas, setOfertas] = useState(initialOfertas); //estado de ofertas
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) ?? []
  ); //estado de carrito con LS

  //seteando items de carrito en LS
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  //funcion para agregar al carrito/producto y cantidad como parametros
  const handleAdd = (product, qtySetted) => {
    //validacion para ver si existe el producto clickeado
    const exist = carrito.find((car) => car.id === product.id);
    //condicional que verifica si existe el producto agrega la cantidad seleccionada
    if (exist) {
      setCarrito(
        carrito.map((car) =>
          car.id === product.id ? { ...car, qty: car.qty + qtySetted } : car
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
    const prodInCar = carrito.find((car) => car.id === product.id);

    //condicional que verifica que si la cantidad = 1 elimina el producto
    if (prodInCar.qty === 1) {
      handleDelete(product.id);
    }
    //si no es = 1 resta 1 a la cantidad del producto
    else {
      setCarrito(
        carrito.map((car) =>
          car.id === product.id ? { ...car, qty: car.qty - 1 } : car
        )
      );
    }
  };

  //funcion para borrar item seleccionado por ID del carrito
  const handleDelete = (id) => {
    setCarrito(carrito.filter((car) => car.id !== id));
  };

  //funcion borrar todo el carrito
  const handleClear = () => {
    setCarrito([]);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        setProducts,
        ofertas,
        carrito,
        setCarrito,
        handleAdd,
        handleAddQty,
        handleSub,
        handleDelete,
        handleClear,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
