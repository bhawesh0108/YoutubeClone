import React from 'react'
import SideNav from './SideNav'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='flex'>
        <SideNav />
        <Outlet/>

        </div>

    </div>

  )
}

export default Body