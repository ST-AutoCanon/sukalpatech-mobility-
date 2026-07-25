import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/image1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/enquiry" },
  ];

  return (
    <header className="w-full bg-white shadow-sm relative">
      <div className="w-full px-4 sm:px-6 lg:px-7 py-3 flex items-center justify-between">

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
        <nav className="hidden lg:flex items-center gap-9 text-lg font-semibold ml-2">

          {navItems.slice(0, 3).map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative pb-1 ${isActive
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

          <div className="relative flex items-center">

            <Link
              to="/capabilities"
              className="text-gray-700 hover:text-green-600 pb-1"
            >
              Capabilities
            </Link>

            <button
              onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
              className="ml-1 text-gray-700 hover:text-green-600"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${capabilitiesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {capabilitiesOpen && (
              <div className="absolute top-full left-0 mt-2 w-[340px] bg-[#0A2D63] text-white shadow-xl z-50">

                <Link
                  to="/capabilities/new-proto-development"
                  onClick={() => setCapabilitiesOpen(false)}
                  className="block px-5 py-4 hover:bg-[#123d7a] border-b border-[#1d4d8f]"
                >
                  New Proto Development
                </Link>

                <Link
                  to="/capabilities/pre-homologation"
                  onClick={() => setCapabilitiesOpen(false)}
                  className="block px-5 py-4 hover:bg-[#123d7a] border-b border-[#1d4d8f]"
                >
                  Pre Homologation & Vehicle Certification
                </Link>

                <Link
                  to="/capabilities/post-production"
                  onClick={() => setCapabilitiesOpen(false)}
                  className="block px-5 py-4 hover:bg-[#123d7a]"
                >
                  Post Production Services
                </Link>

              </div>
            )}
          </div>
          <NavLink
            to="/enquiry"
            className={({ isActive }) =>
              `relative pb-1 ${isActive
                ? "text-green-600"
                : "text-gray-700 hover:text-green-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Contact Us
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600" />
                )}
              </>
            )}
          </NavLink>

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
    <div key={item.name}>
      <NavLink
        to={item.path}
        end={item.path === "/"}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `block px-6 py-4 font-semibold ${
            isActive
              ? "text-green-600 bg-gray-50"
              : "text-gray-700"
          }`
        }
      >
        {item.name}
      </NavLink>

      {/* Show Capabilities after Services */}
      {item.name === "Services" && (
        <div>
          <button
            onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
            className="w-full flex justify-between items-center px-6 py-4 font-semibold text-gray-700"
          >
            Capabilities
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                capabilitiesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {capabilitiesOpen && (
            <div className="bg-gray-50">
              <Link
                to="/capabilities/new-proto-development"
                onClick={() => {
                  setMenuOpen(false);
                  setCapabilitiesOpen(false);
                }}
                className="block px-10 py-3 text-gray-700 hover:bg-gray-100"
              >
                New Proto Development
              </Link>

              <Link
                to="/capabilities/pre-homologation"
                onClick={() => {
                  setMenuOpen(false);
                  setCapabilitiesOpen(false);
                }}
                className="block px-10 py-3 text-gray-700 hover:bg-gray-100"
              >
                Pre Homologation & Vehicle Certification
              </Link>

              <Link
                to="/capabilities/post-production"
                onClick={() => {
                  setMenuOpen(false);
                  setCapabilitiesOpen(false);
                }}
                className="block px-10 py-3 text-gray-700 hover:bg-gray-100"
              >
                Post Production Services
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  ))}
</div>
          
        </div>
      )}
    </header>
  );
};

export default Header;