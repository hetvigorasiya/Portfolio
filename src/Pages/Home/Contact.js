import React from 'react'
import { FaAddressCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { TiWorld } from "react-icons/ti";
import { imgConfig } from '../../Image/Background';

const Contact = () => {
  return (
    <>
      <section className='pt-4 mt-4'>
        <div className='text-center mb-5'>
          <h1 className='heading1 py-3'>Contact</h1>
          <h5 className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h5>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="text-center p-4 shadow">
                <div className="d-flex align-items-center justify-content-center">
                  <span className='bg-info rounded-circle py-2 px-4 text-light fs-1'><FaAddressCard /></span>
                </div>
                <div>
                  <h4 className="mb-4 fw-bold mt-2">Address</h4>
                  <p className='text-secondary'>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="box2 text-center shadow">
                <div className="d-flex align-items-center justify-content-center">
                  <span className='bg-info rounded-circle py-2 px-4 text-light fs-1'>< FaPhone /></span>
                </div>
                <div>
                  <h4 className="mb-4 fw-bold mt-2">Contact Number</h4>
                  <p className='text-info'>+ 1235 2355 98</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="box3 text-center shadow">
                <div className="d-flex align-items-center justify-content-center">
                  <span className='bg-info rounded-circle py-2 px-4 text-light fs-1'><SiMinutemailer /></span>
                </div>
                <div>
                  <h4 className="mb-4 fw-bold mt-2">Email Address</h4>
                  <p className='text-info'>info@yoursite.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="box4 text-center shadow">
                <div className="d-flex align-items-center justify-content-center">
                  <span className='bg-info rounded-circle py-2 px-4 text-light fs-1'><TiWorld /></span>
                </div>
                <div>
                  <h4 className="mb-4 fw-bold mt-2">Website</h4>
                  <p className='text-info'>yoursite.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='mt-5'>
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-lg-6">
              <div>
                <img src={imgConfig?.User} className=" abt-img d-flex align-items-center" alt="abotme" />
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <form className="bg-light px-5 py-4 ">
                <div className="form-group pt-3">
                  <input type="text" className="form-control mb-4" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control mb-4" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control mb-4" placeholder="Contact Nuber" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control mb-4" placeholder="topic" />
                </div>
                <div className="form-group">
                  <textarea name="" id="" cols="30" rows="5" className="form-control mb-4" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5 mb-4" />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
