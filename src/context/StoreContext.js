import { createContext, useState } from "react";
import { initialProducts } from "../data/data";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [ofertas, setOfertas] = useState();

  return (
    <StoreContext.Provider value={{ products, ofertas }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
