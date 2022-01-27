import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRouteLoginAdmin = () => {
  const { adminUser } = useContext(AuthContext);

  return adminUser ? <Navigate to="/admin" /> : <Outlet />;
};
