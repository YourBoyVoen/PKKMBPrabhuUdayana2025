export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
       <div className="flex items-center gap-2">
        <img src="/assets/images/logopkkmb.png" alt="Logo PKKMB" className="w-8 h-8 object-contain" />
        <span className="font-bold font-poppins text-lg text-gray-700">PKKMB Prabhu Udayana 2025</span>
      </div>
      </div>
      <ul className="flex gap-8 text-gray-700 font-medium font-poppins">
        <li><a href="#" className="hover:text-blue-500 transition">Warta Ksatria</a></li>
        <li><a href="#" className="hover:text-blue-500 transition">Jelajah Udayana</a></li>
        <li><a href="#" className="hover:text-blue-500 transition">Ormawa</a></li>
      </ul>
    </nav>
  );
}
