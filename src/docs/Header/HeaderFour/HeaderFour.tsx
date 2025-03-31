import React, { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

const DailyDevLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M63.1387 22.3594C69.2432 22.3594 74.354 25.018 77.813 29.305L70.9789 35.6134C68.9068 33.1014 66.1798 31.5634 63.1387 31.5634C57.5174 31.5634 52.7448 35.9063 52.7448 41.6673C52.7448 47.4283 57.5174 51.7711 63.1387 51.7711C66.1798 51.7711 68.9068 50.2331 70.9789 47.7211L77.813 54.0295C74.354 58.3164 69.2432 60.975 63.1387 60.975C53.2748 60.975 45.265 52.2756 45.265 41.6673C45.265 31.059 53.2748 22.3594 63.1387 22.3594Z"
      fill="currentColor"
    />
    <path
      d="M36.861 77.6406C30.7564 77.6406 25.6457 74.982 22.1867 70.695L29.0207 64.3866C31.0928 66.8986 33.8198 68.4366 36.861 68.4366C42.4822 68.4366 47.2549 64.0937 47.2549 58.3327C47.2549 52.5717 42.4822 48.2289 36.861 48.2289C33.8198 48.2289 31.0928 49.7669 29.0207 52.2789L22.1867 45.9705C25.6457 41.6836 30.7564 39.025 36.861 39.025C46.7248 39.025 54.7347 47.7244 54.7347 58.3327C54.7347 68.941 46.7248 77.6406 36.861 77.6406Z"
      fill="currentColor"
    />
  </svg>
);

const avatarUrl =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80";

const HeaderFour = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-[#16181C] text-neutral-300 py-4 px-4 md:px-6 w-full font-lucida sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <DailyDevLogo />
          <a href="/" className="flex items-baseline">
            <span className="text-white font-bold text-lg">daily</span>
            <span className="text-neutral-400 font-medium text-lg">.dev</span>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden bg-button-dark p-2 rounded-lg hover:bg-key-dark transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-icon-lavender" />
          ) : (
            <Menu size={24} className="text-icon-lavender" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-between space-x-4">
          <div className="flex-1 flex justify-center px-4 lg:px-16">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-[#292C33] text-neutral-400 rounded-lg px-4 py-2 w-full max-w-md lg:max-w-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search text-icon-lavender mr-2 flex-shrink-0"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="bg-transparent text-sm text-neutral-300 placeholder-neutral-400 outline-none flex-1"
              />
              <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
                <kbd className="bg-[#3A3F4B] text-neutral-300 text-xs font-sans px-2 py-1 rounded">
                  Ctrl
                </kbd>
                <kbd className="bg-[#3A3F4B] text-neutral-300 text-xs font-sans px-2 py-1 rounded">
                  K
                </kbd>
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <button className="bg-button-dark p-2.5 rounded-lg hover:bg-key-dark transition-colors">
                <Bell size={20} className="text-icon-lavender" />
              </button>
              <span className="absolute -top-1 -right-1 bg-accent-purple text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                4
              </span>
            </div>
            <button className="rounded-full overflow-hidden w-9 h-9 flex-shrink-0">
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 mt-4 px-2">
          {/* Search Form for Mobile */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[#292C33] text-neutral-400 rounded-lg px-3 py-2 w-full shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search text-icon-lavender mr-2 flex-shrink-0"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="bg-transparent text-sm text-neutral-300 placeholder-neutral-400 outline-none flex-1"
            />
          </form>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center justify-between">
            <div className="relative">
              <button className="bg-button-dark p-2 rounded-lg hover:bg-key-dark transition-colors">
                <Bell size={20} className="text-icon-lavender" />
              </button>
              <span className="absolute -top-1 -right-1 bg-accent-purple text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                4
              </span>
            </div>
            <button className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;
