import { Package } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  IndianRupee,
  Settings,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Retailers",
    icon: Users,
    path: "/retailers",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    path: "/orders",
  },
  {
    name: "Outstanding",
    icon: IndianRupee,
    path: "/outstanding",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 text-2xl font-bold text-blue-600">
        DBOne
      </div>

      <nav className="px-3">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}