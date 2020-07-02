import React, { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
      <section id='colorlib-hero' className='js-fullheight' data-section='home'>
        <div className='flexslider js-fullheight'>
          <ul className='slides'>
            {/* style='background-image: url(images/img_bg_1.jpg);' */}
            <li
            // style={{
            //   backgroundImage: `url(${require("../../../images/download.png")})`,
            // }}
            >
              <div className='overlay'></div>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text'>
                    <div className='slider-text-inner js-fullheight'>
                      <div className='desc'>
                        <h1>
                          I am <br />a Web Developer.
                        </h1>

                        <p>
                          <a
                            href='https://github.com/Re7wac'
                            className='btn btn-primary btn-learn'
                          >
                            View Portfolio <i className='icon-briefcase3'></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
