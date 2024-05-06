import React from 'react'
import { LiaSearchengin } from "react-icons/lia";
import { MdScience } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";

const Services = () => {
    return (
        <>
            <section className='my-5'>
                <div className='text-center mb-5'>
                    <h1 className='heading1 py-3'>Services</h1>
                    <h5 className='text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h5>
                </div>

                <div className="container">
                    <div className="row gx-md-5">

                        <div className="col-md-6 col-lg-4">
                            <div className="box1 shadow px-5 pb-3 text-center">
                                <span className="icon">
                                    <LiaSearchengin />
                                </span>
                                <div>
                                    <h5 className="pt-4 fw-bold">WEB DESIGN</h5>
                                    <hr width={'50px'} className='s-line mb-4 text-info' />
                                    <p className='text-center text-secondary'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ">
                            <div className="box1 shadow px-5 pb-3 text-center">
                                <span className="icon">
                                    < MdScience />
                                </span>
                                <div>
                                    <h5 className="pt-4 fw-bold">PHOTOGRAPHY</h5>
                                    <hr width={'50px'} className='s-line mb-4 text-info' />
                                    <p className='text-center text-secondary'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 text-center">
                            <div className="box1 shadow px-5 pb-3 text-center">
                                <span className="icon">
                                    <FaGift />
                                </span>
                                <div>
                                    <h5 className="pt-4 fw-bold">WEB DEVLOPER</h5>
                                    <hr width={'50px'} className='s-line mb-4 text-info' />
                                    <p className='text-center text-secondary'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5 gx-md-5">
                        <div className="col-md-6 col-lg-4">
                            <div className="box1 shadow px-5 pb-3 text-center">
                                <span className="icon">
                                    <RiLightbulbFlashFill />
                                </span>
                                <div>
                                    <h5 className="pt-4 fw-bold">APP DEVLOPING</h5>
                                    <hr width={'50px'} className='s-line mb-4 text-info' />
                                    <p className='text-center text-secondary'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="box1 shadow px-5 pb-3 text-center">
                                <span className="icon">
                                    <MdOutlineBrandingWatermark />
                                </span>
                                <div>
                                    <h5 className="pt-4 fw-bold">BRANDING</h5>
                                    <hr width={'50px'} className='s-line mb-4 text-info' />
                                    <p className='text-center text-secondary'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 text-center ">
                            <div className="box1 shadow px-5 pb-3 text-center">
                                <span className="icon">
                                    <HiLightBulb />
                                </span>
                                <div>
                                    <h5 className="pt-4 fw-bold">PRODUCT STRATEGY</h5>
                                    <hr width={'50px'} className='s-line mb-4 text-info' />
                                    <p className='text-center text-secondary'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
