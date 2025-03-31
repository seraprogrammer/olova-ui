import { useState } from "react";

const HeaderFive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#101828] shadow-md z-50 p-4 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="hover:text-sky-500 relative transition-colors duration-300 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="hover:text-sky-500 relative transition-colors duration-300 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="hover:text-sky-500 relative transition-colors duration-300 group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="hover:text-sky-500 relative transition-colors duration-300 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden w-full shadow-md p-4 flex flex-col space-y-4">
          <a
            href="#"
            className="hover:text-sky-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-sky-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-sky-500 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-sky-500 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export { HeaderFive };
