import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import playstore from '../assets/google.png';
import appstore from "../assets/apps.png";

export default function NewPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    console.log('toggleModal called');
    setShowModal(!showModal);
  };

  console.log('showModal:', showModal);  // Log untuk memeriksa nilai state

  return (
    <div>
      <Navbar />
      <div className='flex pt-20 gap'>
        <div className="relative bg-white w-full h-auto overflow-hidden">
          <div className="absolute top-[240px] left-1/2 transform -translate-x-1/2 w-[633px] h-auto bg-blue-200 rounded-lg p-8 shadow-lg">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">HOMIE LAUNDRY</h2>
              <p className="text-lg text-blue-600 mb-8">
                Laundry di Pekanbaru menyediakan layanan cuci dan setrika pakaian dengan kualitas terbaik,
                memastikan pakaian bersih dan segar untuk pelanggan setia di kota ini.
              </p>
              <button 
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg cursor-pointer mb-4"
                onClick={toggleModal}
              >
                Pesan sekarang
              </button>
              <div className="flex items-center justify-center bg-white py-2 px-4 rounded-lg shadow-lg">
                <div className="bg-no-repeat bg-center w-[22px] h-[22px] mr-2" style={{ backgroundImage: 'url(../assets/images/logos_whatsapp-icon.png)' }}></div>
                <span className="text-sm font-bold text-blue-700">Hubungi Laundry</span>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/2">
                <span className="absolute top-2 right-2 text-gray-500 text-2xl cursor-pointer" onClick={toggleModal}>
                  &times;
                </span>
                <img className='size-60 items-center' src={playstore} alt=""/>
                <img className='size-60' src={appstore} alt=""/>
                </div>
            </div>
          )}

          <footer className="bg-cover bg-no-repeat mt-8" style={{ backgroundImage: 'url(../assets/images/vector-5.svg)' }}>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-lg font-light text-white mb-6">
                Solusi Praktis untuk Mencuci. Bersih, Rapi, Siap Pakai! Menjaga Kesegaran, Kepercayaan, dan Kebersihan untuk sempurnakan harimu!
              </p>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-[66px] h-[66px] bg-no-repeat bg-center" style={{ backgroundImage: 'url(../assets/images/WhatsApp.png)' }}></div>
                <div className="text-white text-lg font-medium">+62 823-6371-6903</div>
              </div>
              <div className="flex justify-center items-center space-x-4 mt-6">
                <div className="w-[45px] h-[43px] bg-no-repeat bg-center" style={{ backgroundImage: 'url(../assets/images/group.png)' }}></div>
                <div className="text-white text-lg font-medium">@pekanbaru_laundry</div>
              </div>
              <div className="flex justify-center items-center space-x-4 mt-6">
                <div className="w-[28px] h-[35px] bg-no-repeat bg-center" style={{ backgroundImage: 'url(../assets/images/Vector.png)' }}></div>
                <div className="text-white text-lg font-medium">+62 823-6371-6903</div>
              </div>
              <div className="w-[240px] h-[240px] bg-no-repeat bg-center mx-auto mt-10" style={{ backgroundImage: 'url(../assets/images/homie.png)' }}></div>
            </div>
          </footer>

          <div className="absolute top-[240px] left-1/4 w-[671px] h-auto bg-no-repeat bg-cover" style={{ backgroundImage: 'url(../assets/images/laundry-besar-1.png)' }}></div>
        </div>
      </div>
    </div>
  );
}