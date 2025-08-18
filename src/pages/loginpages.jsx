import React from "react";
import loginImage from "../assets/WhatsApp Image 2025-08-18 at 04.00.09.jpeg";
import logo from "../assets/react.svg"; // ganti dengan logo apotekmu

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Bagian Kiri - Ilustrasi */}
      <div className="hidden md:flex w-3/5 bg-gradient-to-br from-green-500 to-green-600 items-center justify-center">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-4/5 h-auto object-contain"
        />
      </div>

      {/* Bagian Kanan - Form Login */}
      <div className="w-full md:w-2/5 flex justify-center items-center px-6 md:px-12 bg-white">
        <div className="max-w-sm w-full text-left">
          {/* Logo */}
          <div className="flex flex-col items-start mb-12">
            <img src={logo} alt="Apotek Sehat" className="w-16 mb-4" />
            <h1 className="text-green-600 text-3xl font-bold">Apotek Sehat</h1>
            <p className="text-gray-500 text-lg mt-2">Pls Login to continue</p>
          </div>

          {/* Tombol Login / Register */}
          <div className="space-y-6">
            <button
              type="button"
              className="w-full bg-green-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              Login
            </button>
            <button
              type="button"
              className="w-full bg-green-500/10 text-green-600 py-4 rounded-full text-lg font-semibold border border-green-600 hover:bg-green-50 transition duration-200"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
