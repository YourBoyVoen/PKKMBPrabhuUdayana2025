import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function WartaKsatria() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "/assets/images/wkt1.JPG",
    "/assets/images/wkt2.jpg",
    "/assets/images/wkt7.jpg",
    "/assets/images/wkt4.JPG",
    "/assets/images/wkt5.JPG",
    "/assets/images/wkt6.JPG",
  ];

  return (
    <div className="font-sans bg-[url('/assets/images/background/background.webp')] bg-repeat bg-[length:24rem] min-h-screen text-black">
      <Navbar />

      <div className="pt-24 pb-16 w-11/12 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold font-sans text-yellow-400 text-center mb-12">
          Warta Ksatria
        </h1>

        {/* Sejarah */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold mb-4">Sejarah Universitas Udayana</h2>
          <p className="text-justify font-sans leading-relaxed">
            Universitas Udayana yang berdiri saat ini tidak bisa lepas dari peran yang dimiliki oleh Universitas
            Airlangga (Unair) Surabaya.
            Fakultas Sastra Udayana cabang Universitas Airlangga yang diresmikan oleh P. J. M. Presiden Republik
            Indonesia Ir. Soekarno, dibuka
            oleh J. M. Menteri P. P dan K. Prof. DR. Priyono pada tanggal 29 September 1958 menjadi cikal bakal
            berdirinya kampus ini. Dalam proses
            pendiriannya, terdapat peran penting yang dimiliki oleh tokoh Pendidikan asal Bali, yaitu Prof. Ida Bagus Mantra. Pria yang lahir pada
            8 Mei 1928 tersebut berharap agar keberadaan Fakultas Sastra cabang Universitas Airlangga di Bali
            bisa menjadi sarana untuk menjaga dan
            mengembangkan budaya asal Bali. Pentingnya pemerataan Pendidikan di wilayah tanah air, memberikan
            jalan terbentuknya Universitas Udayana
            dengan meresmikan Fakultas Sastra Universitas Udayana sebagai cabang Universitas Airlangga sebagai
            Universitas terpisah dan memperoleh
            status perguruan tinggi negeri pada tanggal 17 Agustus 1962. Selain pendidikan, Universitas Udayana
            juga memiliki tanggung jawab penuh
            dalam pemenuhan prinsip perguruan tinggi, yaitu dari penelitian, pengembangan di bidang IPTEK dan
            seni, dan juga pengabdian masyarakat yang
            sesuai dengan Tri Dharma Perguruan Tinggi.
          </p>
        </section>

        {/* Visi Misi */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold mb-4">Visi dan Misi Universitas Udayana</h2>
          <p className="font-bold mb-2">Visi:</p>
          <p className="mb-4">
           "Terwujudnya perguruan tinggi yang unggul, mandiri, dan berbudaya." 
          </p>
          <p className="font-bold mb-2">Misi:</p>
          <p className="mb-4">
            1. Menyelenggarakan pendidikan tinggi yang bermutu dan menghasilkan lulusan yang memiliki moral/etika/akhlak dan integritas yang tinggi sesuai dengan tuntutan masyarakat lokal, nasional, dan internasional.
            <br />
            2. Mengembangkan penelitian dan pengabdian kepada masyarakat sesuai dengan kepentingan masyarakat dan bangsa.
            <br />
            3. Memberdayakan Unud sebagai lembaga yang menghasilkan dan mengembangkan pengetahuan, teknologi, dan budaya yang dapat dimanfaatkan untuk kesejahteraan masyarakat.
            <br /> 
            4. Menghasilkan karya inovatif dan prospektif bagi kemajuan Unud serta perekonomian nasional.  
          </p>
        </section>

        {/* Esensi PKKMB */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold mb-4">Esensi PKKMB</h2>
          <p className="text-justify font-sans leading-relaxed">
            PKKMB Prabhu Udayana 2025 adalah wadah orientasi untuk menyambut mahasiswa baru sekaligus menjembatani transisi dari siswa menjadi mahasiswa. Kegiatan ini tidak hanya mengenalkan kehidupan kampus Universitas Udayana secara holistik, tetapi juga menanamkan nilai resiliensi, kemampuan untuk beradaptasi, bertahan, dan tumbuh di tengah tantangan dunia perkuliahan. 
          </p>
        </section>

        {/* Tema PKKMB */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold mb-4">Tema PKKMB Tahun Ini</h2>
          <div className="p-4 bg-yellow-400 rounded-lg shadow-md">
            <p className="text-lg italic text-center font-semibold text-black">
              "Ksatria Abhipraya, Adhyastaning Dharma"
            </p>
          </div>
        </section>

        {/* Galeri PKKMB */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Galeri Dokumentasi PKKMB</h2>
          <p className="text-gray-800 mb-6">Beberapa momen kegiatan PKKMB tahun sebelumnya.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`PKKMB ${index + 1}`}
                className="w-full h-48 object-cover rounded-md cursor-pointer hover:opacity-90 transition"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>

          {/* Lightbox Preview */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              />
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
