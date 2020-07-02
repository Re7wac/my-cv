import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <section className='colorlib-contact' data-section='contact'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>Get in Touch</span>
              <h2 className='colorlib-heading'>Contact</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8'>
              <div
                className='colorlib-feature colorlib-feature-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='colorlib-icon'>
                  <i className='icon-globe-outline'></i>
                </div>
                <div className='colorlib-text'>
                  <p>
                    <a href='/'>alhayek_ali@outlook.com</a>
                  </p>
                </div>
              </div>

              <div
                className='colorlib-feature colorlib-feature-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='colorlib-icon'>
                  <i className='icon-map'></i>
                </div>
                <div className='colorlib-text'>
                  <p>Oststeinbeker Weg 30, 22117 Hamburg, Germany</p>
                </div>
              </div>

              <div
                className='colorlib-feature colorlib-feature-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='colorlib-icon'>
                  <i className='icon-phone'></i>
                </div>
                <div className='colorlib-text'>
                  <p>
                    <a href='tel://'>+49176 6084 7241</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
