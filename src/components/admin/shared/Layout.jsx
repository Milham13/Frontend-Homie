import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Sidebar'

export default function Layout() {
    return(
    <>
    <Sidebar/>
     <div className='flex flex-row bg-sky-200 h-screen w-screen overflow-hidden'>
        <div className='bg-sky-200'>sidebar</div>
        <div className='bg-teal-200'>header</div>
        <div>{<Outlet/>}</div>
    </div>
    </>
    )
}