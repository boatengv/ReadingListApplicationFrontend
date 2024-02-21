import React, { useState } from 'react'

const ForgotPasswordForm = () => {

  const [searchEmail, setSearchEmail] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    fetch(`http://localhost:8080/api/GetStudentId/${searchEmail}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {

      {/*Email can't be found*/}
      if(!data.studentId && !data.password && !data.salt){
        setResponse("Email Cannot be found");
        return;
      }

      setResponse("Password has been reset, and sent to email");
    })
    .catch((err) => {
        console.log(err)
    })
  }

  const handleSearchEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchEmail(e.target.value);
  }

  return (
    <div className="w-128 mx-auto mt-40 bg-white rounded-3xl">
      <h1 className="text-3xl font-serif font-bold text-center border-b-4 border-black py-6">Reset Your Password Here</h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mx-auto w-fit my-10">
          <label className="text-2xl font-serif mr-4">Enter your email:</label>
          <input 
            className="!outline-none text-center text-xl h-12 italic font-serif rounded-xl border-2 border-black w-64" 
            placeholder='Email Address'
            onChange={handleSearchEmail}
          >
          </input>  
          <p className="mt-4 text-xl font-serif text-red-600 text-center">{response}</p>      
        </div>    
        <div className="border-t-4 border-black w-full">
          <div className="w-fit mx-auto">
            <button type="submit" className="bg-blue-600 text-2xl w-96 rounded-3xl border-2 border-black hover:bg-blue-400 my-10 py-2">Search</button>
          </div>
        </div>
      </form>  
    </div>
  )  
}

export default ForgotPasswordForm