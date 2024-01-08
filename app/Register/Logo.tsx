'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Logo = () => {
  
  const route = useRouter()

  const backToLogin = () => {
    route.push('/Login');
  }

  return (
    <div className="bg-white">
        {/* Logo */}
        <div className="border-b-4 border-black">
          <div onClick={backToLogin} className="flex flex-row cursor-pointer w-64">
            <div>
                <h1 className='text-3xl italic font-serif m-4 '>Read A List </h1>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mt-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
            </div>
          </div>
      </div> 
    </div>
  )
}

export default Logo