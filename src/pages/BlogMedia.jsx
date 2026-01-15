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
  FaPen,
  FaPlus,
  FaUpload,
  FaUserPlus,
  FaEye,
  FaUserClock,
  FaChevronDown,
  FaSearch,
  FaTh,
} from "react-icons/fa";

export default function BlogMedia() {
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://source.unsplash.com/400x300/?kids,classroom,education&sig=${i}`,
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
            {
              label: "Color Customization",
              icon: FaImages,
              to: "/color-customization",
            },
            { label: "Blog Media", icon: FaClipboardList, to: "/blog-media" },
            { label: "Testimonials", icon: FaQuoteRight, to: "/testimonials" },
            {
              label: "Footer Setting",
              icon: FaEnvelope,
              to: "/footer-setting",
            },
            { label: "Menus", icon: FaBars, to: "/menus" },
            { label: "Site Settings", icon: FaHome, to: "/settings/site" },
            { label: "User Management", icon: FaUserPlus, to: "/users" },
            { label: "SEO Settings", icon: FaBlog, to: "/seo-setting" },
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
        {/* Header */}
        <header className="h-14 bg-gradient-to-r from-[#0f3b37] to-[#1f4f49] flex items-center justify-between px-6 text-white">
          <div className="flex items-center gap-3 text-sm">
            <FaBars />
            <span className="text-white/80">Dashboard</span>
            <span className="text-white/50">›</span>
            <span className="text-white">Blog Media</span>
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
            <h1 className="text-xl font-semibold">Blog Management</h1>
            <p className="text-xs text-gray-500 mt-1">Dashboard › Blog Media</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
            <FaPlus className="text-xs" /> Create New Post
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-4 flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded shadow text-sm w-64">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search content..."
              className="outline-none w-full"
            />
          </div>
          <button className="p-2 bg-white rounded shadow hover:bg-gray-50">
            <FaTh />
          </button>
        </div>

        {/* Image Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
