import type { ReactNode } from "react";
import { useAuthStore } from "../context/authStore";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <> {children} </> : <Navigate to="/login" replace />;
};

