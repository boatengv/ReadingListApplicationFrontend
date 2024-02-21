'use client'
import React from 'react'
import LoginForm from './LoginForm'
import Logo from './Logo'
import Image from 'next/image'
import {NextUIProvider} from "@nextui-org/react";

const LoginPage = () => {
  return (
    <NextUIProvider>
      <div className="h-screen">
        <div className="absolute inset-0 -z-10">
            <Image
            src="/front-view-books-with-copy-space.jpg"
            priority={true}
            quality={75}
            alt=""
            fill    
            />     
        </div>
        <Logo/>
        <LoginForm/>
      </div>
    </NextUIProvider>
  )
}

export default LoginPage