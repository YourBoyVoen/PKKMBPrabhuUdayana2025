// src/components/NotFound.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from "../components/navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full text-center bg-white p-8">
          <h1 className="font-poppins text-9xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="font-poppins text-2xl font-semibold text-gray-700 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="font-poppins text-gray-600 mb-6">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <Link
            to="/"
            className="font-poppins inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    </div>
  );
}