import React from 'react'
import { imgConfig } from '../../Image/Background'
import { brand1, brand2, brand3, brand4, brand5 } from '../../Image/Logo-Brand'

const AboutUs = () => {
  return (
    <>
      <section className='abt-content pt-5'>
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-12">
              <div>
                <img src={imgConfig?.User} className="abt-img d-flex align-items-center img-fluid" alt="About Me" />
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="px-4 pt-2">
                <h2 className="h3 fw-bold">About Me</h2>
                <p className='text-secondary fw-bold'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <ul className="about-info px-md-0 px-2">
                  <li className="d-flex"><span className=' fw-bold'>Name:</span> <span className='heading2 text-secondary'>Gorasiya Hetvi</span></li>
                  <li className="d-flex"><span className=' fw-bold'>Date of birth:</span> <span className='mx-3 text-secondary'>April 11, 2003</span></li>
                  <li className="d-flex"><span className=' fw-bold'>Address:</span> <span className='mx-5 text-secondary'>San Francisco CA 97987 USA</span></li>
                  <li className="d-flex"><span className=' fw-bold'>Zip code:</span> <span className='hdg1 text-secondary'>1000</span></li>
                  <li className="d-flex"><span className=' fw-bold'>Email:</span> <span className='hdg2 text-secondary'>hetvi@gmail.com</span></li>
                  <li className="d-flex"><span className=' fw-bold'>Phone: </span> <span className='hdg3 text-secondary'>+1-2234-5678-9-0</span></li>
                </ul>
                <div className="d-flex fs-6 mt-2 mb-3">
                  <h5 className='text-info fw-bold'>120</h5>
                  <h5 className='fw-bold mx-4'>Project Complete</h5>
                </div>
                <button type='button' className='btn btn-info text-light'>DOWNLOAD CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='py-5 pb-3'>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-3 col-md-2">
              <img src={brand1} alt="Brand 1" style={{ height: '63px' }} className='pt-2'/>
            </div>
            <div className="col-6 col-sm-3 col-md-2">
              <img src={brand2} alt="Brand 2" style={{ height: '63px' }} className='pt-2'/>
            </div>
            <div className="col-6 col-sm-3 col-md-2">
              <img src={brand3} alt="Brand 3" style={{ height: '63px' }} className='pt-2'/>
            </div>
            <div className="col-6 col-sm-3 col-md-2">
              <img src={brand4} alt="Brand 4" style={{ height: '63px' }} className='pt-2'/>
            </div>
            <div className="col-6 col-sm-3 col-md-2">
              <img src={brand5} alt="Brand 5" style={{ height: '63px' }} className='pt-2'/>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}
export default AboutUs
