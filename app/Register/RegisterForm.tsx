'use client';
import React, { useState } from 'react'

const RegisterForm = () => {

    return (
        <div className="border-4 border-black mx-auto mt-16 w-64 h-84 sm:my-32 sm:w-128 sm:h-128 bg-white">
            
            {/*Login Form Header*/}
            <div className="flex flex-row mt-2 mb-2 sm:ml-12 sm:mb-6">
                <div>
                <h1 className="text-sm italic font-serif mt-5 mr-4 ml-4 sm:text-3xl"> Welcome To Read A List </h1>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12 mt-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                </div>
            </div>
        
            {/*Full Name */}
            <input type="email" placeholder="Full Name" className="border-2 border-black rounded-lg w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>
            
             {/*Email Input*/}
             <input type="email" placeholder="Email" className="border-2 border-black rounded-lg w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>

            {/*Email Input*/}
            <input type="email" placeholder="Confirm Email" className="border-2 border-black rounded-lg w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>
        
            {/*Password Input*/}
            <input type="password" placeholder="Password" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>
        
            {/*Password Input*/}
            <input type="password" placeholder="Confirm Password" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto mt-4 mb-8 text-sm sm:text-xl italic font-serif" required></input>
        
            {/*Register*/}
            <button type="button" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 sm:my-8 text-sm sm:text-xl font-serif bg-red-600 hover:bg-red-400">Create Acccount</button>
        </div>
    )
}

export default RegisterForm;