import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaBlog,
  FaCalendarAlt,
  FaUserGraduate,
  FaImages,
  FaClipboardList,
  FaQuoteRight,
  FaEnvelope,
  FaBars,
  FaBell,
  FaPlus,
  FaUserPlus,
  FaChevronDown,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

export default function ImageManager() {
  const images = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    src: `https://source.unsplash.com/300x200/?kids,school,${i}`,
  }));

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-gradient-to-b from-[#0f3b37] to-[#1f4f49] text-white flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 px-5 py-4 text-lg font-semibold border-b border-white/10">
          <span className="w-3 h-3 bg-green-400 rounded-full" />
          Dashboard
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          {[
            { label: "Home", icon: FaHome, to: "/" },
            { label: "Header", icon: FaFileAlt, to: "/header" },
            { label: "Page Managment", icon: FaBlog, to: "/page-management" },
            {
              label: "Image Manager",
              icon: FaCalendarAlt,
              to: "/image-manager",
            },
            {
              label: "Blog Management",
              icon: FaUserGraduate,
              to: "/blog-management",
            },
            { label: "Media", icon: FaImages, to: "/media" },
            { label: "Admissions", icon: FaClipboardList, to: "/admissions" },
            { label: "Testimonials", icon: FaQuoteRight, to: "/testimonials" },
            {
              label: "Footer Setting",
              icon: FaEnvelope,
              to: "/footer-setting",
            },
            { label: "Menus", icon: FaBars, to: "/menus" },
            { label: "Site Settings", icon: FaHome, to: "/settings/site" },
            { label: "User Management", icon: FaUserPlus, to: "/users" },
            { label: "SEO Settings", icon: FaBlog, to: "/settings/seo" },
          ].map(({ label, icon: Icon, to }, i) => (
            <NavLink
              key={i}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`
              }
            >
              <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-md">
                <Icon className="text-xs" />
              </div>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-4 py-3 border-t border-white/10 text-sm">
          <NavLink
            to="/settings/general"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-md">
              <FaFileAlt className="text-xs" />
            </div>
            <span>General Settings</span>
          </NavLink>

          <NavLink
            to="/logout"
            className="flex items-center gap-3 px-3 py-2 mt-1 rounded-lg hover:bg-white/10 cursor-pointer text-white/70"
          >
            <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-md">
              <FaEnvelope className="text-xs" />
            </div>
            <span>Log Out</span>
          </NavLink>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-14 bg-gradient-to-r from-[#0f3b37] to-[#1f4f49] flex items-center justify-between px-6 text-white">
          <div className="flex items-center gap-3 text-sm">
            <FaBars />
            <span className="text-white/80">Dashboard</span>
            <span className="text-white/50">›</span>
            <span className="text-white">Image Manager</span>
          </div>

          <div className="flex items-center gap-4">
            <FaBell />
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                className="w-7 h-7 rounded-full"
                alt=""
              />
              <FaChevronDown className="text-xs" />
            </div>
          </div>
        </header>

        {/* Page Header */}
        <div className="bg-gray-50 border-b px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Image Manager</h1>
            <p className="text-xs text-gray-500 mt-1">Dashboard › Management</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
            <FaPlus className="text-xs" /> Add New Image
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-4 flex items-center gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
            Upload New Image
          </button>

          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search images..."
              className="w-full pl-9 pr-3 py-2 border rounded-md text-sm"
            />
          </div>

          <button className="p-2 border rounded-md hover:bg-gray-50">
            <FaFilter className="text-gray-500" />
          </button>
        </div>

        {/* Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="bg-white rounded-lg shadow overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  className="w-full h-32 object-cover"
                  alt=""
                />
                <div className="p-2 text-xs text-gray-500">
                  Image {img.id + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
