import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
    <div className="relative min-h-screen bg-center flex flex-col"
    style={{backgroundImage: "url('/assets/images/background/background.webp')",}}
    >
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
          <h2 className="text-white text-4xl md:text-4xl text-center font-semibold mt-4 font-poppins">
            Selamat Datang Ksatria Muda Udayana
          </h2>
          <h1 className="text-white text-6xl md:text-7xl text-center font-bold mt-4 font-sans">
            PKKMB Prabhu Udayana 2025
          </h1>
          <h3 className="text-white text-2xl md:text-2xl text-center font-medium mt-4 font-poppins">
            Pengenalan Kehidupan Kampus Mahasiswa Baru 2025
          </h3>
        </div>
      </div>

      {/* PKKMB Section */}
        <section
            id="pkkmb"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 gap-12"
            
          >
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-left text-yellow-400">
                Apa Itu PKKMB?
              </h2>
              <p className="max-w-xl text-lg font-poppins leading-relaxed text-black text-left">
                PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru) adalah program resmi dari perguruan tinggi
                yang bertujuan untuk membantu mahasiswa baru beradaptasi dengan lingkungan kampus, memahami nilai-nilai akademik,
                serta membangun karakter sebagai insan intelektual yang kritis, inovatif, dan beretika.
                <br /><br />
                Melalui kegiatan ini, mahasiswa baru akan dikenalkan lebih dalam tentang sejarah, budaya, dan nilai-nilai luhur Universitas Udayana, termasuk tata cara perkuliahan, organisasi kemahasiswaan, dan peluang pengembangan diri.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              <img
                src="/assets/images/maba-1.JPG"
                className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                alt="pkkmb1"
              />
              <img
                src="/assets/images/maba-2.JPG"
                className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                alt="pkkmb2"
              />
              <img
                src="/assets/images/maba-3.JPG"
                className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                alt="pkkmb3"
              />
              <img
                src="/assets/images/maba-4.JPG"
                className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                alt="pkkmb4"
              />
            </div>
          </section>

          {/* Maskot Section */}
          <section 
            id="maskot" 
            className="min-h-screen mt-20 sm:mt-32"
            >
            
            <div className="text-center sm:text-xl font-sans text-black">
              “Hai Ksatria Muda Udayana! Kami adalah maskot PKKMB-Prabhu Udayana 2025 loh!
            </div>
            <div className="text-center sm:text-xl font-sans text-black mb-6">
              Kami siap menyambut kalian semua di Universitas Udayana!”
            </div>

           <div className="flex justify-center mt-10">
              <div className="relative">
                {/* Dharma kiri atas */}
                <h3 className="absolute top-0 left-2 sm:left-10 lg:left-20 text-3xl sm:text-5xl lg:text-6xl font-bold text-yellow-300 z-0">
                  Dharma
                </h3>

                <img
                  src="/assets/images/mascot/mascot.png"
                  className="relative z-10 max-w-full h-64 sm:h-[500px] mx-auto"
                  alt="Dharma & Patni"
                />

                {/* Patni kanan bawah */}
                <h3 className="absolute bottom-2 sm:bottom-10 right-2 sm:right-10 lg:right-20 text-3xl sm:text-5xl lg:text-6xl font-bold text-yellow-300 z-0">
                  Patni
                </h3>
              </div>
            </div>

            <div className="w-[850px] max-w-full sm:text-xl text-black font-sans bg-yellow-400 px-4 sm:px-10 py-4 mx-auto text-center mt-6 rounded-md">
              <strong>Dharma</strong> dan <strong>Patni</strong> merupakan maskot PKKMB Prabhu Udayana.
              Pada tahun ini, Dharma dan Patni kembali hadir dengan gaya baru dan tentunya lebih ganteng
              dan cantik. Dharma dan Patni siap menyambut kalian semua di Universitas Udayana!
            </div>
          </section>

          {/* Spirit Utama */}

          <section id="spirit" className="mt-20 lg:mt-32 mx-4 md:mx-32 text-center">
              <h3 className="text-2xl sm:text-5xl text-yellow-400 font-sans w-fit font-bold mx-auto">
                Spirit Utama
              </h3>
              <p className="mt-8 text-black font-sans text-center text-xl">
                <strong>Resiliensi</strong> merujuk pada kemampuan seseorang untuk menyesuaikan diri dengan baik ketika menghadapi tekanan, kesulitan, atau situasi yang menantang.
              </p>

              <div className="mt-8 lg:mt-12 mx-6 sm:mx-16 xl:mx-32 text-center">
                <div className="px-5 py-3 bg-yellow-400 text-xl sm:text-3xl text-black font-poppins w-fit rounded-md font-semibold mx-auto">
                  3 Core Resiliensi
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                  <div className="rounded-md p-1 bg-gradient-to-br from-blue-400 to-white">
                    <div className="w-full h-full bg-white rounded-md p-4">
                      <h4 className="text-2xl text-center font-sans font-semibold text-black">Progresi</h4>
                      <img
                        src="/assets/images/progresi.png"
                        alt="Adaptasi"
                        className="mt-10 w-32 mx-auto max-w-full"
                      />
                      <p className="text-black font-sans text-center mt-8">
                        Mahasiswa baru untuk pertama kalinya masuk ke pintu gerbang
                        Universitas Udayana. Pada tahap ini, mereka akan menyesuaikan diri
                        dengan lingkungan, sosial, budaya, dan seluk-beluk Universitas
                        Udayana.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md p-1 bg-gradient-to-br from-yellow-400 to-white">
                    <div className="w-full h-full bg-white rounded-md p-4">
                      <h4 className="text-2xl text-center font-sans font-semibold text-black">Adaptasi</h4>
                      <img
                        src="/assets/images/adaptasi.webp"
                        alt="Eksplorasi"
                        className="mt-10 w-32 mx-auto max-w-full"
                      />
                      <p className="text-black font-sans text-center mt-8">
                        Mahasiswa baru untuk pertama kalinya masuk ke pintu gerbang
                        Universitas Udayana. Pada tahap ini, mereka akan menyesuaikan diri
                        dengan lingkungan, sosial, budaya, dan seluk-beluk Universitas
                        Udayana.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md p-1 bg-gradient-to-br from-[#B1363E] to-white">
                    <div className="w-full h-full bg-white rounded-md p-4">
                      <h4 className="text-2xl text-center font-sans font-semibold text-black">Evolusi</h4>
                      <img
                        src="/assets/images/evolusi.webp"
                        alt="Eskalasi"
                        className="mt-10 w-32 mx-auto max-w-full"
                      />
                      <p className="text-black font-sans text-center mt-8">
                        Setelah mereka sudah bisa beradaptasi dan juga mengeksplorasi
                        potensi diri dan Udayana, barulah mereka akan sampai pada satu
                        titik yang namanya “Eskalasi”, yang secara definisi berarti
                        peningkatan kualitas diri seseorang.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/*Filosfi Logo*/}

            <section className=" py-20 mt-20 px-6 sm:px-10" id="filosofi-logo">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                  {/* Logo */}
                  <div className="md:w-1/2 flex justify-center" >
                    <img
                      src="assets/images/logofix.PNG"
                      alt="Logo Filosofi"
                      className="max-w-sm w-full h-auto rounded-xl shadow-md bg-white"
                    />
                  </div>

                  {/* Deskripsi Filosofi */}
                  <div className="md:w-1/2 space-y-6 text-black font-sans">
                    <h2 className="text-5xl font-bold font-sans text-yellow-400 mb-4">Filosofi Logo</h2>

                    <div>
                      <h4 className="font-semibold text-lg font-sans text-black">Bentuk Bunga Jeumpa (Cempaka)</h4>
                      <p>
                        Melambangkan kesucian, ketulusan, dan spiritualitas. Mewakili niat suci mahasiswa baru dalam menempuh pendidikan tinggi.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg font-sans text-black">Logo Resmi Universitas Udayana</h4>
                      <p>
                        Lingkaran pusat menunjukkan jantung akademik—visi, misi, dan nilai luhur Universitas Udayana sebagai arah pendidikan.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg font-sans text-black">Tiga Figur Manusia – Simbol Tri Dharma</h4>
                      <p>
                        Representasi dari Pendidikan, Penelitian, dan Pengabdian Masyarakat. Juga menggambarkan semangat kolaboratif mahasiswa.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg font-sans text-black">13 Kelopak Bunga – Representasi Fakultas</h4>
                      <p>
                        Menyimbolkan 13 fakultas di Universitas Udayana yang unik namun bersatu dalam harmoni akademik.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg font-sans text-black">Palet Warna PKKMB (UNO)</h4>
                      <p>
                        Biru (kebijaksanaan), Merah (semangat), Kuning (harapan), Hijau (pertumbuhan). Menggambarkan semangat dan keberagaman mahasiswa baru.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg font-sans text-black">Motif Tradisional Bali</h4>
                      <p>
                        Memberikan nuansa lokal yang kuat, menunjukkan integrasi budaya Bali dengan kemajuan akademik.
                      </p>
                    </div>
                  </div>
                </div>
             </section>





       <Footer />   
    </div>
  );
}


