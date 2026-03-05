import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#0f3b37] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <ul className="flex gap-6 items-center">
            <li className="flex items-center gap-2">
              <FaClock /> 9:30am - 6:30pm Mon - Sun
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +800-123-4567 6587
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Anmoore Road Brooklyn, NY 230
            </li>
          </ul>

          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedinIn />
            <FaPinterestP />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://kidbawp.codebasket.net/wp-content/uploads/2025/08/logo-dark.png"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-6 font-medium items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/infrastructure">Infrastructure</Link>
            <Link to="/events">Events</Link>
            <Link to="/mandatory-disclosure">Mandatory Disclosure</Link>
            <Link to="/careers">Careers</Link>

            {/* Blog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                Blog <FaChevronDown className="text-xs" />
              </div>

              {blogOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-40 z-50">
                  <Link
                    to="/blog"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/blog-details"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog Details
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact">Contact</Link>

            {/* 🔐 Auth Links */}
            {!isLoggedIn ? (
              <Link to="/login" className="text-green-600 font-semibold">
                Login
              </Link>
            ) : (
              <>
                <Link to="/dashboard" className="text-green-600 font-semibold">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-500 font-semibold"
                >
                  Logout
                </button>
              </>
            )}
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col px-6 py-4 gap-4">
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link to="/admissions" onClick={() => setOpen(false)}>
                Admissions
              </Link>
              <Link to="/events" onClick={() => setOpen(false)}>
                Events
              </Link>
              <Link to="/careers" onClick={() => setOpen(false)}>
                Careers
              </Link>

              {!isLoggedIn ? (
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              ) : (
                <>
                  <Link to="/dashboard" onClick={() => setOpen(false)}>
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="text-left text-red-500"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
