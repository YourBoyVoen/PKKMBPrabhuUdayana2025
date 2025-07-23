import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const daftarFakultas = [
  { nama: "PKKMB Fakultas Ilmu Budaya Universitas Udayana Tahun 2024", 
    logo: "/assets/images/pkkmb-fakultas/fib.webp",
    deskripsi: "PKKMB Fakultas Ilmu Budaya Universitas Udayana Tahun 2024"
  },

  { nama: "Fakultas Kedokteran", 
    logo: "/assets/images/pkkmb-fakultas/fk.webp",
    deskripsi: "PKKMB Fakultas Kedokteran Universitas Udayana Tahun 2024"
  },

  { nama: "PKKMB IUSTITIA 2024", 
    logo: "/assets/images/pkkmb-fakultas/fh.webp",
    deskripsi: "PKKMB Fakultas Hukum Universitas Udayana Tahun 2024" 
  },

  { nama: "PKKMB FT", 
    logo: "/assets/images/pkkmb-fakultas/ft.webp",
    deskripsi: "PKKMB Fakultas Teknik Universitas Udayana Tahun 2024" 
  },

  { nama: "PKKMB Fakultas Pertanian", 
    logo: "/assets/images/pkkmb-fakultas/fp.webp",
    deskripsi: "PKKMB Fakultas Pertanian Universitas Udayana Tahun 2024" 
  },

  { nama: "PKKMB Fakultas Ekonomi dan Bisnis Universitas Udayana 2024", 
    logo: "/assets/images/pkkmb-fakultas/feb.webp", 
    deskripsi: "PKKMB Fakultas Ekonomi dan Bisnis Universitas Udayana Tahun 2024"
  },

  { nama: "PKKMB GOPALA Udayana", 
    logo: "/assets/images/pkkmb-fakultas/fapet.webp", 
    deskripsi: "PKKMB Fakultas Peternakan Universitas Udayana Tahun 2024"
  },

  { nama: "PKKMB Prabu FMIPA 2024", 
    logo: "/assets/images/pkkmb-fakultas/fmipa.webp",
    deskripsi: "PKKMB Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Udayana Tahun 2024"
  },

  { nama: "Insan Muda Veteriner", 
    logo: "/assets/images/pkkmb-fakultas/fkh.webp",
    deskripsi: "PKKMB Fakultas Kedokteran Hewan Universitas Udayana Tahun 2024" 
  },

  { nama: "PKKMB Ksatria Parayana", 
    logo: "/assets/images/pkkmb-fakultas/fpar.webp",
    deskripsi: "PKKMB Fakultas Pariwisata Universitas Udayana Tahun 2024"
  },

  { nama: "PKKMB FTP 2024", 
    logo: "/assets/images/pkkmb-fakultas/ftp.webp", 
    deskripsi: "PKKMB Fakultas Teknologi Pertanian Universitas Udayana Tahun 2024"
  },

  { nama: "PKKMB Grafis( Gema Restorasi FISIP)",
    logo: "/assets/images/pkkmb-fakultas/fisip.webp",
    deskripsi: "PKKMB Fakultas Ilmu Sosial dan Ilmu Politik Universitas Udayana Tahun 2024"
  },

  { nama: "OMBAK FKP 2024", 
    logo: "/assets/images/pkkmb-fakultas/fkp.webp",
    deskripsi: "PKKMB Fakultas Kesehatan Masyarakat Universitas Udayana Tahun 2024"
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
