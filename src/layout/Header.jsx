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
} from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

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
      <div className="bg-white">
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
          <nav className="hidden lg:flex gap-8 font-medium">
            <Link to="/" className="hover:text-green-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-500">
              About
            </Link>
            <Link to="/about" className="hover:text-green-500">
              Pages
            </Link>
            <Link to="/blog" className="hover:text-green-500">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-green-500">
              Contact
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
              <Link onClick={() => setOpen(false)} to="/about">
                Pages
              </Link>
              <Link onClick={() => setOpen(false)} to="/blog">
                Blog
              </Link>
              <Link onClick={() => setOpen(false)} to="/contact">
                Contact
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
