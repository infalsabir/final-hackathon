import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./searchbar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const handleSearch =()=>{

  }
  const onClearSearch=()=>{
    setSearchQuery("");
  }

  const navItems = ["Home", "About", "Services", "Contact", "NotesList"];  // Keep NotesList as the only entry for listing notes

  // Check login status from localStorage when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);  // If token is present, user is logged in
    }
  }, []);

  // Handle logout by clearing the token and updating the state
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);  // Update state to reflect the logged-out status
    navigate("/");  // Optional: Redirect to homepage after logout
  };

  return (
    <nav className="bg-blue-600 text-white fixed w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">NoteEase</Link>
        </h1>

        {/* Hamburger Icon */}
        <div className="text-3xl md:hidden cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:static absolute top-0 left-0 w-full bg-blue-600 transform ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:translate-x-0`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="md:ml-6 text-center md:text-left group relative">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block py-3 px-4 relative md:inline-block"
                onClick={() => setNavOpen(false)} // Close menu on link click
              >
                <span className="group-hover:text-yellow-400 transition duration-300">
                  {item}
                </span>
                <span
                  className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500 ease-in-out"
                ></span>
              </Link>
             
            </li>
             
          ))}
<SearchBar
value={searchQuery}
onChange={({target})=>{
  setSearchQuery(target.value)
}}
handleSearch={handleSearch}
onClearSearch={onClearSearch}
/>
          {/* Conditional Buttons for Mobile */}
          {!isLoggedIn && (
            <li className="md:hidden mt-4 flex flex-col space-y-2">
              <Link
                to="/register"
                className="px-6 py-2 bg-yellow-400 text-blue-600 font-semibold rounded hover:bg-yellow-300 transition duration-300"
                onClick={() => setNavOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-6 py-2 bg-white text-blue-600 font-semibold rounded border border-yellow-400 hover:bg-yellow-400 hover:text-blue-600 transition duration-300"
                onClick={() => setNavOpen(false)}
              >
                Login
              </Link>
            </li>
          )}

          {/* Logout Button for Mobile */}
          {isLoggedIn && (
            <li className="md:hidden mt-4 flex flex-col space-y-2">
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-400 transition duration-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Conditional Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="px-6 py-2 bg-yellow-400 text-blue-600 font-semibold rounded hover:bg-yellow-300 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="px-6 py-2 bg-white text-blue-600 font-semibold rounded border border-yellow-400 hover:bg-yellow-400 hover:text-blue-600 transition duration-300"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-400 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

