import React from 'react';
import logo from '../admin/assets/homie.png';
import { useNavigate } from 'react-router-dom';

function SidebarAdmin() {
  const navigate = useNavigate();

  return (
    <div className='w-64 bg-sky-200 fixed h-full px-4 py-6'>
      <div className='mb-8 flex justify-center'>
      <img src={logo} alt=""/>
      </div>
      <hr className='border-gray-300' />
      <ul className='mt-10 text-blue-900 font-bold space-y-4'>
        <li className='hover:bg-yellow-500 hover:shadow-lg rounded py-2'>
          <button className='w-full text-left px-3' onClick={() => navigate('/Hadmin')}>
            Beranda
          </button>
        </li>
        <li className='hover:bg-yellow-500 hover:shadow-lg rounded py-2'>
          <button className='w-full text-left px-3' onClick={() => navigate('/Pesanan')}>
            Pesanan
          </button>
        </li>
        <li className='hover:bg-yellow-500 hover:shadow-lg rounded py-2'>
          <button className='w-full text-left px-3' onClick={() => navigate('/ProfileAdmin')}>
            Profile
          </button>
        </li>
      </ul>
      <div className='mt-auto flex justify-center'>
        <button className='w-full max-w-xs mt-8 py-2 bg-blue-900 hover:bg-amber-500 rounded-full text-white shadow-lg border' onClick={() => navigate('/')}>
          Keluar
        </button>
      </div>
    </div>
  );
}

export default SidebarAdmin;