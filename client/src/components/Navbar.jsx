import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTED from '../assets/Icons/nav-logo.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-white p-4 w-full fixed top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-bold">
          <Link to="/"><img src={LogoTED} className='w-[120px]'></img></Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`absolute top-16 left-0 w-full bg-black md:static md:flex md:items-center md:justify-between ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-md md:text-sm text-center md:mx-auto font-monts font-[600] text-[12px]">
            <li className="py-2 md:py-0">
              <Link to="/" className="block md:inline-block hover:text-gray-300">Home</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/about" className="block md:inline-block hover:text-gray-300">About</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/events" className="block md:inline-block hover:text-gray-300">Past Events</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/merchandise" className="block md:inline-block hover:text-gray-300">Merchandise</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/buy-tickets" className="block md:inline-block hover:text-gray-300">Buy Tickets</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/login" className="block md:inline-block hover:text-gray-300">Login</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/signup" className="block md:inline-block hover:text-gray-300">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
