import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div className="bg-gray-300 flex flex-row border-b-4 border-black justify-between">
        
        {/*Logo*/}
        <div className="flex flex-row">
          <div>
              <h1 className='text-3xl italic font-serif m-4'>Read A List </h1>
          </div>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mt-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
          </div>
        </div>

        <div className='flex flex-row float-right mt-3'>
            {/*Instagram*/}
            <div className='text-5xl mx-2'>  
              <FontAwesomeIcon icon={faInstagram} />
            </div>

            {/*LinkedIn*/}
            <div className='text-5xl mx-2'>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>

            {/*facebook*/}
            <div className='text-5xl mx-2'>
              <FontAwesomeIcon icon={faFacebook} />
            </div>

            {/*email*/}
            <div className='text-5xl ml-2 mr-24'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            {/*settings*/}
            <div className='text-5xl mx-2'>
              <FontAwesomeIcon icon={faGear} />
            </div>
          </div>
    </div>
  )
}

export default Navbar