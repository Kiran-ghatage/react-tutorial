import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPageComponent from "./client/ui/pages/landingPage/components/LandingPageComponent";
import AboutComponent from "./client/ui/pages/about/components/AboutComponent";
import LoginComponent from "./client/ui/pages/login/components/LoginComponent";
import UsersComponent from "./client/ui/pages/users/components/UsersComponent";
import DashboardComponent from "./client/ui/pages/dashboard/components/DashboardComponent";

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPageComponent} />
      <Route path="/about" exact component={AboutComponent} />
      <Route path="/login" exact component={LoginComponent} />
      <Route path="/users" exact component={UsersComponent} />
      <Route path="/dashboard" exact component={DashboardComponent} />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
