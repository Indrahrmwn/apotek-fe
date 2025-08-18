import React from "react";
import loginImage from "../assets/WhatsApp Image 2025-08-18 at 04.00.09.jpeg";
import logo from "../assets/react.svg"; // ganti logo apotekmu
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <div className="flex h-screen">
      {/* Bagian Kiri - Ilustrasi */}
      <div className="hidden md:flex w-3/5 bg-gradient-to-br from-green-500 to-green-600 items-center justify-center">
        <img
          src={loginImage}
          alt="Register Illustration"
          className="w-4/5 h-auto object-contain"
        />
      </div>

      {/* Bagian Kanan - Form Register */}
      <div className="w-full md:w-2/5 flex justify-center items-center px-6 md:px-12 bg-white">
        <div className="max-w-md w-full">
          {/* Logo + Nama */}
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="Apotek Sehat" className="w-12 mr-3" />
            <h1 className="text-green-600 text-3xl font-bold">Apotek Sehat</h1>
          </div>

          {/* Input Fields */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">Nomor Telepon</label>
              <input
                type="tel"
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Link ke Login */}
            <p className="text-center text-gray-500 text-sm">
              Sudah punya akun?{" "}
              <Link to="/formlogin" className="text-green-600 font-medium hover:underline">
                Login
              </Link>
            </p>

            {/* Tombol Register */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;