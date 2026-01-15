import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaChevronDown,
  FaPlus,
  FaEllipsisH,
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
  FaArrowRight,
} from "react-icons/fa";

export default function PageManagement() {
  const pages = [
    { title: "Home", icon: FaHome, status: "Published" },
    { title: "About Us", icon: FaFileAlt, status: "Published" },
    { title: "Classes", icon: FaUserGraduate, status: "Published" },
    { title: "Events", icon: FaCalendarAlt, status: "Published" },
    { title: "Teachers", icon: FaUserGraduate, status: "Published" },
    { title: "Blog", icon: FaBlog, status: "Published" },
    { title: "Testimonials", icon: FaFileAlt, status: "Published" },
    { title: "Contact", icon: FaFileAlt, status: "Published" },
  ];

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

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-14 bg-gradient-to-r from-[#0f3b37] to-[#1f4f49] flex items-center justify-between px-6 text-white">
          <div className="flex items-center gap-3 text-sm">
            <FaBars />
            <span className="text-white/80">Dashboard</span>
            <span className="text-white/50">›</span>
            <span className="text-white">Page Management</span>
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
            <h1 className="text-xl font-semibold">Page Management</h1>
            <p className="text-xs text-gray-500 mt-1">
              Dashboard › Page Management
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
            <FaPlus className="text-xs" /> Add New Page
          </button>
        </div>

        {/* Table */}
        <div className="p-6">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-5 py-3 text-left font-medium text-gray-600">
                    Page Title
                  </th>
                  <th className="px-5 py-3 text-left font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-5 py-3 text-right font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {pages.map(({ title, icon: Icon, status }, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-3 flex items-center gap-3">
                      <Icon className="text-gray-400" />
                      <span>{title}</span>
                    </td>

                    <td className="px-5 py-3 text-green-600 font-medium">
                      {status}
                    </td>

                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded border hover:bg-gray-50">
                          <FaArrowRight className="text-xs" />
                        </button>
                        <button className="p-2 rounded border hover:bg-gray-50">
                          <FaEllipsisH className="text-xs" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
