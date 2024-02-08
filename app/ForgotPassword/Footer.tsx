import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-white w-full h">
      <div className='flex flex-row float-right my-3'>
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
            <div className='text-5xl ml-2 mr-8'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
        </div>
    </footer>
  )
}

export default Footer