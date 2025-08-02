import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const daftarFakultas = [
  { nama: "PKKMB Fakultas Ilmu Budaya Universitas Udayana Tahun 2025", 
    logo: "/assets/images/pkkmb-fakultas/fib.webp",
    deskripsi: "HARI PERTAMA: 24 AGUSTUS 2025 (AUDITORIUM WIDYA SABHA, JIMBARAN), HARI KEDUA: 31 AGUSTUS 2025 (AUDITORIUM WIDYA SABHA, JIMBARAN). CP:     Ni Putu Yuna Fortuna Nareswari (Fortuna): 081238126005/yunareswari, OFFICIAL AKUN PKKMB FIB: @pkkmbfibunud"
  },

  { nama: "PKKMB Fakultas Kedokteran Universitas Udayana Tahun 2025", 
    logo: "/assets/images/pkkmb-fakultas/fk.jpg",
    deskripsi: "Tanggal Hari H: 18-19 Agustus 2025, CP Humas/Akun Sosmed: 081238212222 (Dessy Maheswari)/@pkkmbfkunud."
  },

  { nama: "PKKMB IUSTITIA 2025", 
    logo: "/assets/images/pkkmb-fakultas/fh.png",
    deskripsi: "Tanggal Hari H: 25-26 Agustus 2025, CP Humas/Akun Sosmed: 081246492177(Sasih Kirani)/@pkkmbiustitia." 
  },

  { nama: "PKKMB FT 2025", 
    logo: "/assets/images/pkkmb-fakultas/ft.png",
    deskripsi: "Tanggal Hari H: 14-15 Agustus 2025, cp: Bagas Prema (081237280595) / https://pkkmbftunud.my.id/ " 
  },

  { nama: "PKKMB FP UNIVERSITAS UDAYANA 2025", 
    logo: "/assets/images/pkkmb-fakultas/fp.jpg",
    deskripsi: "Tanggal Hari H: 19-20 Agustus 2025, CP Humas/Akun Sosmed: 0881037481170 (Yudhi)/@pkkmbfpunud." 
  },

  { nama: "PKKMB FEB UNUD 2025", 
    logo: "/assets/images/pkkmb-fakultas/feb.webp", 
    deskripsi: "Tanggal Hari H: 18-19 Agustus 2025, CP Humas/Akun Sosmed: 087729011523 (Jesicha Dwijayati)/@pkkmbfebunud."
  },

  { nama: "PKKMB Gopala Udayana 2025", 
    logo: "/assets/images/pkkmb-fakultas/fapet.png", 
    deskripsi: "Tanggal Hari H: 19-20 Agustus 2025, CP Humas/Akun Sosmed: 085337120211(Laura)/-."
  },

  { nama: "PKKMB Prabu FMIPA 2025", 
    logo: "/assets/images/pkkmb-fakultas/fmipa.png",
    deskripsi: "Tanggal Hari H: 20-21 Agustus 2025, CP Humas/Akun Sosmed: 082339890210(Isaka)/@prabufmipa."
  },

  { nama: "PKKMB Insan Muda Veteriner 2025", 
    logo: "/assets/images/pkkmb-fakultas/fkh.png",
    deskripsi: "Tanggal Hari H: 24-25 Agustus 2025, CP Humas/Akun Sosmed: 081286317773/@insanmudaveteriner." 
  },

  { nama: "PKKMB Ksatria Parayana", 
    logo: "/assets/images/pkkmb-fakultas/fpar.png",
    deskripsi: "Tanggal Hari H: 16-17 Agustus 2025, CP Humas/Akun Sosmed: 081917260044 (Triana)/@bemfpar_unud."
  },

  { nama: "PKKMB Fakultas Teknologi Pertanian 2025", 
    logo: "/assets/images/pkkmb-fakultas/ftp.webp", 
    deskripsi: "Tanggal Hari H: 21-22 Agustus 2025, CP Humas/Akun Sosmed: @pkkmbftpunud."
  },

  { nama: "Gema Restorasi FISIP 2025",
    logo: "/assets/images/pkkmb-fakultas/fisip.jpg",
    deskripsi: "Tanggal Hari H: 27-28 Agustus, CP Humas/Akun Sosmed: 081238452655(Metha Oka)/@grafis_2025."
  },

  { nama: "OMBAK PKKMB FKP", 
    logo: "/assets/images/pkkmb-fakultas/fkp.jpg",
    deskripsi: "Tanggal Hari H: 18-19 Agustus 2025, CP Humas/Akun Sosmed: 085932908932 (Maha)/@pkkmbfkpunud."
  },
];

export default function Informasi() {
  const [search, setSearch] = useState("");
  const [selectedFakultas, setSelectedFakultas] = useState(null);

  const filteredFakultas = daftarFakultas.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  const handleCloseModal = () => setSelectedFakultas(null);

  return (
    <div className="font-sans bg-[url('/assets/images/background/background.webp')] bg-[length:24rem] bg-repeat min-h-screen">
      <Navbar />

      <div className="w-4/5 mx-auto pt-24 animate-fade-in">
        <h2 className="text-center text-3xl md:text-5xl font-bold font-sans text-yellow-400 mb-12">
          Informasi PKKMB Fakultas Universitas Udayana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredFakultas.map((fakultas, index) => (
            <div
              key={index}
              onClick={() => setSelectedFakultas(fakultas)}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={fakultas.logo}
                  alt={fakultas.nama}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold font-poppins text-gray-800">
                  {fakultas.nama}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* MODAL */}
      {selectedFakultas && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center animate-fade-in"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-[600px] p-6 relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>

            <img
              src={selectedFakultas.logo}
              alt={selectedFakultas.nama}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
              {selectedFakultas.nama}
            </h3>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              {selectedFakultas.deskripsi}
            </p>
            <div className="mt-6 text-center">
              <button
                className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition"
                onClick={handleCloseModal}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
