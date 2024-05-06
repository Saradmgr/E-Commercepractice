import React from 'react'
import { Outlet } from 'react-router-dom'

const Adminlayout = () => {
  return (
    <div>
    <div>AdminLayout</div>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}

export default Adminlayout