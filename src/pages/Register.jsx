import React, { useState } from 'react'
import Axios from "axios";
import masuk1 from "../assets/masuk1.jpg"
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [katasandi, setKatasandi] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [daftarStatus, setDaftarStatus] = useState("");

  const daftar = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/daftar",{
      email: email,
      nama: nama,
      kataSandi: katasandi,
      nomorHp: nomorHp,
    }).then((response)=>{
      console.log(response);
      if (response.data.message){
        setDaftarStatus(response.data.message);
      }else{
        setDaftarStatus("Berhasil Membuat Akun")
      }
    })
  }

  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div className='hidden sm:block pt-14'>
        <img className='w-full h-full object-cover' src={masuk1}alt=""/>
      </div>

      <div className='bg-grey-100 flex flex-col justify-center'>
        <form className='border rounded-lg shadow-sm max-w-[400px] w-full mx-auto bg-white p-10'>
          <div className="self-center text-4xl font-bold tracking-tight leading-5 py-3 px-3 text-center text-black">Daftar Akun</div>
          <p><h1 style={{fontSize: '15px', textAlign:'center', marginTop: '20px'}}>{daftarStatus}</h1></p>
          <div className='flex flex-col py-2'>
            <label>Nama Lengkap</label>
            <input className='border p-2' onChange={(e) =>{setNama(e.target.value)}} type="text"/>
          </div>
          <div className='flex flex-col py-2'>
            <label>Nomor Hp</label>
            <input className='border p-2' onChange={(e) =>{setNomorHp(e.target.value)}} type="number"/>
          </div>
          <div className='flex flex-col py-2'>
            <label>Alamat Email</label>
            <input className='border p-2' onChange={(e) =>{setEmail(e.target.value)}} type="email"/>
          </div>
          <div className='flex flex-col py-2'>
            <label>Kata Sandi</label>
            <input className='border p-2' onChange={(e) =>{setKatasandi(e.target.value)}} type="password"/>
          </div>
          {/* <div className='flex flex-col py-2'>
            <label>Konfirmasi Kata Sandi</label>
            <input className='border p-2' type="password"/>
          </div> */}
          <button className=' shadow-lg border w-full my-5 py-4 bg-indigo-600 hover:bg-amber-500 rounded-xl text-white' onClick={daftar}>Daftar Sebagai Admin</button>
          <div className='flex justify-between'>
            <p>Sudah Memiliki Akun?</p>
            <button className='text-blue-500' onClick={() => navigate('/Masuk')}>Masuk</button>
          </div>
        </form>
      </div>
      
    </div>
    </>
  )
}
