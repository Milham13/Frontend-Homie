import React from 'react'
import logo from '../assets/homie.png'
import Masuk from '../pages/Masuk'
import { useNavigate } from 'react-router-dom'
import Dashboard from './admin/Dashboard'


export default function Sidebar() {
  const navigate = useNavigate()
  return (
      <div className="bg-white flex-wrap">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-20 py-16 w-full bg-sky-200 max-md:px-5 max-md:mt-10">
              <img src={logo} alt=""/>
              <div className='py-48'>       
          <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-amber-500 py-2'>
              <button className='px-3'onClick={() => navigate('/Hadmin')}>
                Dashboard
              </button>
            </li>
          </ul>     
          <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-amber-500 py-2'>
              <button className='px-3'onClick={() => navigate('/Pesanan')}>
                Pesanan
              </button>
            </li>
          </ul>      
          <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-amber-500 py-2'>
            <button className='px-3'onClick={() => navigate('/ProfileAdmin')}>
                Profile
              </button>
            </li>
          </ul>
          <button className=' shadow-lg border w-36 my-2 py-1 bg-indigo-600 hover:bg-amber-500 rounded-full text-white' onClick={() => navigate('/Masuk')}>Keluar</button>
  
          </div>
            </div>
          </div>
        </div>
      </div>
  )
}
