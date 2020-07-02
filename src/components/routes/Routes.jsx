import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
// import Dashboard from "../layout/dashboard/Dashboard";

const Router = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default Router;
