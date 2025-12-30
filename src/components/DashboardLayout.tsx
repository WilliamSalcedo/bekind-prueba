import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthStore } from "../context/authStore";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout)


  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex flex-1">
        <Sidebar activePath={location.pathname} onLogout={logout} />

        <main
          className="
            flex-1
            bg-gray-100
            px-8
            py-6
            overflow-y-auto
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
};
