import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    if (!searchOpen) {
      setMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      setSearchOpen(false);
    }
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#101828] min-h-[70px] tracking-wide relative z-50 shadow-md">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between max-w-screen-xl mx-auto w-full gap-4">
        {" "}
        <a href="/" className="flex items-center gap-2 z-50 flex-shrink-0">
          {" "}
          <img
            src="https://olova.js.org/olova.png"
            alt="Olova Logo"
            className="w-8 sm:w-10 h-auto"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-gray-800 dark:text-gray-200 order-2 lg:order-none lg:mx-auto flex-shrink-0">
          {["Home", "Team", "Feature", "Blog", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-medium hover:text-blue-400 transition duration-300 text-lg py-2 whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4 order-3 lg:order-none lg:ml-auto">
          <button
            onClick={toggleSearch}
            className="lg:hidden p-2"
            aria-label="Toggle search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              className="w-5 h-5 fill-gray-800 dark:fill-gray-200"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </button>

          <div className="hidden lg:flex items-center w-auto md:w-56 lg:w-64 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 focus-within:border-blue-400 transition-all">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 text-sm bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              className="w-4 h-4 ml-2 fill-gray-500 flex-shrink-0"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 fill-gray-800 dark:fill-gray-200"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden w-full mt-4 bg-white dark:bg-gray-900 py-4 px-4 absolute left-0 top-full shadow-lg border-t border-gray-200 dark:border-gray-700">
          {["Home", "Team", "Feature", "Blog", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-medium hover:text-blue-400 transition duration-300 text-lg py-2 text-gray-800 dark:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}

      {searchOpen && (
        <div className="lg:hidden w-full mt-4 bg-white dark:bg-gray-900 py-4 px-4 absolute left-0 top-full shadow-lg border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center w-full bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 focus-within:border-blue-400">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 text-sm bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              className="w-4 h-4 ml-2 fill-gray-500"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
