import React from 'react'
import AdminNavbar from '../../../Components/Admin Navbar/AdminNavbar'
import Sidebar from '../../../Components/Admin Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from '../Add_Admin/Add'
import List from '../List_Admin/List'
import Orders from '../Orders_Admin/Orders'

const AdminPanel = () => {
  return (
    <div>
        <AdminNavbar></AdminNavbar>
        <hr />
        <div className='app-content'>
            <Sidebar></Sidebar>

          <Routes>
            <Route path="/add" element={<Add/>} />
            <Route path="/list" element={<List/>} />
            <Route path="/orders" element={<Orders/>} />  
          </Routes>  
        </div>
    </div>
  )
}

export default AdminPanel