import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <h1 className='leftheading'>Pedal Circle</h1>
        <p className='fpara'>PedalCircle is an innovation hub by PedalStart for selected early-stage startups to
          accelerate the journey  in 4 months  and build them seed-stage investable .
        </p>
      </div>
      <div className="right">
        <h3>Contact Us !</h3>
        <span className='fspan'><FaPhoneAlt style={{marginRight:'10px'}}/><p style={{marginRight:'5px'}}>+91</p>9650346002</span>
        <span className='fspan2'><MdEmail style={{marginRight:'10px'}}/><p>connect@pedalstart.com</p></span>
        <span className='fspan3'><GrLocationPin style={{marginRight:'10px',fontSize:'15px'}}/><p style={{width:'15rem',lineHeight:'1.2rem',fontWeight:'400'}}>SpringHouse Coworking, Grand Mall, Sikandpur, Gurgaon ,Haryana 122004, IN</p></span>
      </div>
    </div>
  )
}

export default Footer
