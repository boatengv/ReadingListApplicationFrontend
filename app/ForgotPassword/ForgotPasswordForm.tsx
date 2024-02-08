import React from 'react'

const ForgotPasswordForm = () => {
  return (
    <div className="w-128 mx-auto mt-40 bg-white rounded-3xl">
      <h1 className="text-3xl font-serif font-bold text-center border-b-4 border-black py-4">Reset Your Password Here</h1>
      <form className="m-12">
          <label className="text-2xl font-serif mr-4">Enter your email:</label>
          <input className="!outline-none text-center h-12 text-xl italic font-serif rounded-xl border-2 border-black" placeholder='Email Address'></input>
      </form>  
      <div className="border-t-4 border-black w-full">
          <button className="bg-blue-600 text-2xl w-96 rounded-3xl border-2 border-black hover:bg-blue-400 my-10 py-2 ml-14">Search</button>
      </div>
    </div>
  )  
}

export default ForgotPasswordForm