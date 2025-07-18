import { useState } from "react";
import Navbar from "../components/navbar";

const fakultasList = [
  {
    name: "Fakultas Ilmu Budaya",
    image: "/assets/images/feb.webp",
    description:
      "Fakultas Ilmu Budaya menawarkan program studi di bidang bahasa, sastra, dan kebudayaan untuk membentuk lulusan yang kreatif dan berwawasan global.",
  },
  {
    name: "Fakultas Ekonomi dan Bisnis",
    image: "/assets/images/feb.webp",
    description:
      "Fakultas Ekonomi dan Bisnis fokus pada pengembangan ilmu ekonomi, manajemen, dan akuntansi yang kompetitif di tingkat nasional dan internasional.",
  },
  {
    name: "Fakultas Kedokteran",
    image: "/assets/images/feb.webp",
    description:
      "Fakultas Kedokteran menghasilkan tenaga medis profesional dengan integritas tinggi dan keunggulan dalam pelayanan kesehatan.",
  },
  {
    name: "Fakultas Teknik",
    image: "/assets/images/feb.webp",
    description:
      "Fakultas Teknik mendidik mahasiswa untuk menjadi insinyur handal yang inovatif dalam teknologi dan pembangunan.",
  },
  {
    name: "Fakultas Hukum",
    image: "/assets/images/feb.webp",
    description:
      "Fakultas Hukum melahirkan sarjana hukum yang berintegritas tinggi dan mampu bersaing dalam dunia hukum modern.",
  },
  {
    name: "Fakultas Pertanian",
    image: "/assets/images/feb.webp",
    description:
      "Fakultas Pertanian berkomitmen pada pengembangan teknologi pertanian yang berkelanjutan dan ramah lingkungan.",
  },
];

export default function facultyWithModal    () {
  const [selectedFakultas, setSelectedFakultas] = useState(null);

  return (
    <div className="font-gelasio bg-[url('/assets/images/background.webp')] bg-repeat min-h-screen">
      <Navbar />

      <div className="w-11/12 mx-auto py-10 mt-16">
        <h2 className="text-3xl font-bold text-center mb-10 font-sinerva">
          Daftar Fakultas Universitas Udayana
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {fakultasList.map((fakultas, index) => (
            <button
              key={index}
              onClick={() => setSelectedFakultas(fakultas)}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 focus:outline-none"
            >
              <img
                src={fakultas.image}
                alt={fakultas.name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{fakultas.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFakultas && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedFakultas(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Supaya klik dalam modal tidak menutup
          >
            <img
              src={selectedFakultas.image}
              alt={selectedFakultas.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedFakultas.name}</h3>
              <p className="text-gray-700">{selectedFakultas.description}</p>
            </div>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedFakultas(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
