import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiShoppingBag,
  FiFileText,
  FiGrid,
  FiLogOut,
} from "react-icons/fi";

type SidebarItem = {
  label: string;
  icon: React.ReactNode;
  to: string;
};

const menuItems: SidebarItem[] = [
  { label: "Home", icon: <FiHome />, to: "/home" },
  { label: "Impacto Social", icon: <FiUsers />, to: "/impacto-social" },
  { label: "Comunidad", icon: <FiUsers />, to: "/comunidad" },
  { label: "Sponsors", icon: <FiDollarSign />, to: "/sponsors" },
  { label: "Marketplace", icon: <FiShoppingBag />, to: "/marketplace" },
  { label: "Bakanes", icon: <FiUsers />, to: "/dashboard" },
  { label: "Contenidos", icon: <FiFileText />, to: "/contenidos" },
  {
    label: "Categorias de acciones",
    icon: <FiGrid />,
    to: "/categorias-acciones",
  },
];

interface SidebarProps {
  activePath?: string;
  onLogout?: () => void;
}

export const Sidebar = ({ activePath, onLogout }: SidebarProps) => {
  return (
    <aside
      className="
        hidden md:flex
        
        w-[230px]
        flex-col
        bg-white
        border-r
      "
    >
      <div
        className="w-[230px] h-[151px] bg-cover bg-center"
        style={{ backgroundImage: "url('/logo-home.png')" }}
      ></div>

      <nav className="flex-1 px-3 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = activePath === item.to;

          return (
            <a
              key={item.to}
              href={item.to}
              className={`
                relative flex items-center gap-3
                rounded-lg
                px-3 py-2
                text-sm
                transition-colors

                ${
                  isActive
                    ? "bg-[#EAFFFF] text-slate-900"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }
              `}
            >
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-[4px] rounded-r bg-teal-400" />
              )}

              <span
                className={`
                  text-base
                  ${isActive ? "text-slate-900" : "text-slate-500"}
                `}
              >
                {item.icon}
              </span>

              <span className="leading-none font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={onLogout}
        className="
          mx-3 mb-4
          flex items-center gap-3
          rounded-lg
          px-3 py-2
          text-sm text-slate-600
          border
          hover:bg-red-50 hover:text-red-600
          transition-colors
        "
      >
        <FiLogOut className="text-base" />
        <span>Cerrar sesión</span>
      </button>
    </aside>
  );
};
