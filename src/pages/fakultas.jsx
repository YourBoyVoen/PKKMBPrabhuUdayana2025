import Navbar from "../components/navbar";

export default function Fakultas() {
  return (
    <div className="font-gelasio bg-[url('/assets/images/background.webp')] bg-[length:24rem] bg-repeat min-h-screen">
      <Navbar />

      <div className="h-screen mt-16 py-2 w-4/5 mx-auto">
        <h4 className="px-4 py-2 bg-blue-200 text-xl text-center lg:text-start sm:text-3xl text-white w-fit rounded-md font-semibold">
          Organisasi Mahasiswa Fakultas
        </h4>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col py-6">
          <div className="flex justify-center">
            <div className="flex items-center py-24">
              <button className="page1 rounded-xl bg-yellow-400 p-2 hover:bg-yellow-700">⟵</button>
            </div>
            <div className="h-56 w-56 px-4">
              <img src="/assets/images/logoBEM.png" alt="Logo BEM" className="max-h-full mx-auto" />
            </div>
            <div className="flex items-center py-24">
              <button className="page2 rounded-xl bg-yellow-400 p-2 hover:bg-yellow-700">⟶</button>
            </div>
          </div>

          <div className="bg-white rounded-sm shadow-md px-3 py-4 h-80 overflow-scroll">
            <p className="text-md lg:text-lg font-serif">
              {/* Isi deskripsi fakultas disini */}
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block py-6">
          <div className="grid grid-cols-12 w-full">
            <div className="bg-white rounded-sm shadow-md p-4 h-80 col-span-8 overflow-scroll">
              <p className="text-md lg:text-lg font-serif">
                {/* Isi deskripsi fakultas disini */}
              </p>
            </div>
            <div className="col-span-4">
              <img src="/assets/images/logoBEM.png" alt="Logo BEM" className="max-h-80 mx-auto" />
            </div>
          </div>

          <div className="flex flex-row my-4">
            <div className="flex ml-32 justify-end gap-x-4 w-[850px] flex-row">
              <button className="page1 rounded-xl bg-yellow-400 p-2 hover:bg-yellow-700">⟵</button>
              <button className="page2 rounded-xl bg-yellow-400 p-2 hover:bg-yellow-700">⟶</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
