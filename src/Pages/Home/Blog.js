import React from 'react'
import { imgConfig } from '../../Image/Background'
import { MdChat } from "react-icons/md";

const Blog = () => {
  return (
    <>
      <section>
        <div className='text-center mb-5'>
          <h1 className='heading1 py-3'>Our Blog</h1>
          <h5 className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h5>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card border-0">
                <div>
                  <img src={imgConfig?.blg1} className="card-img-top  d-flex align-items-center" alt="blg1" />
                </div>
                <div className="card-body">
                  <div className="card-text h5 fw-bold">Why Lead Generation is Key for Business Growth</div>
                  <div className="d-flex align-items-center mb-3 meta fw-bold text-info">
                    <span className="mr-2">Sept. 12, 2019</span>
                    <div className='mx-3'>Admin</div>
                    <div><span><MdChat /></span> 3</div>
                  </div>
                  <div className='h6 text-secondary b-content'>A small river named Duden flows by their <br />place and supplies it with the necessary <br />regelialia.</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0">
                <div>
                  <img src={imgConfig?.blg2} className="card-img-top  d-flex align-items-center" alt="blg2" />
                </div>
                <div className="card-body">
                  <div className="card-text h5 fw-bold">Why Lead Generation is Key for Business Growth</div>
                  <div className="d-flex align-items-center mb-3 meta fw-bold text-info">
                    <span className="mr-2">Sept. 12, 2019</span>
                    <div className='mx-3'>Admin</div>
                    <div><span><MdChat /></span> 3</div>
                  </div>
                  <div className='h6 text-secondary b-content'>A small river named Duden flows by their <br />place and supplies it with the necessary <br />regelialia.</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card border-0">
                <div>
                  <img src={imgConfig?.blg3} className="card-img-top  d-flex align-items-center" alt="blg3" />
                </div>
                <div className="card-body">
                  <div className="card-text h5 fw-bold">Why Lead Generation is Key for Business Growth</div>
                  <div className="d-flex align-items-center mb-3 meta fw-bold text-info">
                    <span className="mr-2">Sept. 12, 2019</span>
                    <div className='mx-3'>Admin</div>
                    <div><span><MdChat /></span> 3</div>
                  </div>
                  <div className='h6 text-secondary b-content'>A small river named Duden flows by their <br />place and supplies it with the necessary <br />regelialia.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Blog
