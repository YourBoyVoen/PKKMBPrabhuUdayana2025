import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Cek ukuran layar saat komponen dimount dan saat resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Panggil sekali saat mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", text: "Warta Ksatria" },
    { path: "/pkkmb", text: "Jelajah Udayana" },
    { path: "/informasi", text: "Informasi" },
    { path: "/fakultas", text: "Fakultas" },
    { path: "/ormawa", text: "Ormawa" },
    { path: "/fakultasPakeModal", text: "Fakultas Pake Modal" }
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/assets/images/logopkkmb.png" 
            alt="Logo PKKMB" 
            className="w-8 h-8 object-contain" 
          />
          <Link to="/" className="font-bold font-poppins text-lg text-gray-700">
            PKKMB Prabhu Udayana 2025
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium font-poppins">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  className="hover:text-blue-500 transition duration-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Hamburger Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium font-poppins">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  className="block py-2 hover:text-blue-500 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}