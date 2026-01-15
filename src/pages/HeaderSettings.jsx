import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaChevronDown,
  FaUpload,
  FaHome,
  FaFileAlt,
  FaBlog,
  FaCalendarAlt,
  FaUserGraduate,
  FaImages,
  FaClipboardList,
  FaQuoteRight,
  FaEnvelope,
  FaUserPlus,
} from "react-icons/fa";

export default function HeaderSettings() {
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

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-14 bg-gradient-to-r from-[#0f3b37] to-[#1f4f49] flex items-center justify-between px-6 text-white">
          <div className="flex items-center gap-3 text-sm">
            <FaBars />
            <span className="text-white/80">Dashboard</span>
            <span className="text-white/50">›</span>
            <span className="text-white">Header Settings</span>
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
        <div className="bg-gray-50 border-b px-6 py-4">
          <h1 className="text-xl font-semibold">Header Settings</h1>
          <p className="text-xs text-gray-500 mt-1">
            Dashboard › Header Settings
          </p>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4">
          <div className="flex gap-6 border-b">
            {["Logo", "Menu", "Top Bar", "Social Links"].map((tab, i) => (
              <button
                key={i}
                className={`pb-2 text-sm font-medium ${
                  i === 0
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-white rounded-xl shadow p-6">
            {/* Logo Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upload */}
              <div>
                <h3 className="font-semibold mb-3">Logo</h3>
                <div className="border rounded-lg p-4 flex flex-col items-center justify-center gap-3 text-sm text-gray-500">
                  <FaUpload className="text-xl" />
                  <span>Upload New Logo</span>
                </div>
              </div>

              {/* Preview */}
              <div className="lg:col-span-2 border rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* Form */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="info@kidba.com"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  defaultValue="+000 223-6566 5587"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Header Height
                </label>
                <select className="w-full border rounded-md px-3 py-2 text-sm">
                  <option>70px</option>
                  <option>80px</option>
                  <option>90px</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Font Style
                </label>
                <select className="w-full border rounded-md px-3 py-2 text-sm">
                  <option>Medium</option>
                  <option>Bold</option>
                  <option>Light</option>
                </select>
              </div>
            </div>

            {/* Save */}
            <div className="mt-8 flex justify-end">
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
