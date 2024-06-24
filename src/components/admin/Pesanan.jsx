import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarAdmin from './SidebarAdmin';
import NavbarA from './NavbarA';
import { Link } from 'react-router-dom';
import Alert from '../admin/shared/Alert';

const Pesanan = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/getPesanan')
            .then(res => {
                if (res.data.Status === "Success") {
                    setData(res.data.Result);
                    setFilteredData(res.data.Result); // Initialize filtered data
                } else {
                    showAlert('error', 'Error while fetching data');
                }
            })
            .catch(err => {
                console.log(err);
                showAlert('error', 'Error while fetching data');
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus pesanan ini?')) {
            axios.delete(`http://localhost:4000/delete/${id}`)
                .then(res => {
                    if (res.data.Status === "Success") {
                        setFilteredData(filteredData.filter(pesanan => pesanan.id !== id));
                        showAlert('success', 'Pesanan berhasil dihapus.');
                    } else {
                        showAlert('error', 'Gagal menghapus pesanan.');
                    }
                })
                .catch(err => {
                    console.log(err);
                    showAlert('error', 'Gagal menghapus pesanan.');
                });
        }
    };

    const handleSearch = (searchTerm) => {
        if (searchTerm === '') {
            setFilteredData(data); // If search term is empty, reset to original data
        } else {
            setFilteredData(data.filter(pesanan =>
                pesanan.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pesanan.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pesanan.alamat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pesanan.nomor_telfon.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
    };

    const showAlert = (type, message) => {
        setAlert({ type, message });
        setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
    };

    return (
        <div className="flex">
            <SidebarAdmin />
            <div className="flex-1 flex flex-col">
                <NavbarA onSearch={handleSearch} />
                <div className="flex-1 p-6 ml-64">
                    {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
                    <div className="flex justify-center mb-4">
                        <h3 className="text-2xl font-bold">Table Pesanan</h3>
                    </div>
                    <Link to="/create" className="inline-block bg-blue-900 text-white px-4 py-2 rounded mb-4">
                        Tambah Pesanan
                    </Link>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 border border-gray-300">Nama</th>
                                    <th className="px-4 py-2 border border-gray-300">Email</th>
                                    <th className="px-4 py-2 border border-gray-300">Alamat</th>
                                    <th className="px-4 py-2 border border-gray-300">Harga</th>
                                    <th className="px-4 py-2 border border-gray-300">Nomor Telepon</th>
                                    <th className="px-4 py-2 border border-gray-300">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((pesanan, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-4 py-2 border border-gray-300">{pesanan.nama}</td>
                                        <td className="px-4 py-2 border border-gray-300">{pesanan.email}</td>
                                        <td className="px-4 py-2 border border-gray-300">{pesanan.alamat}</td>
                                        <td className="px-4 py-2 border border-gray-300">{pesanan.harga}</td>
                                        <td className="px-4 py-2 border border-gray-300">{pesanan.nomor_telfon}</td>
                                        <td className="px-4 py-2 flex">
                                            <Link to={`/pesananedit/${pesanan.id}`} className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 mr-2">
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(pesanan.id)} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pesanan;