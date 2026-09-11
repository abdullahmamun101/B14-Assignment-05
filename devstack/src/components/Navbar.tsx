import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Left: Logo */}
        <div className="flex items-center gap-2 hover:cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-linear-to-r from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
          <span className="font-bold text-lg">
            Dev<span className="text-pink-600">Stack</span>
          </span>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-700 hover:text-pink-600">
              {link}
            </a>
          ))}
        </div>

        {/* Right: Sign In / Sign Up*/}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-gray-700 hover:cursor-pointer">
            Sign In
          </a>
          <button className="px-5 py-2 rounded-full text-white bg-[#d91b7e] hover:cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Hamburger button*/}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu*/}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-700">
              {link}
            </a>
          ))}
          <a href="#" className="text-gray-700">Sign In</a>
          <button className="px-5 py-2 rounded-full text-white bg-[#d91b7e]">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;