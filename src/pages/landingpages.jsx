import React from "react";
import landingImage from "../assets/GenshinlmpactPhoto 2024_12_28 00_09_26.png";
import { Link } from "react-router-dom";

const LandingPages = () => {
  return (
    <>
      {/* Section Hero */}

      <section className="w-[90%] mx-auto bg-blue-100 px-20 py-40 flex flex-col md:flex-row items-center justify-between rounded-b-3xl">
        <div className="max-w-2xl mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold text-green-700 mb-8 leading-snug">
            Selamat Datang Di <br /> Apotek Sehat
          </h1>
          <p className="text-xl md:text-4xl text-black mb-10">
            Solusi lengkap untuk kebutuhan kesehatan Anda. Kami hadir dengan
            layanan terpercaya dan ramah.
          </p>
          <Link to="/login">
            <button className="bg-green-600 text-white px-10 py-5 rounded-xl text-2xl font-semibold hover:bg-green-700">
              Mulai Sekarang
            </button>
          </Link>
        </div>
        <div>
          <img
            src={landingImage}
            alt="Apotek"
            className="rounded-3xl shadow-lg w-[800px] object-cover"
          />
        </div>
      </section>

      {/* Section Tentang Kami */}
      <section
        className="w-full bg-green-600 px-20 py-50 flex flex-col md:flex-row items-center justify-between mt-40"
        id="TentangKami"
      >
        <div className="text-white max-w-2xl mb-10 md:mb-0">
          <h2 className="text-6xl md:text-6xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-lg md:text-3xl leading-relaxed">
            Apotek Sehat adalah penyedia layanan kesehatan terpercaya yang
            menyediakan obat-obatan berkualitas dan pelayanan profesional oleh
            apoteker berpengalaman.
            <br />
            Kami berkomitmen memberikan pelayanan cepat, aman, dan ramah kepada
            seluruh pelanggan kami.
          </p>
        </div>
        <div>
          <img
            src={landingImage}
            alt="Rak Obat"
            className="bg-white p-4 rounded-3xl shadow-lg w-[800px] object-cover"
          />
        </div>
      </section>

      {/* Section Layanan Kami */}
      <section className="w-full bg-white px-20 py-32 mt-40" id="LayananKami">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <div className="w-400 h-1 bg-black  mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-gray-200 mb-6"></div>
            <h3 className="text-2xl font-semibold mb-2">Konsultasi Apoteker</h3>
            <p className="text-lg text-gray-600">
              Dapatkan saran langsung dari apoteker berlisensi secara gratis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-gray-200 mb-6"></div>
            <h3 className="text-2xl font-semibold mb-2">Pesan Obat Online</h3>
            <p className="text-lg text-gray-600">
              Pesan obat dengan mudah dan cepat melalui platform kami.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-gray-200 mb-6"></div>
            <h3 className="text-2xl font-semibold mb-2">Cek Stok Obat</h3>
            <p className="text-lg text-gray-600">
              Lihat ketersediaan obat sebelum datang ke apotek.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-20 py-16 mt-60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Deskripsi */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Apotek Sehat</h3>
            <p className="text-lg text-gray-400">
              Solusi lengkap untuk kebutuhan kesehatan Anda. Pelayanan cepat,
              aman, dan terpercaya.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Jl. Kesehatan No. 123, Jakarta</li>
              <li>📞 (021) 123-456</li>
              <li>✉️ apoteksehat@email.com</li>
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Menu</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#TentangKami" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#LayananKami" className="hover:text-white">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#Kontak" className="hover:text-white">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis & Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Apotek Sehat. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default LandingPages;
