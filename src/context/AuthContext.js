import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) ?? null
  );

  //seteando item activeuser con LS
  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);

  //funcion que setea activeuser con el parametro que pasamos
  const handleActiveUser = (user, token) => {
    setActiveUser(user);
    localStorage.setItem("token", token);
  };

  //funcion que cierra sesion y setea activeuser como null
  const handleLogout = () => {
    setActiveUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        activeUser,
        setActiveUser,
        handleActiveUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
