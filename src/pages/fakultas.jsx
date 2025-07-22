import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const daftarFakultas = [
  { nama: "Fakultas Ilmu Budaya", logo: "/assets/images/fakultas/fib.webp" },
  { nama: "Fakultas Kedokteran", logo: "/assets/images/fakultas/fk.webp" },
  { nama: "Fakultas Hukum", logo: "/assets/images/fakultas/fh.webp" },
  { nama: "Fakultas Teknik", logo: "/assets/images/fakultas/ft.webp" },
  { nama: "Fakultas Pertanian", logo: "/assets/images/fakultas/fp.webp" },
  { nama: "Fakultas Ekonomi dan Bisnis", logo: "/assets/images/fakultas/feb.webp" },
  { nama: "Fakultas Peternakan", logo: "/assets/images/fakultas/fapet.webp" },
  { nama: "Fakultas Matematika dan Ilmu Pengetahuan Alam", logo: "/assets/images/fakultas/fmipa.webp" },
  { nama: "Fakultas Kedokteran Hewan", logo: "/assets/images/fakultas/fkh.webp" },
  { nama: "Fakultas Teknologi Pertanian", logo: "/assets/images/fakultas/ftp.webp" },
  { nama: "Fakultas Pariwisata", logo: "/assets/images/fakultas/fpar.webp" },
  { nama: "Fakultas Ilmu Sosial dan Ilmu Politik", logo: "/assets/images/fakultas/fisip.webp" },
  { nama: "Fakultas Kelautan dan Perikanan", logo: "/assets/images/fakultas/fkp.webp" },
];

export default function Fakultas() {
  const [search, setSearch] = useState("");

  const filteredFakultas = daftarFakultas.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-sans bg-[url('/assets/images/background/background.webp')] bg-[length:24rem] bg-repeat min-h-screen">
      <Navbar />

      <div className="w-4/5 mx-auto pt-24 animate-fade-in">

      {/* Judul */}
      <h2 className="text-center text-3xl md:text-5xl font-bold font-sans text-yellow-400 mb-12">
        Daftar Fakultas Universitas Udayana
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredFakultas.map((fakultas, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={fakultas.logo}
                  alt={fakultas.nama}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold font-poppins text-gray-800">{fakultas.nama}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
