import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

interface Props{
  studentId: string
}


const Navbar = (props:Props) => {
  
  const [openSettings, setOpenSettings] = useState(false)
  const route = useRouter()

  const logout = () => {
    fetch(`http://localhost:8080/api/Logout/${props.studentId}`,{
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
    }});
    route.push('\Login')
  }

  return (
    <div className="bg-gray-300 flex flex-row border-b-4 border-black justify-between">
      
      {/*Logo*/}
      <div className="flex flex-row">
        <div>
            <h1 className='text-3xl italic font-serif my-4 ml-4 mr-2'>Read A List </h1>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mt-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
        </div>
      </div>

      <div className='flex flex-row float-right mt-3'>
          {/*Instagram*/}
          <div className='text-5xl mx-2 cursor-pointer hover:text-6xl'>  
            <FontAwesomeIcon icon={faInstagram} />
          </div>

          {/*LinkedIn*/}
          <div className='text-5xl mx-2 cursor-pointer hover:text-6xl'>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>

          {/*facebook*/}
          <div className='text-5xl mx-2 cursor-pointer hover:text-6xl'>
            <FontAwesomeIcon icon={faFacebook} />
          </div>

          {/*email*/}
          <div className='text-5xl ml-2 mr-8 cursor-pointer hover:text-6xl'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          {/*settings*/}
          <div className='text-5xl mx-2 cursor-pointer hover:text-6xl' onClick={() => setOpenSettings(!openSettings)}>
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div> 
        
        {openSettings &&
          <div className="absolute block top-16 right-0 border-2 border-black bg-gray-400" onClick={() => route.push("/Account")}>
            
            {/*Account*/}
            <div className=" border-b-2 border-black w-full hover:bg-gray-300 cursor-pointer">
              <div className="inline-flex w-fit px-12 py-2 mx-auto">
                <h1 className="text-2xl italic font-serif ">Account</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>  
            </div>

            {/*Logout*/}
            <div className="w-full hover:bg-gray-300 cursor-pointer" onClick={logout}>
              <div className="inline-flex w-fit px-12 py-2 mx-auto">
                <h1 className="text-2xl italic font-serif ">Logout</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>  
            </div>  
          </div>
        }
    </div>
  )
}

export default Navbar