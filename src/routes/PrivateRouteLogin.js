import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRouteUser = () => {
  const { activeUser } = useContext(AuthContext);

  return activeUser ? <Navigate to="/" /> : <Outlet />;
};
