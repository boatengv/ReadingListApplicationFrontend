import React from 'react'
import LoginForm from './components/LoginForm'
import Logo from './components/Logo'
import Image from 'next/image'


const LoginPage = () => {

  return (
    <div className="h-screen">
      <div className="absolute inset-0 -z-10">
          <Image
          src="/front-view-books-with-copy-space.jpg"
          quality={100}
          alt=""
          fill          
          />     
      </div>
      <Logo/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage