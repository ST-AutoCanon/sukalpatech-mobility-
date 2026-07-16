import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/image1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Contact Us", path: "/enquiry" },
  ];

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="w-full px-4 sm:px-6 lg:px-7 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14 sm:h-16 lg:h-20 w-auto"
          />

          <div className="-ml-2 lg:-ml-3">
            <h1 className="text-2xl sm:text-3xl lg:text-[35px] font-semibold text-[#0A2D63] leading-none">
              Sukalpa
            </h1>

            <p className="text-[10px] sm:text-xs lg:text-[16px] font-semibold uppercase tracking-wide text-[#7BAF2A] leading-none mt-1">
              Mobility Services
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-lg font-semibold mr-50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? (
            <X className="w-7 h-7 text-[#0A2D63]" />
          ) : (
            <Menu className="w-7 h-7 text-[#0A2D63]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-4 font-semibold ${
                    isActive
                      ? "text-green-600 bg-gray-50"
                      : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;