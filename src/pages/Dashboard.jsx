import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useUser } from "@clerk/clerk-react";
import { 
  Search, 
  Bell, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Package, 
  AlertCircle, 
  Clock,
  Menu
} from "lucide-react";

function Dashboard() {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { 
      label: "Total Inventory", 
      value: "1,234", 
      change: "+12%", 
      trend: "up", 
      icon: Package,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    { 
      label: "Low Stock Items", 
      value: "23", 
      change: "+5", 
      trend: "down", 
      icon: AlertCircle,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20"
    },
    { 
      label: "Pending Requests", 
      value: "12", 
      change: "-2", 
      trend: "up", 
      icon: Clock,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20"
    },
  ];

  const recentActivity = [
    { user: "Dr. Smith", action: "Requested", item: "Microscope Lens 40x", time: "2 mins ago", status: "Pending" },
    { user: "Lab Assistant", action: "Added", item: "Beakers (500ml)", time: "1 hour ago", status: "Completed" },
    { user: "Sarah Jones", action: "Returned", item: "Digital Scale", time: "3 hours ago", status: "Completed" },
    { user: "Admin", action: "Updated", item: "Safety Guidelines", time: "5 hours ago", status: "System" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <main className="flex-1 ml-0 lg:ml-72 p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-400" />
            </button>
            
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Welcome back, <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{user?.firstName || "User"}</span>
              </h1>
              <p className="text-gray-400 mt-1 text-sm hidden md:block">Here's what's happening in your lab today.</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search inventory..." 
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all w-64 text-gray-300 placeholder-gray-600"
              />
            </div>
            <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#050505]"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 p-[1px] hidden md:block">
              <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center overflow-hidden">
                <img src={user?.imageUrl} alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`p-6 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`flex items-center space-x-1 text-xs font-medium px-2 py-1 rounded-full bg-white/5 border border-white/5 ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      <span>{stat.change}</span>
                      {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    </div>
                  </div>
                  <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.label}</h3>
                  <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white">Recent Activity</h2>
              <button className="text-xs text-purple-400 hover:text-purple-300 font-medium transition-colors">View All</button>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400 border border-white/5">
                      {activity.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">
                        <span className="text-gray-400">{activity.user}</span> {activity.action} <span className="text-purple-300">{activity.item}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${
                    activity.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                    activity.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-linear-to-b from-purple-900/20 to-pink-900/10 border border-purple-500/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
            <div className="relative z-10">
              <h2 className="text-lg font-bold text-white mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center space-x-2 group">
                  <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                  <span>Add New Item</span>
                </button>
                
                <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>Schedule Booking</span>
                </button>

                <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all flex items-center justify-center space-x-2">
                  <Package className="w-5 h-5 text-gray-400" />
                  <span>Generate Report</span>
                </button>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/10">
                <h3 className="text-sm font-medium text-gray-300 mb-2">System Status</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-green-400">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
