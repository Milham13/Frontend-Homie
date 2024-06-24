import React from "react"
import Home from "./pages/Home"
import Masuk from "./pages/Masuk"
import Hadmin from "./pages/Hadmin"
import Register from "./pages/Register"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/admin/Dashboard"
import Pesanan from "./components/admin/Pesanan"
import ProfileAdmin from "./components/admin/ProfileAdmin"
import HomeAdmin from "./components/admin/HomeAdmin"
import SidebarAdmin from "./components/admin/SidebarAdmin"
import TambahPesanan from "./components/admin/TambahPesanan"
import EditPesanan from "./components/admin/EditPesanan"
import Pemesanan from "./pages/Pemesanan"
import Layanan from "./pages/Layanan"
import Tentang from "./pages/Tentang"

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Pemesanan" element={<Pemesanan />} />
    <Route path="/Masuk" element={<Masuk />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Hadmin" element={<Hadmin />} />
    <Route path="/Sidebar" element={<Sidebar />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Pesanan" element={<Pesanan />} />
    <Route path="/ProfileAdmin" element={<ProfileAdmin />} />
    <Route path="/HomeAdmin" element={<HomeAdmin />} />
    <Route path="/SidebarA" element={<SidebarAdmin />} />
    <Route path="/create" element={<TambahPesanan />} />
    <Route path="/pesananedit/:id" element={<EditPesanan />} />
    <Route path="/Layanan" element={<Layanan />} />
    <Route path="/Tentang" element={<Tentang />} />
  </Routes>
</Router>
  )
}

export default App
