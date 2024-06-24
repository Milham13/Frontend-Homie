import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin';

function TambahPesanan() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [harga, setHarga] = useState("");
    const [nomor_telfon, setNomor_telfon] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    const create = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/create", {
          nama: nama,
          email: email,
          alamat: alamat,
          harga: harga,
          nomor_telfon: nomor_telfon,
        }).then((response) => {
          console.log(response);
          if (response.data.message) {
            setAlertMessage(response.data.message);
            setShowAlert(true);
          } else {
            setAlertMessage("Pesanan berhasil ditambahkan!");
            setShowAlert(true);
            setTimeout(() => {
              navigate('/pesanan');
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
          setAlertMessage("Terjadi kesalahan, silakan coba lagi.");
          setShowAlert(true);
        });
    };

    return (
        <div>
          <SidebarAdmin />
          <div className='flex flex-col items-center pt-4'>
          <div className="flex justify-center mb-4">
                    <h3 className="text-2xl font-bold">Tambah Pesanan</h3>
                </div>
            {showAlert && (
              <div className={`w-full max-w-md mb-4 px-4 py-2 rounded ${alertMessage.includes("berhasil") ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                {alertMessage}
              </div>
            )}
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
                    <input 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder='Masukkan Nama' 
                        autoComplete='off'
                        onChange={(e) => { setNama(e.target.value) }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input 
                        type="email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder='Masukkan Email' 
                        autoComplete='off'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Harga</label>
                    <input 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Masukkan Harga" 
                        autoComplete='off'
                        onChange={(e) => { setHarga(e.target.value) }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Alamat</label>
                    <input 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Masukkan Alamat" 
                        autoComplete='off'
                        onChange={(e) => { setAlamat(e.target.value) }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nomor Telfon</label>
                    <input 
                        type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder='Masukkan Nomor Telfon' 
                        autoComplete='off'
                        onChange={(e) => { setNomor_telfon(e.target.value) }}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        onClick={create}
                    >
                        Create
                    </button>
                </div>
            </form>
          </div>
        </div>
    );
}

export default TambahPesanan;