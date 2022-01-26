import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) ?? []
  );
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) ?? null
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);

  const handleAddUsers = (user) => {
    setUsers([...users, user]);
  };

  const handleActiveUser = (user) => {
    setActiveUser(user);
  };

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
