import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuBar from '../../components/admin-components/MenuBar'
const AdminPage = () => {
  return (
    <div className='flex'>
      <MenuBar />
      <Outlet />
    </div>
  )
}

export default AdminPage
