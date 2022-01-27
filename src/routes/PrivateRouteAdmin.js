import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRouteAdmin = () => {
  const { adminUser } = useContext(AuthContext);

  return !adminUser ? <Navigate to="/admin/login" /> : <Outlet />;
};
