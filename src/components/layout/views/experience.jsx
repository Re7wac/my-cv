import React, { Fragment } from "react";

const Languges = () => {
  return (
    <Fragment>
      <section className='colorlib-experience' data-section='experience'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>Language Skills</span>
              <h2 className='colorlib-heading animate-box'>Language</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='timeline-centered'>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-1'>
                      <i className='icon-pen2'></i>
                    </div>

                    <div className='timeline-label'>
                      <h2>
                        <a href='/'>Arabic</a>
                        {""} <span>Mother Language</span>
                      </h2>
                      <p>
                        <div
                          className='col-md-6 animate-box'
                          data-animate-effect='fadeInLeft'
                        >
                          <div className='progress-wrap'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-1'
                                role='progressbar'
                                aria-valuenow='75'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{ width: "100%" }}
                              >
                                <span>100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInRight'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-2'>
                      <i className='icon-pen2'></i>
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        <a href='/'>English</a>{" "}
                      </h2>
                      <p>
                        <div
                          className='col-md-6 animate-box'
                          data-animate-effect='fadeInLeft'
                        >
                          <div className='progress-wrap'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-2'
                                role='progressbar'
                                aria-valuenow='75'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{ width: "75%" }}
                              >
                                <span>75%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-3'>
                      <i className='icon-pen2'></i>
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        <a href='/'>Germany</a> {""} <span>B2 Niveau</span>
                      </h2>
                      <p>
                        <div
                          className='col-md-6 animate-box'
                          data-animate-effect='fadeInRight'
                        >
                          <div className='progress-wrap'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-3'
                                role='progressbar'
                                aria-valuenow='60'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{ width: "60%" }}

                                // style='width:80%'
                              >
                                <span>60%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInTop'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-4'>
                      <i className='icon-pen2'></i>
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        <a href='/'>Turkish</a>
                      </h2>
                      <p>
                        <div
                          className='col-md-6 animate-box'
                          data-animate-effect='fadeInRight'
                        >
                          <div className='progress-wrap'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-6'
                                role='progressbar'
                                aria-valuenow='80'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{ width: "80%" }}
                              >
                                <span>80%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className='timeline-entry begin animate-box'
                  data-animate-effect='fadeInBottom'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-none'></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Languges;
