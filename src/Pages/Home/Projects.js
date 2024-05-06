import React from 'react'
import { imgConfig } from '../../Image/Background'

const Projects = () => {
  return (
    <>
      <section className='py-4 my-5'>
        <div className='container'>
          <div className='text-center mb-5'>
            <h1 className='heading1 py-3'>Our Projects</h1>
            <h5 className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h5>
          </div>

          <div className="row mb-3">

            <div className="col-md-4">
              <img src={imgConfig.work1} alt="work1" className='project d-flex align-items-center mt-1'/>
            </div>

            <div className="col-md-4" >
              <img src={imgConfig.work2} alt="work2" className='project d-flex align-items-center mt-1'/>
            </div>

            <div className="col-md-4">
              <img src={imgConfig.work3} alt="work3" className='project d-flex align-items-center mt-1'/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 ">
            <img src={imgConfig.work4} alt="work4" className='project d-flex align-items-center mt-1'/>
            </div>
            <div className="col-md-4">
            <img src={imgConfig.work5} alt="work5" className='project d-flex align-items-center mt-1'/>
            </div>
            <div className="col-md-4">
              <img src={imgConfig.work6} alt="work6" className='project d-flex align-items-center mt-1'/>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Projects
