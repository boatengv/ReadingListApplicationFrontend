'use client'
import React from 'react'
import Navbar from '../Home/Components/Navbar'
import SideBar from './SideBar'

const Account = () => {
  return (
    <>
        <Navbar studentId={'1000'} />
        <SideBar studentId={'1000'} />
    </> 
  )
}

export default Account