import React, { Fragment } from "react";

const Skills = () => {
  return (
    <Fragment>
      <div
        id='colorlib-counter'
        className='colorlib-counters'
        style={{
          backgroundImage: `url(${require("../../../images/cover_bg_1.jpg")})`,
        }}
        data-stellar-background-ratio='0.5'
      >
        <div className='overlay'></div>
        <div className='colorlib-narrow-content'>
          <div className='row'></div>
          <div className='row'>
            <div className='col-md-4 text-center animate-box'>
              <span
                className='colorlib-counter js-counter'
                data-from='0'
                data-to='309'
                data-speed='5000'
                data-refresh-interval='50'
              ></span>
              <span className='colorlib-counter-label'>Cups of coffee</span>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <span
                className='colorlib-counter js-counter'
                data-from='0'
                data-to='7'
                data-speed='5000'
                data-refresh-interval='50'
              ></span>
              <span className='colorlib-counter-label'>Projects</span>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <span
                className='colorlib-counter js-counter'
                data-from='0'
                data-to='1'
                data-speed='5000'
                data-refresh-interval='50'
              ></span>
              <span className='colorlib-counter-label'>Clients</span>
            </div>
          </div>
        </div>
      </div>

      <section className='colorlib-skills' data-section='skills'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>My Specialty</span>
              <h2 className='colorlib-heading animate-box'>My Skills</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='progress-wrap'>
                <h3>JavaScript</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-1'
                    role='progressbar'
                    aria-valuenow='85'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='progress-wrap'>
                <h3>React js</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-2'
                    role='progressbar'
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>Node js</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-3'
                    role='progressbar'
                    aria-valuenow='60'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "60%" }}

                    // style='width:80%'
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>Express</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-6'
                    role='progressbar'
                    aria-valuenow='60'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>MongoDB</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-4'
                    role='progressbar'
                    aria-valuenow='70'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "70%" }}

                    // style='width:90%'
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='progress-wrap'>
                <h3>MATERIAL-UI</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-5'
                    role='progressbar'
                    aria-valuenow='70'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>jQuery</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-6'
                    role='progressbar'
                    aria-valuenow='65'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>Scss</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-1'
                    role='progressbar'
                    aria-valuenow='65'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "85%" }}

                    // style='width:90%'
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>MySQL</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-2'
                    role='progressbar'
                    aria-valuenow='30'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>Bootsrap</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-3'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>Redux</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-5'
                    role='progressbar'
                    aria-valuenow='75'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "75%" }}

                    // style='width:90%'
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='progress-wrap'>
                <h3>Css</h3>
                <div className='progress'>
                  <div
                    className='progress-bar color-4'
                    role='progressbar'
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: "80%" }}

                    // style='width:90%'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
