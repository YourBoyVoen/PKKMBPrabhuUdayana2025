import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
const fakultasList = [
  {
    name: "Fakultas Ilmu Budaya",
    url: "FIB",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Kedokteran",
    url: "FK",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Hukum",
    url: "FH",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Teknik",
    url: "FT",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Pertanian",
    url: "FPer",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Ekonomi dan Bisnis",
    url: "FEB",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Peternakan",
    url: "FPet",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
    url: "FMIPA",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Kedokteran Hewan",
    url: "FKH",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Teknologi Pertanian",
    url: "FTP",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Pariwisata",
    url: "FP",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Ilmu Sosial dan Ilmu Politik",
    url: "FISIP",
    image: "/assets/images/feb.webp",
  },
  {
    name: "Fakultas Kelautan dan Perikanan",
    url: "FKP",
    image: "/assets/images/feb.webp",
  },
];

const FakultasCard = ({ fakultas, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
}import Footer from "../components/footer";

const daftarFakultas = [
  { 
    nama: "Fakultas Ilmu Budaya", 
    logo: "/assets/images/fakultas/fib.webp",
    deskripsi: "Fakultas Ilmu Budaya, yang dulu dikenal sebagai Fakultas Sastra merupakan cikal bakal dari Universitas Udayana yang didirikan pada 29 September 1958. Saat ini Fakultas Ilmu Budaya memiliki 8 program studi S1 yaitu Program Studi Sastra Inggris, Sastra Jepang, Sastra Indonesia, Sastra Jawa Kuna, Sastra Bali, Arkeologi, Antropologi Budaya, dan Ilmu Sejarah." 
  },

  { 
    nama: "Fakultas Kedokteran", 
    logo: "/assets/images/fakultas/fk.webp",
    deskripsi: "Fakultas Kedokteran yang didirikan pada tanggal 17 Agustus 1962 merupakan Fakultas Kedokteran pertama di Bali, Fakultas Kedokteran Universitas Udayana memiliki 6 Program Studi S1, yaitu Kedokteran Umum, Kedokteran Gigi, Psikologi, Ilmu Keperawatan, Kesehatan Masyarakat, dan Fisioterapi."
  },

  { 
    nama: "Fakultas Peternakan", 
    logo: "/assets/images/fakultas/fapet.webp",
    deskripsi: "Fakultas Peternakan didirikan pada 19 Agustus 1963 yang pada awalnya memiliki nama Fakultas Kedokteran Hewan dan Peternakan. Fakultas Peternakan memiliki satu program studi S1 yaitu Program Studi Peternakan."

  },

  { 
    nama: "Fakultas Hukum", 
    logo: "/assets/images/fakultas/fh.webp",
    deskripsi: "Fakultas Hukum, pada awalnya memiliki nama Fakultas Hukum dan Pengetahuan Masyarakat yang didirikan pada 1 September 1964. Saat ini fakultas ini dikenal dengan nama Fakultas Hukum yang memiliki satu program studi yaitu Program Studi Ilmu Hukum."

  },

  { 
    nama: "Fakultas Teknik", 
    logo: "/assets/images/fakultas/ft.webp",
    deskripsi: "Fakultas Teknik Universitas Udayana didirikan pada tanggal 1 Oktober 1965. Fakultas Teknik memiliki tujuh program studi, yaitu Program Studi Arsitektur, Program Studi Teknik Sipil, Program Studi Teknik Mesin, Program Studi Teknik Industri, Program Studi Teknik Elektro, Program Studi Teknologi Informasi dan Program Studi Teknik Lingkungan."

  },

  { 
    nama: "Fakultas Ekonomi dan Bisnis", 
    logo: "/assets/images/fakultas/feb.webp",
    deskripsi: "Fakultas Ekonomi dan Bisnis, didirikan pada tanggal 12 September 1967. Fakultas Ekonomi dan Bisnis memiliki tiga program studi S1 yaitu Program Studi Ekonomi Pembangunan, Program Studi Manajemen, Program Studi Ekonomi, selain itu Fakultas Ekonomi dan Bisnis juga memiliki program vokasi dan profesi yaitu Program Studi D3 Perpajakan,  D3 Akuntansi dan Program Studi Profesi Akuntan.",

  },

  { 
    nama: "Fakultas Pertanian", 
    logo: "/assets/images/fakultas/fp.webp",
    deskripsi: "Fakultas Pertanian didirikan pada tanggal 2 September 1967. Fakultas Pertanian memiliki tiga program studi yaitu Program Studi Agribisnis, Program Studi Agroekoteknologi, dan Program Studi Arsitektur Lanskap",

  },

  { 
    nama: "Fakultas Matematika dan Ilmu Pengetahuan Alam", 
    logo: "/assets/images/fakultas/fmipa.webp",
    deskripsi: "Fakultas Matematika dan Ilmu Pengetahuan Alam didirikan pada tanggal 1 Juli 1984. Fakultas Matematika dan Ilmu Pengetahuan Alam memiliki enam program studi yaitu Program Studi Kimia, Program Studi Biologi, Program Studi Matematika, Program Studi Fisika, Program Studi Farmasi, dan Program Studi Informatika",
  },

  { 
    nama: "Fakultas Kedokteran Hewan", 
    logo: "/assets/images/fakultas/fkh.webp",
    deskripsi: "Fakultas Kedokteran Hewan didirikan pada tanggal 31 Juli 1984. Fakultas Kedokteran Hewan terdiri dari satu program studi S1  yaitu Program Studi Kedokteran Hewan.", 
  },

  { 
    nama: "Fakultas Teknologi Pertanian", 
    logo: "/assets/images/fakultas/ftp.webp",
    deskripsi: "Fakultas Teknologi Pertanian didirikan pada tanggal 31 Juli 1984. Fakultas Teknologi Pertanian memiliki tiga program studi yaitu Program Studi Teknologi Industri Pertanian, Program Studi Teknologi Pangan, dan Program Studi Teknik Pertanian dan Biosistem.",
  },

  { 
    nama: "Fakultas Pariwisata", 
    logo: "/assets/images/fakultas/fpar.webp",
    deskripsi: "Fakultas Pariwisata diresmikan pada tanggal 1 Mei 1985  yang pembentukannya diawali oleh program studi Ilmu Kepariwisataan. Saat ini, di Fakultas Pariwisata Universitas Udayana terdapat tiga program studi yaitu Program Studi D4 Pengelolaan Perhotelan, Program Studi S1 Destinasi Pariwisata, dan Program Studi S1 Industri Perjalanan Wisata.",
  },

  { 
    nama: "Fakultas Ilmu Sosial dan Ilmu Politik", 
    logo: "/assets/images/fakultas/fisip.webp",
    deskripsi: "Fakultas Ilmu Sosial dan Ilmu Politik didirikan pada tanggal 28 Juni 2009. Fakultas Ilmu Sosial dan Ilmu Politik memiliki lima program S1, yaitu Program Studi Sosiologi, Hubungan Internasional, Administrasi Negara, Ilmu Komunikasi, Ilmu Politik dan satu program vokasional, yaitu D3 Perpustakaan.",
  },

  { 
    nama: "Fakultas Kelautan dan Perikanan", 
    logo: "/assets/images/fakultas/fkp.webp",
    deskripsi: "Fakultas Kelautan dan Perikanan didirikan pada tanggal 10 Oktober 2011. Fakultas Kelautan dan Perikanan memiliki dua program studi yaitu Program Studi Manajemen Sumber Daya Perairan dan Program Studi Ilmu Kelautan"
  },
];

  export default function Fakultas() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          Daftar Fakultas Universitas Udayana
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
      <div className="w-11/12 mx-auto py-10 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10 font-sinerva"
        >
          Daftar Fakultas Universitas Udayana
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
          {fakultasList.map((fakultas, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/Fakultas/${encodeURIComponent(fakultas.url)}`}
                className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden rounded-t-lg">
                  <motion.img
                    src={fakultas.image}
                    alt={fakultas.name}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-poppins font-semibold text-lg">
                    {fakultas.name}
                  </h3>
                </div>
              </Link>

              {/* Hover Preview */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-70 rounded-lg flex items-center justify-center p-4 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-white text-center"
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      exit={{ y: 10 }}
                    >
                      <h4 className="text-xl font-bold mb-2">{fakultas.name}</h4>
                      <p className="text-sm mb-4">Klik untuk melihat detail</p>
                      <Link
                        to={`/Fakultas/${encodeURIComponent(fakultas.url)}`}
                      >
                        <motion.div
                          className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          >
                          Jelajahi
                        </motion.div>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
