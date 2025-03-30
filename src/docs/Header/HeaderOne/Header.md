```jsx
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex py-4 px-6 sm:px-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[70px] tracking-wide relative z-50 shadow-md">
      <div className="flex flex-wrap items-center gap-6 max-w-screen-xl mx-auto w-full">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://olova.js.org/olova.png"
            alt="Olova Logo"
            className="w-[30px] sm:w-[40px] h-auto"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`lg:flex lg:ml-14 lg:gap-x-6 ${
            menuOpen
              ? "flex flex-col w-full absolute top-full left-0 bg-gray-900 p-4 shadow-lg"
              : "hidden"
          }`}
        >
          {["Home", "Team", "Feature", "Blog", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-medium hover:text-blue-400 transition duration-300 text-lg py-2"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="flex gap-4 ml-auto items-center">
          <div className="flex max-w-xs w-full bg-gray-700 px-4 py-2.5 rounded-md border border-gray-600 focus-within:border-blue-400 transition-all">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-sm bg-transparent outline-none text-white placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="cursor-pointer fill-gray-400"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50"
          >
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
```
