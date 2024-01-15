'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); 
      console.log("email submitted is:", email);
      console.log("password submitted is:", password);

      fetch(`https://readlistapplicationbackend-0f5ae867c6ce.herokuapp.com/api/GetStudentId/${email}`,{
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }
      })
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          
          router.push(`/Home/?studentId=${data}`);
      })
      .catch((err) => {
          console.log(err)
      })
  }
  
  const handleEmail = (e: { target: { value: React.SetStateAction<string> } }) => {
      setEmail(e.target.value)
  }

  const handlePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
      setPassword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-4 border-black mx-auto mt-16 w-64 h-80 sm:my-32 sm:w-128 sm:h-108 bg-white">
        {/*Login Form Header*/}
        <div className="flex flex-row sm:ml-12 mt-2 mb-8">
          <div>
            <h1 className="text-sm italic font-serif mt-4 mr-2 ml-4 sm:text-3xl"> Welcome To Read A List </h1>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12 mt-4 sm:mt-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </div>

        {/*Email Input*/}
        <input type="email" value={email} onChange={handleEmail} placeholder="Email" className="!outline-none border-b-2 border-black  w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>
        
        {/*Password Input*/}
        <div className="w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" >
            <div className="grid grid-cols-6 h-12 mb-4">
                {/*Password Input*/}
                <div className="col-start-1 col-span-5 border-black border-b-2">
                    <input value={password} onChange={handlePassword} type={`${!showPassword ? "password" : "text" }`} placeholder="****************" className="!outline-none h-6 sm:h-12 block text-center text-sm sm:text-xl italic font-serif" required></input>
                </div>
                <div className="col-start-6 col-end-6 border-black border-b-2">
                    <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto mt-2 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            </div>
        </div>

        {/*Login Button*/}
        <button type="submit" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto mt-8 mb-0 text-sm sm:text-xl font-serif bg-green-600 hover:bg-green-400">Login</button>
        
        {/*Forgotten Password Link*/}
        <div className="mt-4">
          <p onClick={() => router.push('/ForgotPassword')} className="text-center text-blue-600 underline mb-2 cursor-pointer">forgotten password?</p>
        </div>
        
        <div className="border-t-2 border-black">
          <p className="text-center mt-2 text-sm sm:text-md">Please Create Account Below</p>
          <Link href="/Register"><button type="button" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto my-2 text-sm sm:text-xl font-serif bg-red-600 hover:bg-red-400">Register</button></Link>
        </div>
      </div>
    </form>     
  )
}

export default LoginForm

