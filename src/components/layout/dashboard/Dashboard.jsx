import React, { Fragment } from "react";
import Home from "../views/Home";
import About from "../views/About";
// import Service from "../views/Service";
import Skills from "../views/Skills";
import Education from "../views/Education";
import Experience from "../views/experience";
import Work from "../views/Work";
// import Blog from "../views/Blog";
import Contact from "../views/Contact";

const Dashboard = () => {
  return (
    <Fragment>
      <div id='colorlib-main'>
        <Home />
        <About />
        {/* <Service /> */}
        <Skills />
        <Education />
        <Experience />
        <Work />
        {/* <Blog /> */}
        <Contact />
      </div>
    </Fragment>
  );
};

export default Dashboard;
