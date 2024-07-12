import React from 'react'
import './home.css'
import graphimg from '../../assets/graph2.png'
import { FiArrowDownRight } from "react-icons/fi";


const Hero = () => {
  return (
    <div className='container'>
      <div className="h-left">
        <h1 className='h-heading'>Accelerating Growth Driving Success</h1>
        <p className='h-para'>PedalCircle is an offline acceleration cohort by PedalStart,
         giving handpicked startups access to 24x7 offline innovation hub, mentorship from Industry experts and upto $250k investment opportunity.</p>
         <button className='h-btn'>Start your journey</button>
         <div className="h-div">
            <div className="h-leftdiv">
                <img className='h-imageleft' src={graphimg} />
            </div>
            <div className="h-rightdiv">
                <h3 className='h-minheading'>Ready to Grow Your Venture?</h3>
            </div>
         </div>
      </div>
      <div className="h-right">
        <div className="h-updiv">
            <img className='h-imageright' src='https://s3-alpha-sig.figma.com/img/4cb0/f4ff/c97383f6bfce6450cb565f91bc3bfac9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YY8Y0uVZaxWw1OaWb0Qu~i4y-QR68OL88ptcPFx6WHxWQ1BoRuDLaZ~uDyzrQPYDVvPButpCV05q5VdpcOfBkHlus6WxHPuaLK2xqXnS-DCzh5g-p8q~vwD1KPcjc~bzpAGHTN9d2u~zJKvqV4Bhakobsjj026ZQT8gM8tUnpu4-jpl-4f1W22SH~kSN1kaDfV9WFEGD9G8axo1Okwd8s8zP3mM-Gu9vNoPH5x1tfR6e0KBFR5wBjPtpDt7HFfrpKsFhV-D7c8GYXJ5KaYJhGvCi5IAqzr4l5i4pH2sN9QQF9YVebdvgVuOnHgnWjUzucT-AR4vMvPsdj0LTTSjgeA__' alt='Photo'/>
            <h4 className='h-h4'>TRAIN ON YOUR TIME</h4>
            <FiArrowDownRight style={{fontSize:'3.7rem',marginLeft:'14rem',marginTop:'-25px',backgroundColor:'white',borderRadius:'5px'}}/>
        </div>
        <div className="h-botdiv">
            <p className='h-botpara'>Join our outcome-driven offline program where startups receive expert support and access to <b>PedalStart's</b> shared resourceS.</p>
        </div>
      </div>
    </div>
  )


}

export default Hero
