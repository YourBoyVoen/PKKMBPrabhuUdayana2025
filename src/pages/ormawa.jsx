import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const daftarOrmawa = [
  { nama: "UKM Mapala", kategori: "UKM", logo: "/assets/images/ormawa/mapala.webp" },
  { nama: "UKM Menwa", kategori: "UKM", logo: "/assets/images/ormawa/menwa.webp" },
  { nama: "BEM Fakultas Teknik", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa/bem-ft.webp" },
  { nama: "Himpunan Informatika", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa/hmif.webp" },
  { nama: "Paguyuban Sumatera", kategori: "Paguyuban", logo: "/assets/images/ormawa/sumatera.webp" },
  { nama: "Paguyuban Bali Utara", kategori: "Paguyuban", logo: "/assets/images/ormawa/bali-utara.webp" },
];

const kategoriList = ["UKM", "Ormawa Fakultas", "Paguyuban"];

export default function Ormawa() {
  const [selectedKategori, setSelectedKategori] = useState("Semua");

  const filteredOrmawa = daftarOrmawa.filter((item) =>
    selectedKategori === "Semua" ? true : item.kategori === selectedKategori
  );

  return (
    <div className="font-sans bg-[url('/assets/images/background/background.webp')] bg-[length:24rem] bg-repeat min-h-screen">
      <Navbar />

      <div className="w-4/5 mx-auto pt-24 animate-fade-in">
        <h2 className="text-center text-3xl md:text-5xl font-bold font-sans text-yellow-400 mb-6">
          Daftar Organisasi Mahasiswa
        </h2>
        <p className="text-center text-black font-sans text-sm md:text-base mb-12">
          Temukan informasi mengenai UKM, Ormawa Fakultas, dan Paguyuban di Universitas Udayana
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              onClick={() => setSelectedKategori(kategori)}
              className={`px-4 py-2 rounded-full border ${
                selectedKategori === kategori
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-black border-yellow-400 hover:bg-yellow-400 hover:text-black"
              } transition`}
            >
              {kategori}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredOrmawa.map((ormawa, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={ormawa.logo}
                  alt={ormawa.nama}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold font-sans text-black">{ormawa.nama}</h3>
                <p className="text-sm font-sans text-black">{ormawa.kategori}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
