import React from 'react'

const LoginForm = () => {
  return (
    <div className="border-4 border-black mx-auto my-32 w-4/12 h-160 bg-white ">
      {/*Login Form Header*/}
      <div className="flex flex-row ml-12 mt-2 mb-16">
        <div>
          <h1 className="text-3xl italic font-serif m-4"> Welcome To Read A List </h1>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mt-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
      </div>

      {/*Email Input*/}
      <input type="email" placeholder="Email" className="border-2 border-black rounded-lg w-6/12 h-12 block text-center mx-auto my-8 text-2xl italic font-serif" required></input>
      
      {/*Password Input*/}
      <input type="password" placeholder="********" className="border-2 border-black rounded-lg w-6/12 h-12 block text-center mx-auto my-6 text-xl italic font-serif" required></input>

      {/*Login Button*/}
      <button type="button" className="border-2 border-black rounded-lg w-6/12 h-12 block text-center mx-auto my-16 text-xl font-serif bg-green-400">Login</button>

      <div className="border-t-2 border-black">
        <p className="text-center mt-6">Don't have an Account, Register by Clicking the button below</p>
        <button type="button" className="border-2 border-black rounded-lg w-6/12 h-12 block text-center mx-auto my-8 text-xl font-serif bg-red-700">Register</button>
      </div>
 
    </div>
  )
}

export default LoginForm

