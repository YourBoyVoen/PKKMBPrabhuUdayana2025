import { useParams } from "react-router-dom";
import fakultasData from "../data/fakultasData";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function FacultyDetailPage() {
  const { fakultas } = useParams();
  console.log(fakultas);
  const data = fakultasData[fakultas];
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  if (!data) return <div className="p-10 text-red-500">Fakultas tidak ditemukan</div>;

  return (
    <div className="pt-20">
    <Navbar />
    <div className={`font-poppins transition-all duration-700 ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"} p-6`}>
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src="/assets/images/feb.webp"
          alt={data.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-sinerva font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.description}</p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          {data.highlight.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>

        <div className="flex gap-6 mt-6">
          <div className="p-4 bg-gray-100 rounded shadow text-center">
            <h2 className="text-xl font-bold">{data.stats.years}</h2>
            <p className="text-sm text-gray-500">Pengalaman</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow text-center">
            <h2 className="text-xl font-bold">{data.stats.projects}</h2>
            <p className="text-sm text-gray-500">Proyek / Riset</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
