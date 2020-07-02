import React, { Fragment } from "react";
import Routes from "../../routes/Routes";
import Sidebar from "../sidebar/Sidebar";
const Main = () => {
  return (
    <Fragment>
      <div className='container-wrap'>
        <Sidebar />
        <Routes />
      </div>
    </Fragment>
  );
};

export default Main;
