import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { compareSync } from 'bcrypt-ts'

const Navbar = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter();

  const backToLogin = () => {
    route.push('/Login');
  }

  const handleEmail = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    fetch(`http://localhost:8080/api/GetStudentId/${email}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {

      {/*Entered the wrong email*/}
      if(!data.studentId && !data.password && !data.salt){
        toast.error('You have entered the wrong Email', {
          position: "top-center",
          theme: "dark"
        });
        return;
      }

      {/*Entered the wrong password*/}
      if(!compareSync(password, data.password)){
        toast.error('You have entered the wrong Password', {
          position: "top-center",
          theme: "dark"
        });
        return
      } 

      {/*Go to the Home Page*/}
      route.push(`/Home/?studentId=${data.studentId}`);
    })
    .catch((err) => {
        console.log(err)
    })
}

  return (
    <div className="bg-white flex flex-row border-b-4 border-black justify-between">

      {/*Logo*/}
      <div onClick={backToLogin} className="flex flex-row cursor-pointer w-fit">
        <div className="">
            <h1 className='text-3xl italic font-serif m-4'>Read A List </h1>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mt-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
        </div>
      </div>
      

      <form onSubmit={handleSubmit}>      
        <div className="flex flex-row m-4">
          {/*Email Input*/}
          <input 
            type="email" 
            value={email} 
            onChange={handleEmail} 
            placeholder="Email" 
            className="!outline-none h-12 border-2 border-black rounded-xl text-center text-xl italic font-serif mr-4" 
            required
          >
          </input>

          {/*Password Input*/}
          <div className="grid grid-cols-6 h-12 border-2 border-black rounded-xl mr-4">
              <div className="col-start-1 col-span-5 ">
                  <input 
                    value={password}  
                    onChange={handlePassword} 
                    type={`${!showPassword ? "password" : "text" }`} 
                    placeholder="****************" 
                    className="!outline-none text-center text-xl italic font-serif mt-3" 
                    required
                  >
                  </input>
              </div>
              <div className="col-start-6 col-end-6 border-l-2 border-black">
                  <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto mt-3 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
              </div>
          </div>

          {/*Login Button*/}
          <button type="submit" className="border-2 border-black rounded-lg w-36 h-12 text-center text-xl font-serif bg-blue-600 hover:bg-blue-400">Login</button>
        </div>
      </form> 
    </div>
  )
}

export default Navbar