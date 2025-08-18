import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-14 py-8 flex items-center justify-between">
      <div className="text-4xl font-bold tracking-wide">APOTEK SEHAT</div>
      <div className="flex items-center gap-10">
        <ul className="hidden md:flex gap-8 text-2xl font-bold ">
          <a className="hover:text-gray-200 cursor-pointer">Beranda</a>
          <a href="#TentangKami" className="hover:text-gray-200 cursor-pointer">Tentang Kami</a>
          <a className="hover:text-gray-200 cursor-pointer">Layanan</a>
          <a className="hover:text-gray-200 cursor-pointer">Kontak</a>
        </ul>
        <Link to="/login">
        <button className="bg-white text-green-700 font-semibold px-7 py-3 rounded-full text-2x1 hover:bg-green-100">
          Masuk
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
