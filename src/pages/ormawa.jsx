import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const daftarOrmawa = [
  { nama: "UKM Mapala", kategori: "UKM", logo: "/assets/images/ukm/mapala.webp" },
  { nama: "UKM Wushu", kategori: "UKM", logo: "/assets/images/ukm/wushu.JPG" },
  { nama: "UKM Jegeg Bagus Udayana", kategori: "UKM", logo: "/assets/images/ukm/jbu.JPG" },
  { nama: "UKM Catur", kategori: "UKM", logo: "/assets/images/ukm/catur.JPG" },
  { nama: "UKM Bulu Tangkis", kategori: "UKM", logo: "/assets/images/ukm/bultang.JPG" },
  { nama: "UKM Gateball", kategori: "UKM", logo: "/assets/images/ukm/gateball.JPG" },
  { nama: "Senat Mahasiswa Fakultas Ilmu Budaya", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/smfib.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Kedokteran", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfk.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Hukum", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfh.webp" },
  { nama: "Senat Mahasiswa Fakultas Teknik", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/smft.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Pertanian", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfp.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Ekonomi dan Bisnis", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfeb.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Peternakan", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfapet.webp" },
  { nama: "Badan Eksekutif Mahasiswa Matematika dan Ilmu Pengetahuan Alam", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfmipa.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Kedokteran Hewan", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfkh.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Teknologi Pertanian", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemftp.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Pariwisata", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfpar.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfisip.webp" },
  { nama: "Badan Eksekutif Mahasiswa Fakultas Kelautan dan Perikanan", kategori: "Ormawa Fakultas", logo: "/assets/images/ormawa-fakultas/bemfkp.webp" },
  { nama: "Ikatan Mahasiswa Sumatera Utara", kategori: "Paguyuban", logo: "/assets/images/paguyuban/imsu.JPG" },
  { nama: "Paguyuban Mahasiswa Nusa Tenggara Timur", kategori: "Paguyuban", logo: "/assets/images/paguyuban/pmntt.JPG" },
  { nama: "Komoenitas Mahasiswa Sasak", kategori: "Paguyuban", logo: "/assets/images/paguyuban/kmossak.JPG" },
  { nama: "Keluarga Mahasiswa Jawa Universitas Udayana", kategori: "Paguyuban", logo: "/assets/images/paguyuban/gajayana.JPG" },
];

const kategoriList = ["UKM", "Ormawa Fakultas", "Paguyuban"];

export default function Ormawa() {
  return (
    <div className="font-sans bg-[url('/assets/images/background/background.webp')] bg-[length:24rem] bg-repeat min-h-screen">
      <Navbar />

      <div className="w-11/12 max-w-6xl mx-auto pt-24 pb-16 animate-fade-in">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
          Daftar Organisasi Mahasiswa
        </h2>
        <p className="text-center text-black text-sm md:text-base mb-12">
          Temukan informasi mengenai UKM, Ormawa Fakultas, dan Paguyuban di Universitas Udayana
        </p>

        {kategoriList.map((kategori) => {
          const dataPerKategori = daftarOrmawa.filter((item) => item.kategori === kategori);
          return (
            <section key={kategori} className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                {kategori}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dataPerKategori.map((ormawa, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-full aspect-square overflow-hidden">
                      <img
                        src={ormawa.logo}
                        alt={ormawa.nama}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-black">{ormawa.nama}</h4>
                      <p className="text-sm text-black">{ormawa.kategori}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}