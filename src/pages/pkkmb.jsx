import Navbar from "../components/navbar";

export default function Pkkmb() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className="flex-1 bg-cover bg-center relative flex flex-col justify-center items-center px-8 py-16"
        style={{ backgroundImage: `url('/assets/images/background/background.webp')` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-sinerva text-white mb-8">
            Apa Itu PKKMB?
          </h1>
          <p className="max-w-3xl text-lg font-poppins leading-relaxed text-white">
            PKKMB-Prabhu Udayana 2025 atau pengenalan kehidupan baru mahasiswa kampus Universitas Udayana adalah program orientasi yang bertujuan untuk menyambut dan menjembatani adaptasi dari siswa menjadi mahasiswa dengan memahami Universitas Udayana dan kehidupan perkuliahan di sana.
            <br /><br />
            Melalui kegiatan ini, mahasiswa baru akan dikenalkan lebih dalam tentang sejarah, budaya, dan nilai-nilai luhur Universitas Udayana, termasuk tata cara perkuliahan, organisasi kemahasiswaan, dan peluang pengembangan diri.
          </p>
        </div>
      </div>
    </div>
  );
}
