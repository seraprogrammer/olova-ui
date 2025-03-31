export const HeaderTwoCode = `
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeaderTwo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          className="w-10"
          src="https://olova.js.org/olova.png"
          alt="Website Logo"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu size={24} className="text-gray-700 dark:text-gray-300" />
          )}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex justify-center gap-6">
          <li>
            <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Signup
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md p-4 border-t border-gray-200 dark:border-gray-800">
            <ul className="flex flex-col gap-4 mb-4">
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-4">
              <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Signup
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


`;
