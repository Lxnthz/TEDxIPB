import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTED from '../assets/Icons/ted-logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('bg-transparent');

  // Toggles mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handles scroll event to change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setNavBackground('bg-black bg-opacity-50');
      } else {
        setNavBackground('bg-black');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${navBackground} text-white p-4 w-screen fixed top-0 z-20 transition duration-300 ease-in-out`}>
      <div className="flex justify-between items-center md:px-12">
        {/* Brand Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={LogoTED} className="w-[120px] md:w-[200px]" alt="TEDx Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`absolute top-[3.9rem] left-0 w-full bg-black md:bg-transparent md:static md:flex md:items-center md:justify-end ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-md md:text-sm text-center font-monts font-[600] text-[12px]">
            <li className="py-2 md:py-0">
              <Link to="/" className="block md:inline-block hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/about" className="block md:inline-block hover:text-gray-300">
                About
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/events" className="block md:inline-block hover:text-gray-300">
                Past Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
