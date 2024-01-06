import React from 'react'

const LoginForm = () => {
  return (
    <div className="border-4 border-black mx-auto mt-16 w-64 h-80 sm:my-32 sm:w-128 sm:h-160 bg-white">
      {/*Login Form Header*/}
      <div className="flex flex-row sm:ml-12 mt-2 mb-8 sm:mb-16">
        <div>
          <h1 className="text-sm italic font-serif mt-4 mr-4 ml-4 sm:text-3xl"> Welcome To Read A List </h1>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-12 sm:h-12 mt-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
      </div>

      {/*Email Input*/}
      <input type="email" placeholder="Email" className="border-2 border-black rounded-lg w-6/12 sm:w-64 h-6 sm:h-12 block text-center mx-auto my-4 sm:my-8 text-sm sm:text-2xl italic font-serif" required></input>
      
      {/*Password Input*/}
      <input type="password" placeholder="********" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 text-sm sm:text-xl italic font-serif" required></input>

      {/*Login Button*/}
      <button type="button" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto  my-8 sm:my-16 text-sm sm:text-xl font-serif bg-green-400">Login</button>

      <div className="border-t-2 border-black">
        <p className="text-center mt-2 sm:mt-6 text-sm">Register Below</p>
        <button type="button" className="border-2 border-black rounded-lg w-6/12 h-6 sm:h-12 block text-center mx-auto my-4 sm:my-8 text-sm sm:text-xl font-serif bg-red-700">Register</button>
      </div>
 
    </div>
  )
}

export default LoginForm
