import React from "react";
import loginImage from "../assets/WhatsApp Image 2025-08-18 at 04.00.09.jpeg"; // gambar ilustrasi
import logo from "../assets/react.svg"; // ganti ke logo apotek kalau sudah ada

const FormLogin = () => {
  return (
    <div className="flex h-screen">
      {/* Bagian Kiri - Ilustrasi */}
      <div className="hidden md:flex w-3/5 bg-gradient-to-br from-green-500 to-green-600 items-center justify-center">
        <img
          src={loginImage}
          alt="Ilustrasi Apotek"
          className="w-4/5 h-auto object-contain"
        />
      </div>

      {/* Bagian Kanan - Form Login */}
      <div className="w-full md:w-2/5 flex justify-center items-center px-6 md:px-12 bg-white">
        <div className="max-w-md w-full">
          {/* Logo + Nama */}
          <div className="flex items-center mb-10">
            <img src={logo} alt="Apotek Sehat" className="w-14 mr-4" />
            <h1 className="text-green-600 text-3xl font-bold">Apotek Sehat</h1>
          </div>

          {/* Form Login */}
          <form className="space-y-6">
            {/* Input Nomor Telepon */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Nomor Telepon
              </label>
              <input
                type="text"
                placeholder="nomor telepon"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Register Link */}
            <div className="text-center text-sm text-gray-500">
              Anda belum punya akun?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
