import { createContext, useState } from "react";
import { initialProducts } from "../data/data";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
