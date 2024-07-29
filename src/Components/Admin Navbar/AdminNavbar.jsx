import React from 'react'
import './AdminNavbar.css'
import { adminAssets } from '../../assets/adminAssets'


const AdminNavbar = () => {
    return (
        <div className='navbar' style={{display:"flex", justifyContent:'space-between', alignItems:'center', padding:'7px'}}>
            <img className='logo' src={adminAssets.logo} alt="" />
            <img className='profile' src={adminAssets.profile_image} alt="" />
        </div>
    )
}

export default AdminNavbar