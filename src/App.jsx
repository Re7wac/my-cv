import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/layout/main/Main";

const App = () => {
  return (
    <Fragment>
      <div id='colorlib-page'>
        <Router>
          <Main />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
