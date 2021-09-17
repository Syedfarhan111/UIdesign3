import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Team } from "./Component/Teams/Team";
import { SourceManage } from "./Component/SourceManage/SourceManage";
import { Dashboard } from "./Component/Main/Dashbord";


export const Landing = () => {
  return (
    <div>
      <Router>
        <Dashboard />
        <Switch>
          <Route path="/admin">
          <SourceManage />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
