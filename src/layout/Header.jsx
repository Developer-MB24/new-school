import { useState } from "react";
import { Link } from "react-router-dom";
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
            <FaFacebookF className="cursor-pointer hover:text-green-400" />
            <FaYoutube className="cursor-pointer hover:text-green-400" />
            <FaInstagram className="cursor-pointer hover:text-green-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-green-400" />
            <FaPinterestP className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://kidbawp.codebasket.net/wp-content/uploads/2025/08/logo-dark.png"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-4 font-medium items-center">
            <Link to="/" className="hover:text-green-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-500">
              About
            </Link>
            <Link to="/admissions" className="hover:text-green-500">
              Admissions
            </Link>
            <Link to="/infrastructure" className="hover:text-green-500">
              Infrastructure
            </Link>
            <Link to="/events" className="hover:text-green-500">
              Events
            </Link>
            <Link to="/mandatory-disclosure" className="hover:text-green-500">
              Mandatory Disclosure
            </Link>
            <Link to="/careers" className="hover:text-green-500">
              Careers
            </Link>

            {/* Blog Dropdown */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-green-500">
                Blog <FaChevronDown className="text-xs" />
              </div>

              {blogOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-40 z-50">
                  <Link
                    to="/blog"
                    className="block px-4 py-2 hover:bg-green-50"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/blog-details"
                    className="block px-4 py-2 hover:bg-green-50"
                  >
                    Blog Details
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-green-500">
              Contact
            </Link>
            <Link to="/dashboard" className="hover:text-green-500">
              Dashboard
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/cart" className="relative">
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition"
            >
              Admit Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col px-6 py-4 gap-4">
              <Link onClick={() => setOpen(false)} to="/">
                Home
              </Link>
              <Link onClick={() => setOpen(false)} to="/about">
                About
              </Link>
              <Link onClick={() => setOpen(false)} to="/admissions">
                Admissions
              </Link>
              <Link onClick={() => setOpen(false)} to="/infrastructure">
                Infrastructure
              </Link>
              <Link onClick={() => setOpen(false)} to="/events">
                Events
              </Link>
              <Link onClick={() => setOpen(false)} to="/mandatory-disclosure">
                Mandatory Disclosure
              </Link>
              <Link onClick={() => setOpen(false)} to="/careers">
                Careers
              </Link>

              {/* Mobile Blog Dropdown */}
              <div>
                <button
                  onClick={() => setBlogOpen(!blogOpen)}
                  className="flex items-center justify-between w-full"
                >
                  Blog <FaChevronDown />
                </button>
                {blogOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link onClick={() => setOpen(false)} to="/blog">
                      Blog
                    </Link>
                    <Link onClick={() => setOpen(false)} to="/blog-details">
                      Blog Details
                    </Link>
                  </div>
                )}
              </div>

              <Link onClick={() => setOpen(false)} to="/contact">
                Contact
              </Link>
              <Link onClick={() => setOpen(false)} to="/dashboard">
                Dashboard
              </Link>

              <Link to="/cart" className="flex items-center gap-2">
                <FaShoppingCart /> Cart
              </Link>

              <Link
                to="/register"
                className="bg-green-500 text-white px-4 py-2 rounded text-center"
              >
                Admit Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
