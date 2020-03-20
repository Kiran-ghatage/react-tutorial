import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashboardComponent from "./client/ui/pages/dashboard/components/DashboardComponent";
import AboutComponent from "./client/ui/pages/about/components/AboutComponent";
import LoginComponent from "./client/ui/pages/login/components/LoginComponent";

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={DashboardComponent} />
      <Route path="/about" exact component={AboutComponent} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
