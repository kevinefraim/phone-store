import { createContext, useEffect, useState } from "react";
import { initialProducts } from "../data/data";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) ?? initialProducts
  ); //estado de productos
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) ?? []
  ); //estado de carrito con LS

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

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

  //Funciones de admin

  const handleAddAdmin = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const handleEdit = (activeProduct, productToEdit) => {
    setProducts(
      products.map((product) =>
        product.id === activeProduct.id
          ? { ...product, ...productToEdit }
          : product
      )
    );
  };

  const handleDeleteAdmin = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        carrito,
        setProducts,
        setCarrito,
        handleAdd,
        handleAddQty,
        handleSub,
        handleDelete,
        handleClear,
        handleAddAdmin,
        handleEdit,
        handleDeleteAdmin,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
