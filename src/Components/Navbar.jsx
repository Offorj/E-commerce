import React from 'react'
import './Navbar.css'
import { FaEnvelopeSquare, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
  return (
    <React.Fragment>
   <div className='main-box'>

<div className='first'>
    <FaPhone className='phone'/>
    <p>(225) 555-0118</p>
   <FaEnvelopeSquare/>
   <p>michelle.rivera@example.com</p>
  
</div>

<div>
<p>Follow Us and get a chance to win 80% off</p>
</div>

<div className='second'>
  <div>
    <p>Follow Us : </p>
  </div>
  <div className='icons'>
    <FaInstagram/>
    <FaYoutube/>
    <FaFacebook/>
    <FaTwitter/>
  </div>
</div>

    </div>
    </React.Fragment>
 
  )
}

export default Navbar;