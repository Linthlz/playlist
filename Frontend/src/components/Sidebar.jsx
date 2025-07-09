import React from 'react';
import { Menu, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Sidebar = ({ sidebarOpen, setSidebarOpen, activeNav, setActiveNav }) => {
  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-[#8B5C2A] border-r border-[#6b3f13] transition-all duration-300 flex flex-col`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-[#6b3f13]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[#f5f5dc] hover:text-[#d2b48c] transition-colors"
          >
            <Menu size={24} />
          </button>
          {sidebarOpen && (
            <h2 className="text-white font-bold text-lg">Dashboard</h2>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  activeNav === item.id
                    ? 'bg-[#d2b48c] text-[#8B5C2A] shadow-lg'
                    : 'text-white hover:bg-[#a67c52] hover:text-[#f5f5dc]'
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-[#6b3f13]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#d2b48c] rounded-full flex items-center justify-center">
            <User size={20} className="text-[#8B5C2A]" />
          </div>
          {sidebarOpen && (
            <div className="flex-1">
              <p className="text-white font-medium">Group 36</p>
              <p className="text-[#f5f5dc] text-sm">Student</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;