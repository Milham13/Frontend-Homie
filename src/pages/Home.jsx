import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Landing from '../assets/HomieP.jpeg';
import Logo from '../assets/homie.png';
import ServiceCard from '../components/ServiceCard.jsx';
import Testimoni from '../components/Testimoni.jsx';
import { useNavigate } from 'react-router-dom';

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <img src={Landing} alt="Landing" className="w-full rounded-b-2xl h-auto" />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <section id="BERANDA" className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <img src={Logo} alt="Logo Homie" className="w-40 h-auto mb-6" />
          <div className="text-center">
            <p className="text-lg font-sans font-bold text-blue-600 mb-2">Apa itu Homie ?</p>
            <h2 className="text-3xl font-sans font-bold text-blue-800 mb-4">Bersihkan segala kekotoran agar seperti baru</h2>
            <p className="text-base text-gray-600 mb-8">
              Homie adalah sebuah platform pemesanan laundry online yang memudahkan pengguna yang berada di Pekanbaru untuk mengatur dan memesan
              layanan laundry mereka secara efisien. Dengan Laundry Pekanbaru, Anda dapat menjadwalkan jadwal pengambilan dan pengantaran laundry Anda, serta
              memilih jenis layanan yang Anda butuhkan. Website ini menyediakan kemudahan dan kenyamanan bagi pengguna yang ingin menjaga pakaian mereka tetap
              bersih dan rapi tanpa harus repot datang ke tempat laundry.
            </p>
            <section id="PEMESANAN">
              <button
                className="bg-blue-500 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-yellow-400"
                onClick={() => navigate('/Pemesanan')}
              >
                Pesan Sekarang
              </button>
            </section>
          </div>
        </section>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-10">
        <ServiceCard />
      </div>
      <div className="w-full max-w-5xl mx-auto mt-10">
        <Testimoni />
      </div>
      <Footer />
    </>
  );
};

export default Beranda;