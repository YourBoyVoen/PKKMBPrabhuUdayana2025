import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const daftarFakultas = [
  { nama: "PKKMB Fakultas Ilmu Budaya Universitas Udayana Tahun 2024", logo: "/assets/images/pkkmb-fakultas/fib.webp" },
  { nama: "Fakultas Kedokteran", logo: "/assets/images/pkkmb-fakultas/fk.webp" },
  { nama: "PKKMB IUSTITIA 2024", logo: "/assets/images/pkkmb-fakultas/fh.webp" },
  { nama: "PKKMB FT", logo: "/assets/images/pkkmb-fakultas/ft.webp" },
  { nama: "PKKMB Fakultas Pertanian", logo: "/assets/images/pkkmb-fakultas/fp.webp" },
  { nama: "PKKMB Fakultas Ekonomi dan Bisnis Universitas Udayana 2024", logo: "/assets/images/pkkmb-fakultas/feb.webp" },
  { nama: "PKKMB GOPALA Udayana", logo: "/assets/images/pkkmb-fakultas/fapet.webp" },
  { nama: "PKKMB Prabu FMIPA 2024", logo: "/assets/images/pkkmb-fakultas/fmipa.webp" },
  { nama: "Insan Muda Veteriner", logo: "/assets/images/pkkmb-fakultas/fkh.webp" },
  { nama: "PKKMB Ksatria Parayana", logo: "/assets/images/pkkmb-fakultas/fpar.webp" },
  { nama: "PKKMB FTP 2024", logo: "/assets/images/pkkmb-fakultas/ftp.webp" },
  { nama: "PKKMB Grafis( Gema Restorasi FISIP)", logo: "/assets/images/pkkmb-fakultas/fisip.webp" },
  { nama: "OMBAK FKP 2024", logo: "/assets/images/pkkmb-fakultas/fkp.webp" },
];

export default function Informasi() {
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
        Informasi PKKMB Fakultas Universitas Udayana
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
