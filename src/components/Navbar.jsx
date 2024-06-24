import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/homie.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-100 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 size-14">
            <img className="w-24 h-auto" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#BERANDA" onClick={() => navigate('/')} className="text-gray-700 hover:text-gray-900 font-bold">BERANDA</a>
            <a href="#PEMESANAN" onClick={() => navigate('/')} className="text-gray-700 hover:text-gray-900 font-bold">PEMESANAN</a>
            <a href="#LAYANAN" onClick={() => navigate('/Layanan')} className="text-gray-700 hover:text-gray-900 font-bold">LAYANAN</a>
            <a href="#TENTANG" onClick={() => navigate('/Tentang')} className="text-gray-700 hover:text-gray-900 font-bold">TENTANG</a>
            <a href="#MASUK" onClick={() => navigate('/Masuk')} className="bg-blue-500 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-yellow-400">MASUK</a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={handleToggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#BERANDA" onClick={() => navigate('/')} className="block text-gray-700 hover:text-gray-900">BERANDA</a>
            <a href="#PEMESANAN" onClick={() => navigate('/')} className="block text-gray-700 hover:text-gray-900">PEMESANAN</a>
            <a href="#LAYANAN" onClick={() => navigate('/')} className="block text-gray-700 hover:text-gray-900">LAYANAN</a>
            <a href="#TENTANG" onClick={() => navigate('/')} className="block text-gray-700 hover:text-gray-900">TENTANG</a>
            <a href="#MASUK" onClick={() => navigate('/Masuk')} className="block bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">MASUK</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;