import { createContext, useEffect, useState } from "react";
import { initialOfertas, initialProducts } from "../data/data";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [ofertas, setOfertas] = useState(initialOfertas);
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const handleAdd = (product, qtySetted) => {
    const exist = carrito.find((car) => car.id === product.id);
    if (exist) {
      setCarrito(
        carrito.map((car) =>
          car.id === product.id ? { ...car, qty: car.qty + qtySetted } : car
        )
      );
    } else {
      setCarrito([...carrito, { ...product, qty: qtySetted }]);
    }
  };

  const handleAddQty = (product) => {
    handleAdd(product, 1);
  };

  const handleSub = (product) => {
    const prodInCar = carrito.find((car) => car.id === product.id);

    if (prodInCar.qty === 1) {
      handleDelete(product.id);
    } else {
      setCarrito(
        carrito.map((car) =>
          car.id === product.id ? { ...car, qty: car.qty - 1 } : car
        )
      );
    }
  };

  const handleDelete = (id) => {
    setCarrito(carrito.filter((car) => car.id !== id));
  };

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
