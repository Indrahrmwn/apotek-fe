import React from "react";
import loginImage from "../assets/login-image.png";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Bagian Kiri - Ilustrasi */}
      <div className="hidden md:flex w-1/2 bg-green-500 items-center justify-center">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-3/4 h-auto object-contain"
        />
      </div> 

      {/* Bagian Kanan - Form Login */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-10">
        <div className="max-w-sm w-full">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <img
              src="/logo.png" // ganti logo sesuai aset kamu
              alt="Apotek Sehat"
              className="w-16 mb-3"
            />
            <h1 className="text-green-600 text-2xl font-bold">Apotek Sehat</h1>
            <p className="text-gray-500 text-sm mt-1">Pls Login to continue</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
            >
              Login
            </button>
            <button
              type="button"
              className="w-full border border-green-500 text-green-500 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;