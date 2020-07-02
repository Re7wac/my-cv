import React, { Fragment } from "react";

const Education = () => {
  return (
    <Fragment>
      <section className='colorlib-education' data-section='education'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>Education</span>
              <h2 className='colorlib-heading animate-box'>Education</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-md-12 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='fancy-collapse-panel'>
                <div
                  className='panel-group'
                  id='accordion'
                  role='tablist'
                  aria-multiselectable='true'
                >
                  <div className='panel panel-default'>
                    <div className='panel-heading' role='tab' id='headingOne'>
                      <h4 className='panel-title'>
                        <a
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          FullStack WebDevelopment Training
                        </a>
                      </h4>
                    </div>
                    <div
                      id='collapseOne'
                      className='panel-collapse collapse in'
                      role='tabpanel'
                      aria-labelledby='headingOne'
                    >
                      <div className='panel-body'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <p>
                              DCI Digital Career Institute GmbH, HamburgAugast
                              2019 - June 2020
                            </p>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              One year intensive full time training in Full
                              Stack Web Development- Based on MERN stack
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='panel panel-default'>
                    <div className='panel-heading' role='tab' id='headingTwo'>
                      <h4 className='panel-title'>
                        <a
                          className='collapsed'
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#collapseTwo'
                          aria-expanded='false'
                          aria-controls='collapseTwo'
                        >
                          Participation in the orientation course in the field
                          of "webdevelopment", <br />
                          DCI Hamburg
                        </a>
                      </h4>
                    </div>
                    <div
                      id='collapseTwo'
                      className='panel-collapse collapse'
                      role='tabpanel'
                      aria-labelledby='headingTwo'
                    >
                      <div className='panel-body'>
                        <p>June2019 - July 2019</p>
                        <ul>
                          <li>Html</li>
                          <li>Css</li>
                          <li>JavaScript</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='panel panel-default'>
                    <div className='panel-heading' role='tab' id='headingThree'>
                      <h4 className='panel-title'>
                        <a
                          className='collapsed'
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'
                        >
                          Food Engineering in Gaziantep Universitesi
                        </a>
                      </h4>
                    </div>
                    <div
                      id='collapseThree'
                      className='panel-collapse collapse'
                      role='tabpanel'
                      aria-labelledby='headingThree'
                    >
                      <div className='panel-body'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <p>February 2013 - Mars 2015</p>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              <ul>
                                <li>
                                  Outstanding grasp of safe packaging principles
                                  and procedures
                                </li>
                                <li>Test procedure and design development</li>
                                <li>
                                  {" "}
                                  Good organizational and time management skills
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='panel panel-default'>
                    <div className='panel-heading' role='tab' id='headingFour'>
                      <h4 className='panel-title'>
                        <a
                          className='collapsed'
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#collapseFour'
                          aria-expanded='false'
                          aria-controls='collapseFour'
                        >
                          Grafik Design in Damascus University
                        </a>
                      </h4>
                    </div>
                    <div
                      id='collapseFour'
                      className='panel-collapse collapse'
                      role='tabpanel'
                      aria-labelledby='headingFour'
                    >
                      <div className='panel-body'>
                        <p>September 2011 - May 2012</p>
                      </div>
                    </div>
                  </div>

                  <div className='panel panel-default'>
                    <div className='panel-heading' role='tab' id='headingFive'>
                      <h4 className='panel-title'>
                        <a
                          className='collapsed'
                          data-toggle='collapse'
                          data-parent='#accordion'
                          href='#collapseFive'
                          aria-expanded='false'
                          aria-controls='collapseFive'
                        >
                          High School Secondary
                        </a>
                      </h4>
                    </div>
                    <div
                      id='collapseFive'
                      className='panel-collapse collapse'
                      role='tabpanel'
                      aria-labelledby='headingFive'
                    >
                      <div className='panel-body'>
                        <p>
                          <strong>Degree: Bachelor</strong>
                        </p>
                      </div>
                    </div>
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

export default Education;
