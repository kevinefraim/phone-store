import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) ?? []
  ); //estado de usuarios con LS
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) ?? null
  ); //estado de usuario activo con LS

  //seteando item users con LS
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //seteando item activeuser con LS
  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);

  //seteando item users con LS

  //funcion para agregar usuario registrado al estado users
  const handleAddUsers = (user) => {
    setUsers([...users, user]);
  };

  //funcion que setea activeuser con el parametro que pasamos
  const handleActiveUser = (user) => {
    setActiveUser(user);
  };

  //funcion que cierra sesion y setea activeuser como null
  const handleLogout = () => {
    setActiveUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        activeUser,
        handleAddUsers,
        handleActiveUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
