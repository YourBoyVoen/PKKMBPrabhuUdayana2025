import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const locations = [
  { location: "Kampus Sudirman", link: "https://app.lapentor.com/sphere/vt-kampus-sudirman-universitas-udayana" },
  { location: "Rektorat - Kampus Jimbaran", link: "https://app.lapentor.com/sphere/rektorat-kampus-jimbaran" },
  { location: "Kampus Sanglah", link: "https://app.lapentor.com/sphere/vt-kampus-sanglah-universitas-udayana" },
  { location: "Kampus Peternakan", link: "https://app.lapentor.com/sphere/fakultas-peternakan" },
  { location: "Kampus Pertanian", link: "https://app.lapentor.com/sphere/fakultas-pertanian" },
  { location: "Kampus Teknik", link: "https://app.lapentor.com/sphere/fakultas-teknik" },
  { location: "Kampus Teknik Sipil", link: "https://app.lapentor.com/sphere/teknik-sipil" },
  { location: "Kampus FMIPA", link: "https://app.lapentor.com/sphere/fakultas-matematika-dan-ilmu-pengetahuan-alam" },
  { location: "Kampus FPAR, FEB, FH, FKP", link: "https://app.lapentor.com/sphere/komplek-fpar-feb-fh-fkp" },
];

const JelajahUdayana = () => {
  const [selectedLink, setSelectedLink] = useState(locations[0].link);

  const handleChange = (e) => {
    const selected = locations.find((loc) => loc.location === e.target.value);
    if (selected) {
      setSelectedLink(selected.link);
    }
  };

  return (
    <div className="font-sans bg-[url('/assets/images/background/background.webp')] bg-repeat bg-[length:24rem] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-32 pb-16">
        <h1 className="font-bold text-yellow-400 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
          Virtual Tour Kampus Unud
        </h1>
        <p className="text-black text-sm sm:text-base max-w-3xl mb-4">
          Jelajahi berbagai tempat yang ada di Universitas Udayana melalui Virtual Tour berikut
        </p>
        <a
          href="#tour"
          className="mt-6 text-black hover:text-yellow-300 focus:text-yellow-300 animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 md:w-8" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
          </svg>
        </a>
      </header>

      {/* Tour Section */}
      <main id="tour" className="w-full max-w-5xl mx-auto px-6 pb-24">
        <select
          name="location"
          id="location"
          className="mb-6 w-full p-3 rounded-md bg-white shadow-md text-black"
          onChange={handleChange}
        >
          {locations.map((loc) => (
            <option key={loc.location} value={loc.location}>
              {loc.location}
            </option>
          ))}
        </select>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-none"
            src={selectedLink}
            title="Virtual Tour"
            allowFullScreen
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JelajahUdayana;
