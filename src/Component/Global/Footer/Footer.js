import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <footer className='bg-dark text-light py-5 mt-5'>
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <div>
              <h5 className='fw-bold'>About</h5>
              <p className='text-secondary'>Far far away, behind the word  <br />mountains, far from the <br />countries Vokalia and <br />Consonantia, there live the <br />blind texts.</p>
              <div className='fs-3'>
                <div className='text-secondary'> <FaFacebookF/> <span> <FaTwitter/></span> <span><GrInstagram/></span> <span> < FaLinkedinIn/></span></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 md-4">
            <div className='mx-5'>
              <h5 className='fw-bold'>Links</h5>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Home</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> About</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Resume</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Services</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Blogs</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Projects</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Contact</span></p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div>
              <h5 className='fw-bold'>Services</h5>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Web Design</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Web Devlopment</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Business Strategy</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Data Analysis</span></p>
              <p className='text-secondary mb-2'><span><FaLongArrowAltRight/> Graphic Design</span></p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div>
              <h5 className='fw-bold'>Have A Question?</h5>

              <div className='d-flex text-secondary'>
                <div className='fs-5 '><FaLocationDot/></div>
                <div className='mx-4 mb-2'>203 Fake St. Mountain <br/>View, San Francisco,<br />California, USA</div>
              </div>

              <div className='d-flex text-secondary'>
                <div className='fs-5'><FaPhone/></div>
                <div className='text-secondary mx-4 mb-2 mt-2'>	+2 392 3929 210</div>
              </div>

              <div className='d-flex text-secondary'>
                <div className='fs-4'><IoIosMail/></div>
                <div className='text-secondary mx-4 mt-2'>	info@yourdomain.com</div>
              </div>

            </div>
          </div>

        </div>
        <div className='text-center mt-5 text-secondary'>Copyright © 2024 All rights reserved | This template is made with  <FaHeart/> by Hetvi Gorasiya.</div>
      </div>
    </footer>
   </>
  )
}

export default Footer
