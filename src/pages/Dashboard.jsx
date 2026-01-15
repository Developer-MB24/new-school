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
} from "react-icons/fa";

export default function Dashboard() {
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

      {/* Main Content */}
      <main className="flex-1 min-h-screen flex flex-col">
        {/* Top Bar */}
        <header className="h-14 bg-gradient-to-r from-[#0f3b37] to-[#1f4f49] flex items-center justify-between px-6 text-white">
          {/* Left */}
          <div className="flex items-center gap-3 text-sm">
            <FaBars className="text-white/80" />
            <span className="text-white/80">Dashboard</span>
            <span className="text-white/50">›</span>
            <span className="text-white">Home</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <div className="relative">
              <FaBell className="text-white/80" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full" />
            </div>

            {/* Messages (optional) */}
            <div className="relative">
              <FaEnvelope className="text-white/80" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                className="w-7 h-7 rounded-full border border-white/30"
                alt=""
              />
              <span className="text-sm">Admin</span>
              <FaChevronDown className="text-xs text-white/70" />
            </div>
          </div>
        </header>

        {/* Page Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
              <p className="text-xs text-gray-500 mt-1">Dashboard &gt; Home</p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md bg-white hover:bg-gray-50">
                <span>Visit Site</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center border rounded-md bg-white hover:bg-gray-50">
                ⚙
              </button>
              <button className="w-8 h-8 flex items-center justify-center border rounded-md bg-white hover:bg-gray-50">
                ⌄
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6 lg:col-span-3 h-full">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {[
                  {
                    title: "Total Pages",
                    value: "10",
                    icon: FaFileAlt,
                    iconBg: "bg-blue-100",
                    iconColor: "text-blue-600",
                    span: "lg:col-span-2",
                  },
                  {
                    title: "Published Blog Posts",
                    value: "25",
                    icon: FaBlog,
                    iconBg: "bg-orange-100",
                    iconColor: "text-orange-500",
                    span: "lg:col-span-2",
                  },
                  {
                    title: "Upcoming Events",
                    value: "5",
                    icon: FaCalendarAlt,
                    iconBg: "bg-green-100",
                    iconColor: "text-green-600",
                    badge: "▲ 5,670",
                    span: "lg:col-span-2",
                  },
                  {
                    title: "Pending Admissions",
                    value: "12",
                    icon: FaUserClock,
                    iconBg: "bg-lime-100",
                    iconColor: "text-lime-600",
                    badge: "▲ 12",
                    span: "lg:col-span-3",
                  },
                  {
                    title: "Pending Admission",
                    value: "12",
                    icon: FaUserGraduate,
                    iconBg: "bg-red-100",
                    iconColor: "text-red-500",
                    badge: "▲ 122",
                    span: "lg:col-span-3",
                  },
                ].map(
                  (
                    {
                      title,
                      value,
                      icon: Icon,
                      iconBg,
                      iconColor,
                      badge,
                      span,
                    },
                    i
                  ) => (
                    <div
                      key={i}
                      className={`bg-white p-4 rounded-xl shadow flex items-center justify-between ${span}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${iconBg}`}>
                          <Icon className={`text-lg ${iconColor}`} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 leading-tight">
                            {title}
                          </p>
                          <p className="text-2xl font-semibold">{value}</p>
                        </div>
                      </div>

                      {badge && (
                        <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-600">
                          {badge}
                        </span>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Top Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Write New Blog Post", icon: FaPen },
                      { label: "Add New Page", icon: FaPlus },
                      { label: "Upload Media", icon: FaUpload },
                      { label: "Create Event", icon: FaCalendarAlt },
                      { label: "Add Teacher Profile", icon: FaUserPlus },
                      { label: "View Admissions", icon: FaEye },
                    ].map(({ label, icon: Icon }, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-green-50 rounded hover:bg-green-100"
                      >
                        <div className="p-2 bg-green-500 text-white rounded">
                          <Icon className="text-sm" />
                        </div>
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Small Recent Admissions */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold mb-3">Recent Admissions</h3>
                  {["Emma Johnson", "Emily Davis", "Michael Brown"].map(
                    (name, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 mb-3 last:mb-0"
                      >
                        <img
                          src={`https://i.pravatar.cc/40?img=${i + 10}`}
                          className="w-8 h-8 rounded-full"
                          alt=""
                        />
                        <div>
                          <p className="text-sm font-medium">{name}</p>
                          <p className="text-xs text-gray-500">Apr 23, 2024</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Admissions  */}
                <div className="bg-white rounded-xl shadow lg:col-span-2">
                  {/* Header */}
                  <div className="flex justify-between items-center px-5 py-4 border-b">
                    <h3 className="font-semibold">Recent Admissions</h3>
                    <span className="text-gray-400 text-xl cursor-pointer">
                      ⋯
                    </span>
                  </div>

                  {/* List */}
                  <div className="divide-y">
                    {[
                      {
                        title: "Fun Activities for Early Childhood Learning",
                        meta: "Admin, Apr 22, 2024",
                        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
                      },
                      {
                        title: "Tips for Parents to Prepare Kids for School",
                        meta: "Admin, Apr 23, 2024",
                        img: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2",
                      },
                      {
                        title: "Spring Art Projects for Kids",
                        meta: "Admin, Apr 21, 2024",
                        img: "https://images.unsplash.com/photo-1509223197845-458d87318791",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-5 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.img}
                            className="w-12 h-12 rounded-md object-cover"
                            alt=""
                          />
                          <div>
                            <p className="text-sm font-medium leading-tight">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500">{item.meta}</p>
                          </div>
                        </div>
                        <button className="text-xs px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
                          Edit
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Blog Posts */}
                <div className="bg-white rounded-xl shadow lg:col-span-1">
                  {/* Header */}
                  <div className="flex justify-between items-center px-5 py-4 border-b">
                    <h3 className="font-semibold">Recent Blog Posts</h3>
                    <span className="text-gray-400 text-xl cursor-pointer">
                      ⋯
                    </span>
                  </div>

                  <div className="divide-y">
                    {[
                      {
                        title: "Aami",
                        date: "April 22, 2024",
                        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
                      },
                      {
                        title: "April",
                        date: "April 23, 2024",
                        img: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2",
                      },
                      {
                        title: "April",
                        date: "April 23, 2024",
                        img: "https://images.unsplash.com/photo-1509223197845-458d87318791",
                      },
                    ].map((post, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-5 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={post.img}
                            className="w-12 h-12 rounded-md object-cover"
                            alt=""
                          />
                          <div>
                            <p className="text-sm font-medium">{post.title}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <button className="text-xs px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
                          Edit
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-6 lg:col-span-1 h-full">
              {/* Website Traffic */}
              <div className="bg-white rounded-xl shadow p-5">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Website Traffic</h3>
                  <span className="text-green-600 text-sm flex items-center gap-1">
                    ▲ 30%
                  </span>
                </div>

                {/* Visitors & Pageviews */}
                <div className="flex justify-between text-sm mb-4">
                  <div>
                    <p className="text-gray-500">Visitors</p>
                    <p className="font-semibold">2,450</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Pageviews</p>
                    <p className="font-semibold">8,670</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative h-24 mb-4">
                  <svg viewBox="0 0 200 80" className="w-full h-full">
                    {/* grid lines */}
                    {[20, 40, 60].map((y, i) => (
                      <line
                        key={i}
                        x1="0"
                        x2="200"
                        y1={y}
                        y2={y}
                        stroke="#e5e7eb"
                        strokeDasharray="3 3"
                      />
                    ))}
                    {/* Line 1 */}
                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      points="0,60 30,50 60,55 90,40 120,45 150,35 180,30"
                    />
                    {/* Line 2 */}
                    <polyline
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                      points="0,65 30,60 60,58 90,50 120,52 150,48 180,45"
                    />
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex gap-4 text-xs mb-4">
                  <div className="flex items-center gap-1 text-blue-500">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />{" "}
                    Organic Search
                  </div>
                  <div className="flex items-center gap-1 text-sky-400">
                    <span className="w-2 h-2 rounded-full bg-sky-400" /> Direct
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-3 text-sm">
                  {[
                    {
                      label: "Organic Search",
                      value: 45,
                      color: "bg-blue-500",
                    },
                    { label: "Referral", value: 30, color: "bg-green-500" },
                    { label: "Social", value: 15, color: "bg-yellow-400" },
                    { label: "Direct", value: 10, color: "bg-sky-400" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div
                          className={`h-2 ${item.color} rounded`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Website Settings */}
              <div className="bg-white rounded-xl shadow">
                {/* Header */}
                <div className="flex justify-between items-center px-5 py-4 border-b">
                  <h3 className="font-semibold">Website Settings</h3>
                  <span className="text-gray-400 text-xl cursor-pointer">
                    ⋯
                  </span>
                </div>

                {/* Items */}
                <div className="p-5 space-y-3">
                  {[
                    { label: "Homepage Settings", icon: FaHome },
                    { label: "Site Navigation", icon: FaBars },
                    { label: "General Settings", icon: FaFileAlt },
                    { label: "SEO Settings", icon: FaBlog },
                  ].map(({ label, icon: Icon }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg cursor-pointer transition"
                    >
                      <div className="p-2 bg-green-500 text-white rounded-md">
                        <Icon className="text-sm" />
                      </div>
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
