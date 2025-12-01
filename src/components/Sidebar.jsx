import { 
  LayoutDashboard, 
  Box, 
  Package, 
  Server, 
  Calendar, 
  Settings, 
  LogOut, 
  ChevronRight,
  ClipboardList,
  Microscope,
  X
} from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const { signOut } = useClerk();
  const location = useLocation();

  const menuSections = [
    {
      title: "LAB MODULES",
      items: [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" }
      ]
    },
    {
      title: "INVENTORY",
      items: [
        { icon: Box, label: "Overview", path: "/inventory" },
        { icon: ClipboardList, label: "Requests", path: "/requests" }
      ]
    },
    {
      title: "ITEMS",
      items: [
        { icon: Package, label: "All Items", path: "/items" },
        { icon: Microscope, label: "Add Item", path: "/items/add" }
      ]
    },
    {
      title: "LAB INFRA",
      items: [
        { icon: Server, label: "Infrastructure", path: "/infrastructure" }
      ]
    },
    {
      title: "BOOKING",
      items: [
        { icon: Calendar, label: "Bookings", path: "/bookings" }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0a0a]/95 backdrop-blur-xl border-r border-white/10 
        flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}>
        {/* Logo Area */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
              Lab<span className="text-purple-500">Invo</span>
            </h1>
          </div>
          {/* Mobile Close Button */}
          <button 
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          {menuSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => onClose && onClose()} // Close sidebar on mobile when link clicked
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                        isActive 
                          ? "bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]" 
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${isActive ? "text-purple-400" : "text-gray-500 group-hover:text-gray-300"}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* User / Logout Area */}
        <div className="p-4 border-t border-white/5 bg-black/20">
          <button
            onClick={() => signOut()}
            className="flex items-center space-x-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 border border-transparent transition-all duration-200 group"
          >
            <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
