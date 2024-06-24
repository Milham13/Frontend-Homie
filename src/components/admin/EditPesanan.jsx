import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin';
import Alert from '../admin/shared/Alert';

function EditPesanan() {
    const { id } = useParams();
    const [pesanan, setPesanan] = useState({
        nama: "",
        email: "",
        alamat: "",
        harga: "",
        nomor_telfon: "",
    });
    const [alert, setAlert] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setPesanan((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        axios.get(`http://localhost:4000/get/${id}`)
            .then(res => {
                setPesanan(res.data.Result[0]);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:4000/update/${id}`, pesanan);
            setAlert({ type: 'success', message: 'Pesanan berhasil diperbarui!' });
            setTimeout(() => {
                navigate("/pesanan"); // Arahkan ke halaman pesanan setelah update berhasil
            }, 2000); // Tunggu 2 detik sebelum mengarahkan
        } catch (err) {
            console.log(err);
            setAlert({ type: 'error', message: 'Gagal memperbarui pesanan.' });
        }
    };

    return (
        <div>
            <SidebarAdmin />
            <div className='flex flex-col items-center pt-4'>
                <div className="flex justify-center mb-4">
                    <h3 className="text-2xl font-bold">Edit Pesanan</h3>
                </div>
                {alert && (
                    <Alert
                        type={alert.type}
                        message={alert.message}
                        onClose={() => setAlert(null)}
                    />
                )}
                <form className="w-full max-w-lg" onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder='Enter Name' autoComplete='off' name="nama" value={pesanan.nama} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder='Enter Email' autoComplete='off' name="email" value={pesanan.email} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Harga</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder='Enter Price' autoComplete='off' name="harga" value={pesanan.harga} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Alamat</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder='Enter Address' autoComplete='off' name="alamat" value={pesanan.alamat} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nomor Telepon</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder='Enter Phone Number' autoComplete='off' name="nomor_telfon" value={pesanan.nomor_telfon} onChange={handleChange} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPesanan;