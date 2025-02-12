import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/shoes.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img className="w-14" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              Home
            </Link>
            <Link to="/products">
              Products
            </Link>
            <Link to="/cart">
              Cart
            </Link>
            {token ? (
            <button
              onClick={logout}
              className="text-red-500 font-medium bg-white rounded"
            >
              Logout
            </button>

            ) :(

            <Link to="/login">
              Login
            </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="  focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-5 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="block px-3 py-2"
              >
                Cart
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
