import type { ReactNode } from "react";
import { useAuthStore } from "../context/authStore";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return !isAuthenticated ? <> {children} </> : <Navigate to="/dashboard" replace />;
};
