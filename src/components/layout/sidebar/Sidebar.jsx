import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <a
        href='/'
        className='js-colorlib-nav-toggle colorlib-nav-toggle'
        data-toggle='collapse'
        data-target='#navbar'
        aria-expanded='false'
        aria-controls='navbar'
      >
        <i></i>
      </a>
      <aside
        id='colorlib-aside'
        // role='complementary'
        className='border js-fullheight'
      >
        <div className='text-center'>
          <div
            className='author-img'
            style={{
              backgroundImage: `url(${require("../../../images/me.jpeg")})`,
            }}
          ></div>
          <h1 id='colorlib-logo'>
            <Link to='#'>Ali Alhayek</Link>
          </h1>
          <span className='position'>
            {/* <Link to='#'>UI/UX/Designer</Link> */}
          </span>
        </div>
        <nav id='colorlib-main-menu' role='navigation' className='navbar'>
          <div id='navbar' className='collapse'>
            <ul>
              <li className='active'>
                <Link to='#' data-nav-section='home'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='#' data-nav-section='about'>
                  About
                </Link>
              </li>
              {/* <li>
                <Link to='#' data-nav-section='services'>
                  Services
                </Link>
              </li> */}
              <li>
                <Link to='#' data-nav-section='skills'>
                  Skills
                </Link>
              </li>
              <li>
                <Link to='#' data-nav-section='education'>
                  Education
                </Link>
              </li>
              <li>
                <Link to='#' data-nav-section='experience'>
                  Language
                </Link>
              </li>
              <li>
                <Link to='#' data-nav-section='work'>
                  Work
                </Link>
              </li>
              {/* <li>
                <Link to='#' data-nav-section='blog'>
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to='#' data-nav-section='contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='colorlib-footer'>
          <ul>
            <li>
              <Link to='#'>
                <i className='icon-facebook2'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='icon-twitter2'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='icon-instagram'></i>
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='icon-linkedin2'></i>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
