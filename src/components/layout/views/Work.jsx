import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <Fragment>
      <section className='colorlib-work' data-section='work'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>My Work</span>
              <h2 className='colorlib-heading animate-box'>Recent Work</h2>
            </div>
          </div>
          <div
            className='row row-bottom-padded-sm animate-box'
            data-animate-effect='fadeInLeft'
          >
            <div className='col-md-12'>
              <p className='work-menu'>
                <span>
                  <Link to='#' className='active'>
                    Apps
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div
                className='project'
                style={{
                  backgroundImage: `url(${require("../../../images/1.png")})`,
                }}
                // style='background-image: url(images/img-1.jpg);'
              >
                <div className='desc'>
                  <div className='con'>
                    <h3>
                      <a href='work.html'>Work 01</a>
                    </h3>
                    <span>Website</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div
                className='project'
                style={{
                  backgroundImage: `url(${require("../../../images/4.jpeg")})`,
                }}
                // style='background-image: url(images/img-2.jpg);'
              >
                <div className='desc'>
                  <div className='con'>
                    <h3>
                      <a href='work.html'>Work 02</a>
                    </h3>
                    <span>Authentication</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInTop'
            >
              {/* style="background-image: url(images/img-3.jpg);" */}
              <div
                className='project'
                style={{
                  backgroundImage: `url(${require("../../../images/2323.png")})`,
                }}
              >
                <div className='desc'>
                  <div className='con'>
                    <h3>
                      <a href='work.html'>Work 03</a>
                    </h3>
                    <span>Material-Ui App</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInBottom'
            >
              {/* style="background-image: url(images/img-4.jpg);" */}
              <div
                className='project'
                style={{
                  backgroundImage: `url(${require("../../../images/323.jpeg")})`,
                }}
              >
                <div className='desc'>
                  <div className='con'>
                    <h3>
                      <a href='work.html'>Work 04</a>
                    </h3>
                    <span>FullStuck App </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Work;
