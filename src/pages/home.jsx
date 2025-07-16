import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const images = [
  "/assets/images/hero-1.jpg",
  "/assets/images/hero-2.JPG",
  "/assets/images/hero-3.JPG",
  "/assets/images/hero-4.JPG",
  "/assets/images/hero-5.JPG",
  "/assets/images/hero-6.JPG",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen bg-black/40 backdrop-blur-sm px-8">
          <h2 className="text-white text-4xl md:text-4xl text-center font-semibold mt-3 font-poppins">
            Selamat Datang Ksatria Muda Udayana
          </h2>
          <h1 className="text-white text-6xl md:text-7xl text-center font-bold mt-4 font-sinerva">
            PKKMB Prabhu Udayana 2025
          </h1>
          <h3 className="text-white text-2xl md:text-2xl text-center font-medium mt-4 font-poppins">
            Bersama Kita Wujudkan Generasi Emas Udayana
          </h3>
        </div>
      </div>

      {/* PKKMB Section */}
      <section
        id="pkkmb"
        className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-gray-100"
        style={{ backgroundImage: `url('/assets/images/background/background.webp')` }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-sinerva text-center mb-6">
          Apa Itu PKKMB?
        </h2>
        <p className="max-w-3xl text-lg text-center font-poppins leading-relaxed text-black">
          PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru) adalah program resmi dari perguruan tinggi
          yang bertujuan untuk membantu mahasiswa baru beradaptasi dengan lingkungan kampus, memahami nilai-nilai akademik,
          serta membangun karakter sebagai insan intelektual yang kritis, inovatif, dan beretika.
          <br /><br />
          Melalui kegiatan ini, mahasiswa baru akan dikenalkan lebih dalam tentang sejarah, budaya, dan nilai-nilai luhur Universitas Udayana, termasuk tata cara perkuliahan, organisasi kemahasiswaan, dan peluang pengembangan diri.
        </p>
      </section>
    </div>
  );
}
