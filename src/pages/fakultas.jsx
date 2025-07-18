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
}
  export default function Fakultas() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="font-gelasio bg-[url('/assets/images/background.webp')] bg-repeat min-h-screen">
      <Navbar />

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
      </div>
    </div>
  );
}
