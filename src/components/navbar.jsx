import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src="/assets/images/logopkkmb.png" alt="Logo PKKMB" className="w-8 h-8 object-contain" />
        <Link to= "/" className="font-bold font-poppins text-lg text-gray-700">
          PKKMB Prabhu Udayana 2025
        </Link>
      </div>

      <ul className="flex gap-8 text-gray-700 font-medium font-poppins">
        <li><Link to="/" className="hover:text-blue-500 transition">Warta Ksatria</Link></li>
        <li><Link to="/pkkmb" className="hover:text-blue-500 transition">Jelajah Udayana</Link></li>
        <li><Link to="/informasi" className="hover:text-blue-500 transition">Informasi</Link></li>
        <li><Link to="/fakultas" className="hover:text-blue-500 transition">Fakultas</Link></li>
        <li><Link to="/ormawa" className="hover:text-blue-500 transition">Ormawa</Link></li>
      </ul>
      
    </nav>
  );
}
