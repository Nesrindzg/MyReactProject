import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü durumu

  // Arama işlemi burada yapılabilir
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Arama yapılan kelime:", searchTerm);
  };

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-nowrap">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src="https://anizium.com/assets/global-img/logo.png" alt="Logo" className="w-32" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 bg-black lg:bg-transparent p-4 lg:p-0">
            <li>
              <Link
                to="/"
                className="hover:text-red-500 hover:border-b-2 py-2 px-3 border-red-500 transition duration-300"
              >
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                to="/animes"
                className="hover:text-red-700 hover:border-b-2 py-2 px-3 border-red-500 transition duration-300"
              >
                Animeler
              </Link>
            </li>
            <li>
              <Link
                to="/premium"
                className="hover:text-red-700 hover:border-b-2 py-2 px-3 border-red-500 transition duration-300"
              >
                Premium
              </Link>
            </li>

            {/* Search Box */}
            <li className="mt-4 lg:mt-0">
              <form
                onSubmit={handleSearch}
                className="flex items-center border-2 border-gray-300 rounded-lg w-full lg:w-auto"
              >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ara"
                  className="px-2 py-1 bg-transparent text-gray-400 focus:outline-none w-full lg:w-auto"
                />
                <button
                  type="submit"
                  className="bg-transparent text-white px-2 py-1 rounded-r-lg hover:text-red-700 transition duration-300"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </li>

            {/* Login Button */}
            <li className="mt-4 lg:mt-0 lg:ml-4">
              <Link
                to="/login"
                className="text-center w-full lg:w-auto bg-red-500 border-2 border-red-500 text-black px-4 py-2 rounded-lg hover:bg-transparent hover:border-red-500 hover:text-red-500 transition duration-300"
              >
                Giriş Yap
              </Link>
            </li>

            {/* Register Button */}
            <li className="mt-4 lg:mt-0 lg:ml-4">
              <Link
                to="/register"
                className="text-center w-full lg:w-auto border-red-500 border-2 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-black transition duration-300"
              >
                Kayıt Ol
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
