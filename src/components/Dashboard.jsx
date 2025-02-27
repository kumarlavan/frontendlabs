import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
// import Home from './Home/Home'
// import Footer from './Footer/Footer'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard;