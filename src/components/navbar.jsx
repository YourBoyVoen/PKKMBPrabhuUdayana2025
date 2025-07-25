import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/logofix.PNG"
            alt="Logo PKKMB"
            className="w-8 h-8 object-contain"
          />
          <Link to="/" className="font-bold font-poppins text-lg text-gray-700">
            PKKMB Prabhu Udayana 2025
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium font-poppins">
          <li><Link to="/wartaksatria" className="hover:text-blue-500 transition">Warta Ksatria</Link></li>
          <li><Link to="/jelajahudayana" className="hover:text-blue-500 transition">Jelajah Udayana</Link></li>
          <li><Link to="/informasi" className="hover:text-blue-500 transition">Informasi</Link></li>
          <li><Link to="/fakultas" className="hover:text-blue-500 transition">Fakultas</Link></li>
          <li><Link to="/ormawa" className="hover:text-blue-500 transition">Ormawa</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium font-poppins">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Warta Ksatria</Link></li>
            <li><Link to="/jelajahudayana" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Jelajah Udayana</Link></li>
            <li><Link to="/informasi" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Informasi</Link></li>
            <li><Link to="/fakultas" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Fakultas</Link></li>
            <li><Link to="/ormawa" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">Ormawa</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
