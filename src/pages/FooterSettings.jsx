import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaChevronDown,
  FaSave,
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

export default function FooterSettings() {
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
            <span className="text-white">Footer Settings</span>
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
          <h1 className="text-xl font-semibold">Footer Settings</h1>
          <p className="text-xs text-gray-500 mt-1">
            Dashboard › Settings › Footer
          </p>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4">
          <div className="flex gap-6 border-b">
            {["Logo", "Columns", "Bottom Bar"].map((tab, i) => (
              <button
                key={i}
                className={`pb-2 text-sm font-medium ${
                  i === 1
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
          <div className="bg-white rounded-xl shadow p-6 space-y-6">
            {/* Logo */}
            <div>
              <h3 className="font-semibold mb-2">Logo</h3>
              <p className="text-gray-500 text-sm">Current Footer Logo</p>
              <div className="mt-2 text-2xl font-bold text-green-600">
                Kidba
              </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Widgets</h4>
                <p className="text-sm text-gray-500">
                  Footer description text here.
                </p>
                <div className="mt-3 text-sm space-y-1">
                  <p>📞 000 255 66 0065</p>
                  <p>📍 256 AC 30505 NY</p>
                  <p>📧 info@kidba.com</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>About Us</li>
                  <li>Events</li>
                  <li>Services</li>
                  <li>Blog</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Help Center</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>FAQ</li>
                  <li>Handling & Blog</li>
                  <li>Financial Advice</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Footer Text
                </label>
                <input
                  type="text"
                  defaultValue="© Kidba 2024"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Footer Button
                </label>
                <input
                  type="text"
                  defaultValue="Good News"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Save */}
            <div className="flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                <FaSave className="text-xs" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
