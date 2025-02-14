import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold text-blue-600">
          Next - OutsourceEdge
        </div>
        <nav className="flex space-x-6 font-medium text-gray-600">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#services" className="hover:text-blue-500">
            Services
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
