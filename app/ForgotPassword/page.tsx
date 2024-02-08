'use client';
import React from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import Navbar from './Navbar'
import Footer from './Footer'

const page = () => {
  return (
    <div className="bg-gray-300 h-dvh">
      <>
        <Navbar/>
      </>
      <>
        <ForgotPasswordForm/>
      </>
      <>
        <Footer/>
      </>
    </div>
    
  )
}

export default page