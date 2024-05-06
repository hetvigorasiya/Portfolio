import React from 'react'
import Resume from './Resume';
import AboutUs from './AboutUs';
import Services from './Services';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

const Home = () => {
  return (

    <>
      <section className="hero-wrap js-fullheight justify-content-center align-items-center">
        <div className="overlay"></div>

        <div className="container">
          <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">

            <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
              <div className="row col-12 content text-center">
                <span className="subheading text-info">Hey! I am</span>
                <h1>Gorasiya Hetvi</h1>
                <h2>I'm a
                  <span className="text-info" data-period="2000" data-type='[ "Web Designer."]'>
                    <span className="wrap">Full-Stuck Developer</span>
                  </span>
                </h2>
              </div>
            </div>

          </div>
        </div>
      </section>


      <AboutUs />
      <Resume />
      <Services />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
