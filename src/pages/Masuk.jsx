import React, { useState } from 'react'
import masuk1 from "../assets/masuk1.jpg"
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register.jsx';
import Dashboard from '../components/admin/Dashboard.jsx';
import axios from 'axios';

export default function Masuk() {
  const [email, setEmail] = useState ("");
  const [katasandi, setKatasandi] = useState ("");
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/login", {
      email: email,
      kataSandi: katasandi,
    })
    .then(res => {
      console.log(res);
         if(res.data.Status === 'Berhasil') {
        console.log(res.data.Token);
        navigate ('/Hadmin')
    } else {
      setError(res.data.Error);
    }
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <div className='hidden sm:block pt-14'>
        <img className='w-full h-full object-cover' src={masuk1}alt=""/>
      </div>
      <div className='bg-grey-100 flex flex-col justify-center'>
        <form className='border rounded-lg shadow-sm max-w-[400px] w-full mx-auto bg-white p-4'>
          <div className="self-center text-4xl font-bold tracking-tight leading-5 py-3 px-3 text-center text-black">Masuk</div>
          <div className='flex flex-col py-2'>
            <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{error && error}</h1>
            <label htmlFor='email'>Alamat Email</label>
            <input className='border p-2' type="email" placeholder='Masukkan Email'
              onChange={(e) => (setEmail(e.target.value))}/>
          </div>
          <div className='flex flex-col py-2'>
            <label htmlFor='email'>Kata Sandi</label>
            <input className='border p-2' type="password" placeholder='Masukkan Kata Sandi'
              onChange={(e) => (setKatasandi(e.target.value))}/>
          </div>
          <button className=' shadow-lg border w-full my-5 py-4 bg-indigo-600 hover:bg-amber-500 rounded-xl text-white' onClick={login}>Masuk Sebagai Admin</button>
          <div className='flex justify-content-between py-4 space-x-10'>
            <p className='flex items-center text-sm'><input className='form-check-input me-2'type='checkbox'/>
            <label className='form-check-label'>Ingatkan Saya</label></p>
            <button className='text-blue-500 text-sm'>Lupa Sandi</button>
            <button className='text-blue-500 text-sm' onClick={() => navigate('/Register')} >Buat Akun</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
